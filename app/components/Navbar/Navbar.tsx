import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Registerdialog from "./Registerdialog";
interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Services", href: "#services", current: false },
  { name: "Project", href: "#Projects", current: false },
  { name: "Why Me", href: "#Why", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 77; // Adjust this value based on your navbar height
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
          });
        }
      }
    };

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 lg:py-2 lg:px-8">
          <div className="relative flex h-20 items-center ">
            <div className="flex flex-1 items-center justify-evenly sm:items-stretch sm:justify-start">
              <Link
                href="/"
                className="text-blue text-lg font-semibold flex justify-center items-center md:flex md:items-center md:justify-center"
              >
                MUHAMMAD ASIM
              </Link>
              <div className="hidden lg:block m-auto">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-black hover:opacity-100"
                          : "hover:text-black hover:opacity-100",
                        "px-3 py-4 text-lg font-normal opacity-75 space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* <Signdialog /> */}

            {/* REGISTER DIALOG */}

            <Registerdialog />

            <div className="block lg:hidden">
              <Disclosure.Button>
                <span className="sr-only">Open main menu</span>
                {/* Add your menu icon here */}
              </Disclosure.Button>
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
