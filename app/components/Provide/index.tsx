import Image from "next/image";
import Link from "next/link";
import { FaRocket, FaPalette } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { SiCplusplus } from "react-icons/si";

interface datatype {
  icon: string;
  country: string;
  paragraph: string;
  color: string;
  className: string;
}

const Aboutdata: datatype[] = [
  {
    icon: "MdWeb",
    country: "Web Dev",
    className: "bg-indigo-300 p-3 rounded-md mb-5",
    color: "indigo",
    paragraph: "Build dynamic sites with new frameworks",
  },
  {
    icon: "FaPalette",
    country: "UI/UX Design",
    className: "bg-violet-300 p-3 rounded-md mb-5",
    color: "purple",
    paragraph: "Craft intuitive and appealing interfaces",
  },
  {
    icon: "FaRocket",
    country: "Optimization",
    className: "bg-yellow-300 p-3 rounded-md mb-5",
    color: "orange",
    paragraph: "Enhance website speed, and reliability",
  },
  {
    icon: "SiCplusplus",
    country: "C++ Dev",
    className: "bg-green-300 p-3 rounded-md mb-5",
    color: "green",
    paragraph: "Implement efficient algorithms using C++.",
  },
];

const IconMap: { [key: string]: React.ElementType } = {
  MdWeb,
  SiCplusplus,
  FaPalette,
  FaRocket,
};

const Provide = () => {
  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-10 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 flex justify-center">
            <div className="flex flex-col align-middle justify-center p-10">
              <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
                We provide solutions.
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                As a skilled full-stack web developer and C++ programmer, I
                specialize in creating modern, scalable, and efficient web
                applications. From backend logic to frontend design, I deliver
                tailored solutions that meet the needs of clients and users
                alike.
              </h4>
              <Link
                href={"/"}
                className="mt-4 text-xl font-medium text-blue flex gap-2 mx-auto lg:mx-0 space-links"
              >
                Learn more{" "}
                <Image
                  src={"/assets/provide/arrow.svg"}
                  alt={"arrow"}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1"></div>

          {/* COLUMN-2 */}
          <div className="col-span-6 lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 bg-bluebg rounded-3xl">
              {Aboutdata.map((item, i) => {
                const IconComponent = IconMap[item.icon];
                return (
                  <div
                    key={i}
                    className="bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl"
                  >
                    {IconComponent && (
                      <IconComponent
                        size={55}
                        color={item.color}
                        className={item.className}
                      />
                    )}
                    <h4 className="text-2xl font-semibold">{item.country}</h4>
                    <h4 className="text-lg font-normal text-bluegray my-2">
                      {item.paragraph}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
