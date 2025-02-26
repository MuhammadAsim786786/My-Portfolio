import Carousel from "./Carousel";
import BannerWorkButton from "./BannerWorkButton";
import ContactButton from "./ContactButton";
const Banner = () => {
  return (
    <main className="mb-24">
      <div className="px-6 lg:px-8 ">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
              Hi, I’m Asim
              <br />
              Your Passionate Developer.
            </h1>
            <p className="mt-6 text-lg leading-8 text-bluegray">
              With a passion for coding and problem-solving, I bring creativity
              and precision to every project.
              <br />
              Driven by creativity I build user-focused solutions that make an
              impact.
            </p>
          </div>

          <div className="text-center mt-5">
            <BannerWorkButton />
            <ContactButton />
          </div>
          <p className="text-center mt-8 text-lg font-bold text-bluegrey">
            Recent Work Highlight
          </p>

          <div className="flex items-center justify-center mt-10 ml-2">
            <div className="rounded-lg border-4 border-bluegray overflow-hidden">
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;
