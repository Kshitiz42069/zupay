import { useAuthContext } from "../context/AuthContext"
import UseLogout from "../hooks/UseLogout";

// icons
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
  const {authUser} = useAuthContext();
  const {loading,logout} = UseLogout();
  return (
    <div>
      <div className="navbar bg-[#1E201E]">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost text-xl lg:text-4xl nerko text-[#ffffff] underline underline-offset-6"><span className="edu">BE</span>loggers</a>
        </div>
        <div className="flex-none">
          <div className="lg:w-[20rem] w-[10rem]">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd" />
              </svg>
            </label>
          </div>
          {authUser ? (
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.pinimg.com/564x/f5/e2/fb/f5e2fb51fcb62017a89fbcfe97bd6897.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a href="/accountdetails/1" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                {!loading ? (
                  <a href="/" onClick={logout}>Logout</a>
                ):(
                  <span className=' loading loading-spinner'></span>
                )}
              </li>
            </ul>
          </div>
          ):(
            <a href="/signup">
              <button className="ml-2 btn hidden lg:block bg-[#1E201E] hover:text-[black] rounded-full text-white">
                Sign Up
              </button>
              <div className="ml-3 lg:hidden text-white">
                <LoginIcon/>
                <p className="text-xs">Login</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar