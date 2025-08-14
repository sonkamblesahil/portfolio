import React from "react";
import profilephoto from "../assets/profile-photo.jpg";
const IntroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-5xl font-bold text-center lg:text-left">
                LET ME{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  INTRODUCE
                </span>{" "}
                MYSELF
              </h1>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              <ul className="list-disc list-inside space-y-4">
                <li>
                  Skilled in developing{" "}
                  <span className="text-purple-400 font-semibold">
                    Full-Stack Web Applications
                  </span>{" "}
                  using{" "}
                  <span className="text-purple-400 font-semibold">React.js</span>,{" "}
                  <span className="text-purple-400 font-semibold">Node.js</span>,{" "}
                  and{" "}
                  <span className="text-purple-400 font-semibold">Express.js</span>.
                </li>
                <li>
                  Proficient in{" "}
                  <span className="text-purple-400 font-semibold">Java</span>,{" "}
                  <span className="text-purple-400 font-semibold">JavaScript</span>,{" "}
                  <span className="text-purple-400 font-semibold">Python</span>,{" "}
                  <span className="text-purple-400 font-semibold">HTML</span>,{" "}
                  <span className="text-purple-400 font-semibold">CSS</span>,{" "}
                  and databases like{" "}
                  <span className="text-purple-400 font-semibold">MongoDB</span>,{" "}
                  <span className="text-purple-400 font-semibold">MySQL</span>, and{" "}
                  <span className="text-purple-400 font-semibold">SQLite3</span>.
                </li>
                <li>
                  Hands-on experience with{" "}
                  <span className="text-purple-400 font-semibold">
                    REST APIs
                  </span>{" "}
                  and{" "}
                  <span className="text-purple-400 font-semibold">
                    modern frontend libraries
                  </span>.
                </li>
                <li>
                  Actively solving{" "}
                  <span className="text-purple-400 font-semibold">DSA</span> problems on{" "}
                  <span className="text-purple-400 font-semibold">LeetCode</span> and{" "}
                  <span className="text-purple-400 font-semibold">GeeksforGeeks</span>.
                </li>
              </ul>
            </div>
          </div>

          {/* Right Avatar */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Avatar Circle */}
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  {/* Actual Photo */}
                  <img
                    src={profilephoto}
                    alt="Sahil Sonkamble"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 border-2 border-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-pink-400 rounded-lg rotate-45 animate-bounce"></div>
              <div className="absolute top-10 -left-10 w-8 h-8 bg-purple-400 rounded-full opacity-60 animate-ping"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IntroSection;
