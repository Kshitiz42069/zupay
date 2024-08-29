import { useEffect } from "react";
import { usePostContext } from "../../context/PostContext";
import UseAllPosts from "../../hooks/UseAllPosts"
import { Link } from "react-router-dom";

const AllBlogs = () => {
  const {loading,allPosts} = UseAllPosts();
  const {posts} = usePostContext();
  useEffect(()=>{
    allPosts();
  },[]);
  return (
    <div>
      <div className="pt-[3rem] pb-[2rem] px-[3rem]">
        <p className="text-7xl edu">Explore Blogs</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 py-8 gap-8 px-[2rem]">
          {/* card */}
          {!loading && posts.length > 0 ? (
            posts.map((post,index)=>(
              <Link key={index} to={`/blog/${post._id}`}>
              <div  className="card bg-base-100 lg:w-[24rem] shadow-xl cursor-pointer">
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
              </Link>
            ))
          ):(
            <span className='loading loading-spinner'></span>
          )}
      </div>
    </div>
  )
}

export default AllBlogs