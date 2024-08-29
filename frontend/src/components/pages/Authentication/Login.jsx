import { useState } from "react"
import UseLogin from "../../hooks/UseLogin";

const Login = () => {
  const [username, setUsername] = useState("dai@gmail.com");
  const [password, setPassword] = useState("1234567");
  const {loading,login} = UseLogin();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    await login(username,password)
}

  return (
    <div className="relative flex items-center justify-center h-[90vh]">
      <img className="absolute w-full h-full -z-10" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/06/How_To_Start_A_Blog_-_article_image.jpg" alt="banner" />
      <div className="bg-[#F2F2F2] lg:w-2/3 h-[30rem] flex rounded-xl lg:rounded-full">
        {/* left side */}
        <div className="w-1/2 hidden bg-[#1E201E] text-[#F2F2F2] lg:flex flex-col gap-[2rem] justify-center text-center p-4 rounded-l-xl">
          <p className="edu text-7xl">Welcome Back!</p>
          <p className="nerko text-4xl">Enter your credentials to login and read some interesting blogs.</p>
        </div>
        {/* right side */}
        <div className="flex flex-col justify-center p-[2rem] lg:w-2/3 gap-[1rem]">
          <div>
            <p className="text-2xl">Enter Your Credentials</p>
          </div>
          <div>
            <form className="flex flex-col gap-[1rem] lg:w-[25rem]" action="submit" onSubmit={handleSubmit}>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input type="password" className="grow" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
              </label>
              <button className="btn bg-[#1E201E] text-white">
                {loading ? <span className='loading loading-spinner'></span>: "Login"}
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-[1rem]">
            <p>Dont have an account?!</p>
            <a href="/signup"><button className="btn bg-[#1E201E] text-white w-[6rem]">Sign Up</button></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login