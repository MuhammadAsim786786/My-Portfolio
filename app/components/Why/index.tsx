import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";

interface whydata {
  heading: string;
  subheading: string;
}

const whydata: whydata[] = [
  {
    heading: "Quality",
    subheading:
      "I deliver clean, maintainable solutions for backend and frontend.",
  },
  {
    heading: "Clear Communication",
    subheading:
      "I value collaboration and keeping you informed. Let's work together to bring your vision to life.",
  },
  {
    heading: "Dependable",
    subheading:
      "Full-stack development with C++ expertise. Reliable systems, robust APIs.",
  },
];

const Why = () => {
  return (
    <div id="Why" className=" mb-24">
      <div className="mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* COLUMN-1 */}
          <div className="flex items-center justify-center mr-20">
            <Image
              src="/assets/why/iPad.png"
              alt="iPad-image"
              width={1920}
              height={900}
            />
          </div>

          {/* COLUMN-2 */}
          <div>
            <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
              Why Work With Me?{" "}
            </h3>
            <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
              Don&#39;t waste time on manual debugging or inefficient workflows.
              Let me complete the processes for you saving valuable time.
            </h4>

            <div className="mt-10">
              {whydata.map((items, i) => (
                <div className="flex mt-4" key={i}>
                  <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                    <CiCircleCheck size={24} color="green" />
                  </div>
                  <div className="ml-5">
                    <h4 className="text-2xl font-semibold">{items.heading}</h4>
                    <h5 className="text-lg text-beach font-normal mt-2">
                      {items.subheading}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
