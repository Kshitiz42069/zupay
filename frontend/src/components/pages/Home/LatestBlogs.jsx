import { useEffect } from "react";
import { usePostContext } from "../../context/PostContext";
import UseAllPosts from "../../hooks/UseAllPosts"
import { Link } from "react-router-dom";


const LatestBlogs = () => {
  const {loading,allPosts} = UseAllPosts();
  const {posts} = usePostContext();

  useEffect(()=>{
    allPosts();
  },[]);
  const latestPosts = posts.sort((a,b)=> new Date(b.createdAt)- new Date(a.createdAt)).slice(0,6);
  return (
    <div className="lg:px-[4rem] py-[3rem] px-[1rem]">
      <p className="text-5xl edu ">Latest Stories</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 py-8 gap-8 px-[2rem]">
          {/* card */}
          {!loading && latestPosts.length > 0 ? (
            latestPosts.map((post,index)=>(
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
      <div className="flex justify-center">
        <a href="/allblogs"><p className="w-[10rem] text-center cursor-pointer text-xl font-bold hover:underline underline-offset-8">Read More →</p></a>
      </div>
    </div>
  )
}

export default LatestBlogs