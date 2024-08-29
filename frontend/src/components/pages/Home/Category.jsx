

const Category = () => {
  return (
    <div className="px-3 lg:px-[4rem] py-[3rem]">
      <p className="text-5xl edu ">Stories Categories</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 py-8 gap-3">
          {/* card */}
          <div className="card card-compact bg-base-100 lg:w-[18rem] w-[10rem] shadow-xl">
            <figure>
              <img
                className="h-[8rem] lg:h-[13rem] w-full"
                src="https://i.pinimg.com/564x/9d/9a/6b/9d9a6b8c7dcf47c88adb535a8e7535ed.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Technology</h2>
              <p>All about the latest Technology in the field!</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 lg:w-[18rem] w-[10rem] shadow-xl">
            <figure>
              <img
                className="h-[8rem] lg:h-[13rem] w-full"
                src="https://i.pinimg.com/564x/82/80/f3/8280f3389b307f26d24c2f869eb9614d.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Science</h2>
              <p>All about cool scientific facts and amusing experiments!</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 lg:w-[18rem] w-[10rem] shadow-xl">
            <figure>
              <img
                className="h-[8rem] lg:h-[13rem] w-full"
                src="https://i.pinimg.com/564x/05/7b/36/057b367027c422885084a6f8facb519e.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Politics</h2>
              <p>Opinions or latest news regarding the Poilitcs matter!</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 lg:w-[18rem] w-[10rem] shadow-xl">
            <figure>
              <img
                className="h-[8rem] lg:h-[13rem] w-full"
                src="https://i.pinimg.com/564x/8f/cf/82/8fcf82c7e11c6a9296438d2564fde3e4.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Fiction</h2>
              <p>Want to live in a fiction? write something about it!!</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 lg:w-[18rem] w-[10rem] shadow-xl">
            <figure>
              <img
                className="h-[8rem] lg:h-[13rem] w-full"
                src="https://i.pinimg.com/564x/2c/9e/0f/2c9e0f530b9608f0ba8a2b57cf1e0ea2.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Well-Being</h2>
              <p>All posts about health and life-style!</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 lg:w-[18rem] w-[10rem] shadow-xl">
            <figure>
              <img
                className="h-[8rem] lg:h-[13rem] w-full"
                src="https://i.pinimg.com/564x/9c/21/48/9c21488ac87b4c503e95de2eb5110461.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Sports</h2>
              <p>All latest and interesting facts about sports!</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 lg:w-[18rem] w-[10rem] shadow-xl">
            <figure>
              <img
                className="h-[8rem] lg:h-[13rem] w-full"
                src="https://i.pinimg.com/564x/13/5b/59/135b59436506bfd458be3b37346cc7b9.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Travels</h2>
              <p>Experience about their travel!</p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 lg:w-[18rem] w-[10rem] shadow-xl">
            <figure>
              <img
                className="h-[8rem] lg:h-[13rem] w-full"
                src="https://i.pinimg.com/564x/4f/78/a2/4f78a2ac80a385cc2c40e2d633439df7.jpg"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Art</h2>
              <p>All posts about Art and Artists!!</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Category