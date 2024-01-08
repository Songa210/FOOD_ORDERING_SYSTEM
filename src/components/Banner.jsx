import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#FCFCFC] tO-100% max-w-screen-2x1 container max-auto xl:px-24 px-24">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5x1 text-4x1 font-bold md:leading-snug leading-snug ">
            Dive into Delights of Delectable
            <span className="text-green">Food</span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Where Earch plate weaves a story of culinary Mastery and passionate
            Craftsmanship
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>

        {/* images */}
        <div className="md:w-1/2">
          <img src="/images/banner.png" alt="" />

          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="flex bg-white py-2 rounded-2x1 items-center gap-3 shadow-md w-64">
              <img src="/images/b-food1.png" alt="" className="rounded-2x1" />

              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                  />
                  readOnly
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
            <div className="sm:flex hidden bg-white py-2 px-3 rounded-2x1 items-center gap-3 shadow-md w-64">
              <img src="/images/b-food1.png" alt="" className="rounded-2x1" />

              <div className="space-y-1">
                <h5 className="font-medium mb-1">Spicy noodles</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-yellow-500"
                    readOnly
                  />
                </div>
                <p className="text-red">$18.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
