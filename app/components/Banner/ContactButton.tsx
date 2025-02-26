"use client";
import React from "react";

export default function ContactButton() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button
      type="button"
      className="text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton"
      onClick={handleScrollToContact}
    >
      Contact info
    </button>
  );
}
