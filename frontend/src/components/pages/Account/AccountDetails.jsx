import { useEffect } from 'react';
import {useAuthContext} from '../../context/AuthContext'
import { usePostContext } from '../../context/PostContext';
import UseUserPosts from '../../hooks/UseUserPosts';

const AccountDetails = () => {
  const {authUser} = useAuthContext();
  const { loading, userposts } = UseUserPosts(authUser?._id);
  const {posts} = usePostContext();

  useEffect(() => {
    if (authUser?._id) {
      userposts();
    }
  }, []);
  return (
    <div>
      {/* banner */}
      <div>
        <img className="w-full lg:h-[15rem] h-[7rem]" src="https://i.pinimg.com/736x/2e/3d/68/2e3d6845011de0d24c13dd1e1028a2ff.jpg" alt="" />
      </div>
      {/* profile picture */}
      {/* profile details */}
      <div className="relative pt-[3rem] lg:pt-[8rem] px-[1rem]">
        <div className="absolute -top-[2.5rem] lg:-top-[8rem] left-5">
          <img className="lg:w-[15rem] w-[5rem] rounded-full border-4 border-white" src="https://i.pinimg.com/564x/60/9b/a8/609ba82da56aba6c3b8795ba90fda92c.jpg" alt="profile picture" />
        </div>
        <div className='pl-5 lg:pl-[2rem]'>
          <p className="text-3xl lg:text-6xl edu">{authUser.fullname}</p>
          <p className="text-lg lg:text-3xl font-thin edu">New Delhi, India</p>
          <div className='py-[3rem] flex gap-[1rem]'>
            <button className='border-2 text-sm lg:text-xl px-3 lg:px-[3rem] py-2 rounded-2xl bg-black text-white w-[13rem] border-black'>Blogs</button>
            <button className='border-2 text-sm lg:text-xl px-3 lg:px-[3rem] py-2 rounded-2xl bg-white text-black w-[13rem] border-black'>Posts Liked</button>
          </div>
        </div>
      <hr className=' fill-black'/>
        <div className="grid grid-cols-1 lg:grid-cols-3 py-8 gap-8 px-[2rem]">
          {/* card */}
          {!loading && posts.length > 0 ? (
            posts.map((post,index)=>(
            <div key={index} className="card bg-base-100 lg:w-[24rem] shadow-xl cursor-pointer">
              <figure>
                <img
                  className="h-[10rem] lg:h-[15rem] w-full"
                  src={post.image}
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {post.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{post.description}</p>
                <div className="card-actions flex flex-col justify-end">
                  <div className="badge badge-outline">Category:{post.category}</div>
                  <div className="badge badge-outline">Author:{post.author.fullname}</div>
                </div>
              </div>
            </div>
            ))
          ):(
            <span className='loading loading-spinner'></span>
          )}
        </div>
      </div>

    </div>
  )
}

export default AccountDetails