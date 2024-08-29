
import UseGetPost from '../../hooks/UseGetPost';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { postId } = useParams(); // Get postId from URL parameters
  console.log(postId);
  const { loading, post } = UseGetPost(postId); // Destructure post, loading, and error from the custom hook
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className='px-[4rem]'>
      {/* Top */}
      <div className="py-[3rem] flex items-end justify-center gap-8">
        <img
          className="w-[40rem] h-[25rem] rounded-lg"
          src={post.image} // Use post image URL from data
          alt={post.title}
        />
        <div className="flex flex-col gap-[1rem]">
          <p className="text-7xl">{post.title}</p>
          <p className="text-3xl font-thin pl-2">{post.category}</p> {/* Use post category */}
          <p className="text-2xl text-end">- {post.author.fullname}</p> {/* Use author name from post data */}
          <p className="text-xl text-end font-thin">
            {new Date(post.createdAt).toLocaleDateString()} {/* Format the date */}
          </p>
        </div>
      </div>
      {/* Bottom */}
      <div className="px-[3rem] py-[2rem]">
        <p className="text-3xl text-justify">{post.description}</p> {/* Use post description */}
      </div>
    </div>
  );
}

export default BlogDetails;




// import { usePostContext } from '../../context/PostContext';
// import UseGetPost from '../../hooks/UseGetPost';
// import {useEffect} from 'react'
// import { useParams } from 'react-router-dom';


// const = ({postId}) => {
//   const {loading,postDetail,post} = UseGetPost(postId);

//   useEffect(() => {
//     if (postId) {
//       postDetail();
//     }
//   }, []);
//   return (
//     <div>
//       {/* top */}
//       <div className="py-[3rem] flex items-end justify-center gap-8">
//         <img className="w-[40rem] h-[25rem] rounded-lg" src="https://i.pinimg.com/736x/03/1d/a9/031da9ff8b2baafbcba8e0358d7420fc.jpg" alt="image" />
//         <div className="flex flex-col gap-[1rem]">
//           <p className="text-6xl">{post.title}</p>
//           <p className="text-3xl font-thin">Category</p>
//           <p className="text-2xl text-end">- Author Name</p>
//           <p className="text-2xl text-end font-thin">Date</p>
//         </div>
//       </div>
//       {/* bottom */}
//       <div className="px-[3rem] py-[2rem]">
//         <p className="text-3xl">Description goes here</p>
//       </div>
//     </div>
//   )
// }

// export default