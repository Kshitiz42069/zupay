

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-md lg:w-[40rem]">
          <h1 className="mb-5 text-3xl lg:text-7xl font-bold">Hello There! Welcome to Be-Loggers..</h1>
          <p className="mb-5 lg:text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus sit vero consequatur dicta laudantium eveniet rerum id, nobis obcaecati enim animi sapiente. Quaerat accusamus praesentium recusandae labore qui. Neque, libero.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero