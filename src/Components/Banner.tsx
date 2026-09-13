
const Banner = () => {
    return (
        <div className="flex md:flex justify-around items-center  py-12 bg-[F1F5F9]">
        <div>
          <h1 className="text-center md:text-left text-6xl font-extrabold">Build Your Ideal</h1>
          <h1 className="text-center md:text-left text-6xl font-extrabold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Development Stack</h1>
          <p className="text-[18px] font-normal text-center md:text-left  md:w-2xl  text-[#475569] py-5">
            Explore frontend, backend, database, and tooling options,
            <br className='hidden md:block'/>
            compare them side by side, and put together the stack that fits your
            <br className='hidden md:block' /> next project.
          </p>
          <div className=" flex justify-center md:justify-start gap-3 mt-4">
            <button className="btn The class bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg text-sm text-white mr-3">
            Explore Technologies
          </button>
          <button className="btn bg-white rounded-lg text-sm">Learn More</button>
          </div>

        </div>
        <div>
          <img className=" " src="./src/assets/banner-stack.png" alt="" />
        </div>
      </div>
    );
};

export default Banner;