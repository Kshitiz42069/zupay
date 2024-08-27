import { useState } from "react";
import {useAuthContext} from '../context/AuthContext.jsx';
import toast from 'react-hot-toast'


function UseSignUp() {
    const [loading,setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const signup = async({fullname,username,password,confirmPassword})=>{
        const success = handleInputErrors({fullname,username,password,confirmPassword});
        if(!success){
            return;
        }
        setLoading(true);
        try {
            const res = await fetch("http://localhost:8000/api/auth/signin",{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({fullname,username,password,confirmPassword})
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            localStorage.setItem('blogs',JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }
  return {loading,signup}
}

export default UseSignUp

function handleInputErrors({fullname,username,password,confirmPassword}){
    if(!fullname || !username || !password || !confirmPassword){
        toast.error('please fill all the details')
        return false;
    }

    if(password !== confirmPassword){
        toast.error('password does not match')
        return false;
    }
    
    if(password.length<6){
        toast.error('password must be alteast 6 characters')
        return false;
    }

    return true;

}