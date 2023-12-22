import React from "react";
import corporate_team from "../Assets/corporat-team (1).webp";

function Career() {
  return (
    <div>
      <h1 className="text-[#00df9a] flex items-center justify-center mt-10 text-5xl">
        Discover Our Career Opportunities
      </h1>

      <div className="w-full py-[10rem] px-4 bg-black mt-10">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <h2 className="text-2xl font-bold text-center py-8">Flutter</h2>
            <p className="text-center text-2xl ">
              <span className="font-bold">Experience:-</span> 1-2 years of
              experience required
            </p>
            <div className="text-center font-medium">
              <p className="py-2  mx-8 text-[18px] mt-8">
                <span className="font-bold">Position:-</span> 2 available
              </p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3">
              Apply Now
            </button>
          </div>

          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <h2 className="text-2xl font-bold text-center py-8">React JS</h2>
            <p className="text-center text-2xl ">
              <span className="font-bold">Experience:-</span> 1-2 years of
              experience required
            </p>
            <div className="text-center font-medium">
              <p className="py-2  mx-8 text-[18px] mt-8">
                <span className="font-bold">Position:-</span> 2 available
              </p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3">
              Apply Now
            </button>
          </div>

          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white">
            <h2 className="text-2xl font-bold text-center py-8">
              React Native
            </h2>
            <p className="text-center text-2xl ">
              <span className="font-bold">Experience:-</span> 1-2 years of
              experience required
            </p>
            <div className="text-center font-medium">
              <p className="py-2  mx-8 text-[18px] mt-8">
                <span className="font-bold">Position:-</span> 2 available
              </p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 py-3">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-[#00df9a] text-4xl flex flex-col items-center justify-center mt-5">
          THE FASTEST GROWING IT COMPANY
        </h1>

        <div className="max-w-[1240px] max-auto grid md:grid-cols-2">
          <img className="mr-[700px] mt-20 mb-20" src={corporate_team} alt="" />
          <p className="text-1xl text-[white] mt-20 ">
            We are seeking amazing talents that stand upon our expectations and
            bring the best software development solutions that move businesses
            forward. Be a member of Semicolon Solutions and create your own
            opportunities for your best future.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Career;
