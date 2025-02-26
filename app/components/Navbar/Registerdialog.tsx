const Register = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
        <div className="hidden lg:block">
          <button
            className="text-blue text-lg font-medium ml-5 py-5 px-9 transition duration-150 ease-in-out leafbutton bg-lightblue hover:text-white hover:bg-blue"
            onClick={handleScrollToContact}
          >
            Let&apos;s Work Together
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
