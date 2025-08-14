import React from "react";
import profilephoto from "../assets/profile-photo.jpg";
const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6  ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white  space-y-10 items-center mx-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Hi There!{" "}
                <span
                  className="inline-block  animate-pulse "
                  role="img"
                  aria-label="wave"
                >
                  👋🏻
                </span>
              </h1>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                I'M{" "}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-500 to-purple-600 p-1">
                  Sahil Sonkamble
                </strong>
              </h1>
            </div>

            <div className="space-y-4 text-lg md:text-xl font-bold text-gray-300">
              <p>Full Stack Developer</p>
              <p>Machine Learning Enthusiast</p>

            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center lg:justify-center ">
            <div className="relative ">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-purple-800 to-blue-900 p-1 mx-auto">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={profilephoto}
                    alt="Sahil Sonkamble"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating elements for decoration */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-pink-500 rounded-full opacity-30 animate-pulse delay-5000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
