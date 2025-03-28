"use client";

import React, { useState } from "react";
import "./ProjectShowcase.css";
import { GrView } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import "./ProjectShowMedia.css";
import Link from "next/link";
import Image from "next/image";

// Define the type for testimonials
interface Testimonial {
  image: string;
  text: string;
  author: string;
  liveLink: string;
  githubLink: string;
}

// Testimonials data
const testimonials: Testimonial[] = [
  {
    image: "/assets/ProjectShowcase/1st.webp",
    text: "The Wild Oasis customer app is a user-friendly platform built with Next.js, allowing users to explore and book luxury cabins effortlessly. Customers can manage their profiles, track past, current, and future reservations, and enjoy a seamless browsing experience with a modern design. Preferred View: Desktops/Laptops",
    author: "Mari de Almedia",
    liveLink: "https://the-wild-quarry-oasis-customer-website.vercel.app/",
    githubLink:
      "https://github.com/MuhammadAsim786786/the-wild-quarry-oasis-customer-website",
  },
  {
    image: "/assets/ProjectShowcase/pth.webp",
    text: "The Wild Oasis business app is a robust React-based tool designed for managing and monitoring cabin rentals and business operations. It offers features like tracking bookings (past, current, and future), monitoring sales, managing active cabins, and handling user profiles. Preferred View: Desktops/Laptops",
    author: "Mari de Almedia",
    liveLink: "https://the-wild-quarry-oasis.vercel.app",
    githubLink: "https://github.com/MuhammadAsim786786/the-wild-quarry-oasis",
  },
  {
    image: "/assets/ProjectShowcase/2nd.webp",
    text: "World Wise is an interactive website that empowers users to explore a world map and visually mark the places they've visited.A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world. Preferred View: Desktops/Laptops",
    author: "Mari de Almedia",
    liveLink: "https://worldwise-happy-travelling.netlify.app/",
    githubLink:
      "https://github.com/MuhammadAsim786786/Fast-React-Pizza-Application",
  },
  {
    image: "/assets/ProjectShowcase/3rd.webp",
    text: "Fast React Pizza is a sleek and responsive web application built with React, offering a seamless online pizza ordering experience. Customers can browse a variety of pizza options, customize their orders, and add items to their cart with ease. Designed for speed and simplicity. Preferred View: Any Screen",
    author: "John Doe",
    liveLink: "https://fast-react-instant-pizza.netlify.app",
    githubLink:
      "https://github.com/MuhammadAsim786786/Fast-React-Pizza-Application",
  },
  {
    image: "/assets/ProjectShowcase/4th.webp",
    text: "Omnifood is a website that is entirely build on vanilla HTML and CSS.Omnifood provides a smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs.A healthy meal is delivered to you every single day. Preferred View: Any Screen",
    author: "John Doe",
    liveLink: "https://asim-omnifood-c.netlify.app/",
    githubLink: "https://github.com/MuhammadAsim786786/Omnifood",
  },
  {
    image: "/assets/ProjectShowcase/5th.webp",
    text: "Use popcorn is React-based web application designed to provide a user-friendly experience for movie enthusiasts. Users can search for movies, view detailed information, and rate their favorites. The platform allows users to store their ratings and movie preferences. Preferred View: Desktops/Laptops",
    author: "John Doe",
    liveLink: "https://usepopcorn-search-movies.netlify.app/",
    githubLink: "https://github.com/MuhammadAsim786786/React-UsePopcorm-Movies",
  },
];

const ProjectsShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (testimonials.length === 0) {
    return <div>No testimonials available</div>;
  }

  // Get current testimonial and split the text
  const currentTestimonial = testimonials[currentIndex];
  const [description, preferredView] =
    currentTestimonial.text.split("Preferred View:");

  return (
    <div id="Projects">
      <div className="carousel text-[#343a40] leading-3 lg:max-h-96 lg:min-h-96">
        <Image
          width={1000}
          height={550}
          src={currentTestimonial.image}
          alt={currentTestimonial.author}
          className="carousel-image"
        />
        <div className="testimonial">
          <p className="testimonial-text">
            {description}
            {preferredView && (
              <>
                <br />
                <strong>Preferred View:</strong> {preferredView}
              </>
            )}
          </p>
          <div className="flex items-center justify-center md:gap-8 sm:gap-2">
            <Link
              href={currentTestimonial.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 font-medium text-[#e9effd] bg-[#1b45a5] h-7 w-40 rounded-sm hover:bg-[#1e4fbc]"
            >
              <GrView color="#e9effd" />
              View Live
            </Link>
            <Link
              href={currentTestimonial.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 font-medium text-[#e9effd] bg-[#1b45a5] h-7 w-40 rounded-sm hover:bg-[#1e4fbc]"
            >
              <FaGithub color="#e9effd" />
              View on GitHub
            </Link>
          </div>
        </div>
        {/* Navigation Buttons */}
        <button
          className="btn btn--left"
          onClick={handlePrev}
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="btn-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="btn btn--right"
          onClick={handleNext}
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="btn-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        {/* Dot Indicators */}
        <div className="dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "dot-fill" : ""}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              &nbsp;
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
