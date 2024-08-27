import User from '../models/user.js'
import bcrypt from 'bcrypt'
import generateToken from '../utils/generateToken.js';

export const signin = async(req,res)=>{
    try {
        const {fullname,username,password,confirmPassword} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({message:'Password Does Not Match'});
        }

        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({message:'User already exists'});
        }
        //hashed password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            fullname,
            username,
            password:hashedPassword,
        });

        if(newUser){
            //generate token to be inserted here
            generateToken(newUser._id,res);
            await newUser.save();
            res.status(200).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username
            })
        }
        else{
            res.status(400).json({error:'Invalid User Data'});  
        }
    } catch (error) {
        console.log('error in the signup function',error);
        res.status(500).json({error:'Internal Server Error'});
    }
}

export const login = async(req,res)=>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username});

        const isPassword = await bcrypt.compare(password,user?.password || '');

        if(!user || !isPassword){
            return res.status(400).json({error:'Invalid Credentails'});
        }
        generateToken(user._id,res);

        res.status(200).json({
            username:user.username,
            fullname:user.fullname
        });
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"});
        console.log('Error in the login function');
    }
}

export const logout = async(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"logout succesfully"})
    } catch (error) {
        res.status(500).json({error:'Invalid server error'});
        console.log("error in the logout function");
    }
}