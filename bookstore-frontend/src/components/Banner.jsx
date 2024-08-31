import React from "react";
import banner from "/Banner.jpg";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row pt-7">
        <div className="w-full md:w-1/2  pt-4 md:pt-32 order-2 md:order-1 p-2 mt-6">
          <div className="space-y-10 md:space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!</span>
            </h1>
            <p className="text-xl">
            Books are windows to diverse worlds, offering knowledge, inspiration, and escape through the power of storytelling. They capture the essence of human experiences, emotions, and ideas, allowing readers to explore different cultures, histories, and perspectives.
            </p>

            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 dark:bg-black"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow   dark:text-white" placeholder="Email" />
            </label>
          </div>
          <button className="btn btn-active mt-6 mb-6 md:mb-0 btn-secondary">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 mt-7 md:mt-12 ">
          <img
          className="mt-7 rounded-md"
          src={banner} />
        </div>
      </div>
    </>
  );
};

export default Banner;
