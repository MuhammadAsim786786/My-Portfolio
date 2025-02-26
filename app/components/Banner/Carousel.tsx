// "use client";
// import React, { useState } from "react";
// import "./Carousel.css";
// import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

// // Define the type for a single slide (optional but recommended for TypeScript)
// type Slide = {
//   src: string;
//   alt: string;
// };

// interface CarouselProps {
//   data: Slide[];
// }

// export default function Carousel({ data }: CarouselProps) {
//   function nextSlide() {
//     setSlide(slide === data.length - 1 ? 0 : slide + 1);
//   }
//   function prevSlide() {
//     setSlide(slide === 0 ? data.length - 1 : slide - 1);
//   }
//   const [slide, setSlide] = useState(0);
//   return (
//     <div className="carousel">
//       <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
//       {data.map((item, idx) => (
//         <img
//           key={idx}
//           src={item.src}
//           alt={item.alt}
//           className={slide === idx ? "slide" : "slide-hidden"}
//         />
//       ))}
//       <BsArrowRightCircleFill
//         className="arrow arrow-right"
//         onClick={nextSlide}
//       />
//       <span className="indicators">
//         {data.map((_, idx) => (
//           <button
//             key={idx}
//             className={slide === idx ? "indicator" : "indicator-inactive"}
//             onClick={() => setSlide(idx)}
//           ></button>
//         ))}
//       </span>
//     </div>
//   );
// }

import React from "react";
import Image from "next/image";
export default function Carousel() {
  return (
    <div>
      <>
        <Image
          src={"/assets/banner/1st.png"}
          alt="banner-image"
          width={1000}
          height={598}
        />
      </>
    </div>
  );
}
