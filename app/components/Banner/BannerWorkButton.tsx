"use client";
import React from "react";

export default function BannerWorkButton() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("Projects");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      type="button"
      className="text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton"
      onClick={handleScrollToContact}
    >
      Discover My Work
    </button>
  );
}
