"use client";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
  imgSrc: string;
  url: string;
}

const data: Data[] = [
  {
    imgSrc: "/assets/carousel/google.svg",
    url: "https://www.google.com",
  },
  {
    imgSrc: "/assets/carousel/garnier.png",
    url: "https://www.garnierusa.com",
  },
  {
    imgSrc: "/assets/carousel/slack.png",
    url: "https://www.slack.com",
  },
  {
    imgSrc: "/assets/carousel/udemy.png",
    url: "https://www.udemy.com",
  },
  {
    imgSrc: "/assets/carousel/google.svg",
    url: "https://www.google.com",
  },
  {
    imgSrc: "/assets/carousel/garnier.png",
    url: "https://www.garnierusa.com",
  },
  {
    imgSrc: "/assets/carousel/slack.png",
    url: "https://www.slack.com",
  },
  {
    imgSrc: "/assets/carousel/udemy.png",
    url: "https://www.udemy.com",
  },
];

// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="text-center mb-16">
        <p className="text-bluegray">Find me on the Following Platforms</p>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="py-14">
            <Slider {...settings}>
              {data.map((item, i) => (
                <div key={i}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.imgSrc}
                      alt={`Site ${i + 1}`}
                      width={150}
                      height={150}
                    />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
