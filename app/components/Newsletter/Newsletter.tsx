import Image from "next/image";
import Link from "next/link";
import { IoIosMail } from "react-icons/io";
import { FaUpwork } from "react-icons/fa6";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Newsletter = () => {
  const email = "asim.leo3243@gmail.com"; // Replace with your actual email
  const mailtoLink = `mailto:${email}`;
  return (
    <div id="Contact" className="mt-24 relative z-3">
      <div className="mx-auto max-w-2xl lg:max-w-7xl bg-blue-500 rounded-3xl">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-8">
          {/* COLUMN-1 */}
          <div className="hidden lg:block">
            <div className="float-right pt-20 relative">
              <Image
                src={"/assets/newsletter/bgImage.png"}
                alt="bgimg"
                width={588}
                height={334}
              />
              <div className="absolute top-10 right-0">
                <Image
                  src={"/assets/newsletter/leaf.svg"}
                  alt="leafimg"
                  width={81}
                  height={81}
                />
              </div>
              <div className="absolute bottom-8 left-2">
                <Image
                  src={"/assets/newsletter/circel.svg"}
                  alt="circleimg"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="p-10 flex flex-col justify-center">
            <h3 className="text-4xl md:text-5xl font-semibold mb-3 text-white">
              Get in Touch
            </h3>
            <h4 className="text-base font-normal mb-7 text-offwhite">
              I’m always open to discussing exciting projects, collaboration
              opportunities, or any questions you may have.
            </h4>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-8">
              {/* Email Button */}
              <Link
                href={mailtoLink}
                className="bg-[#0b1e46] rounded-sm flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-[#e9effd] font-semibold py-3 px-3 transition-colors duration-200 sm:w-auto sm:max-h-14"
              >
                <IoIosMail className="w-5 h-5" />
                <span>Send us an Email</span>
              </Link>

              {/* "Or" Section with Social Icons */}
              <div className="flex flex-col sm:flex-col sm:gap-4 lg:flex-row lg:gap-6 items-center lg:items-center ">
                <p className="font-semibold text-lg text-[#e9effd] text-center lg:text-left mb-2">
                  Or
                </p>
                <div className="flex gap-4">
                  <Link href="https://www.upwork.com/freelancers/~01ce59a14ab749a4d2">
                    <FaUpwork size={32} />
                  </Link>
                  <Link href="https://www.linkedin.com/in/muhammad-asim-36262a30b/">
                    <FaLinkedin size={32} />
                  </Link>
                  <Link href="https://x.com/MAsimMuzaffar2?t=rPGv4ihm2LpTKyyU6ZbSMQ&s=09">
                    <FaTwitter size={32} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
