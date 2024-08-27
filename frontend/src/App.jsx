
import {BrowserRouter as Router,Route,Routes, Navigate} from 'react-router-dom';
import Login from "./components/pages/Authentication/Login";
import SignUp from './components/pages/Authentication/SignUp';
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/Footer';
import Hero from './components/pages/Home/Hero';
import Category from './components/pages/Home/Category';
import LatestBlogs from './components/pages/Home/LatestBlogs';
import AllBlogs from './components/pages/Blogs/AllBlogs';
import BlogDetails from './components/pages/Blogs/BlogDetails';
import AccountDetails from './components/pages/Account/AccountDetails'
import { useAuthContext } from './components/context/AuthContext';
import {Toaster} from 'react-hot-toast'

function App() {
  const {authUser} = useAuthContext();
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <div>
            <Navbar/>
            <Hero/>
            <LatestBlogs/>
            <Category/>
            <Footer/>
          </div>
        }/>
        <Route path="/login" element={
          authUser ? <Navigate to={'/'}/> :
          <div>
            <Navbar/>
            <Login/>
            <Footer/>
          </div>
        }/>
        <Route path="/signup" element={
          authUser ? <Navigate to={'/'}/> :
          <div>
            <Navbar/>
            <SignUp/>
            <Footer/>
          </div>
        }/>
        <Route path="/allblogs" element={
          <div>
            <Navbar/>
            <AllBlogs/>
            <Footer/>
          </div>
        }/>
        <Route path="/blogs/:id" element={
          <div>
            <Navbar/>
            <BlogDetails/>
            <Footer/>
          </div>
        }/>
        <Route path="/accountdetails/:id" element={
          <div>
            <Navbar/>
            <AccountDetails/>
            <Footer/>
          </div>
        }/>
      </Routes>
      <Toaster/>
    </Router>
  )
}

export default App
