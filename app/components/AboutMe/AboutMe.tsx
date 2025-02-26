import React from "react";
import { TbAwardFilled } from "react-icons/tb";
import { FaUserGroup } from "react-icons/fa6";

export default function AboutMe() {
  return (
    <div id="about">
      <div className=" bg-white py-16 px-4 sm:px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-16">
            <p className="text-gray-600 text-lg mb-2">Get To Know More</p>
            <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
          </header>

          {/* Main Content Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center ">
              <div className="rounded-3xl overflow-hidden w-full max-w-md">
                <img
                  src="assets/AboutMe/about-pic.png"
                  alt="Profile picture"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-8">
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Experience Card */}
                <div className="bg-white rounded-2xl p-6 text-center border-2 border-[#2663eb] shadow-sm">
                  <div className="flex justify-center mb-3">
                    <TbAwardFilled size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Experience</h3>
                  <p className="text-lg mb-1">2+ years</p>
                  <p className="text-gray-600">Frontend Development</p>
                </div>

                {/* Education Card */}
                <div className="bg-white rounded-2xl p-6 text-center border-2 border-[#2663eb] shadow-sm">
                  <div className="flex justify-center mb-3">
                    <FaUserGroup size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Education</h3>
                  <p className="text-gray-600 mb-1">High-School Education</p>
                  <p className="text-gray-600 mb-1">
                    B.S Computer Science Degree
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                I am a passionate Full-Stack Developer with 2+ years of
                experience in building intuitive and responsive web
                applications. My expertise lies in crafting user-friendly
                frontend interfaces and developing robust backend solutions. I
                am committed to delivering quality work and constantly improving
                my skills to keep up with the ever-evolving tech landscape.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
