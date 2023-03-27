import { useState } from "react";
import { FaCode, FaHeart, FaHeartbeat } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';

function Home() {

  return (
    <div>
      <div className="bg-body text-white font-Montserrat pb-12 scroll-behavior: smooth; overscroll-y-auto">
        <div className="py-6 flex flex-col items-center">
          <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
            <div className="grid justify-center items-center order-1 col-span-1">
              <Tilt
                tiltReverse={true}
                reset={false}
                >
                <img
                  className="lg:h-80 md:h-64 h-40 rounded-full"
                  src="/avatar.jpeg"
                  alt=""
                />
              </Tilt>
            </div>
            <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
              <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">
                <span className="block xl:inline text-gray-50">
                  Hi, I’m Maxime d'Harboullé.
                </span>
                <span className="block text-indigo-600 xl:inline">
                  Software Engineer.
                </span>
              </h1>
              <p className="text-xl text-gray-500 text-center font-medium md:text-left">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="block mt-8 mx-auto md:mx-0 text-2xl py-2 px-6 text-red-50 font-semibold rounded bg-indigo-500 hover:bg-indigo-800">
                <a href="#">Download Resume</a>
              </button>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <FaCode size={30}/>
              </div>
              <div className="stat-title">Pro experience</div>
              <div className="stat-value text-primary">3 years</div>
              <div className="stat-desc">Working full time since 2019</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
