'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ICONS } from "@/public/assets";
import { usePathname } from "next/navigation";

const HamburgerMenu = () => {
  const pathname = usePathname();

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const closestDropdown = target.closest(".hamburgerMenu");
    
      if (isHamburgerOpen && closestDropdown === null) {
        setIsHamburgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isHamburgerOpen]);

  const menuLinks = [
    {
      label: "Blog Home",
      path: "/",
    },
    {
      label: "Categories",
      path: "/",
    },
    {
      label: "Case Studies",
      path: "/",
    },
    {
      label: "Archive",
      path: "/",
    },
    {
      label: "More",
      path: "/",
    },
  ];

  return (
    <div className="relative hamburgerMenu block lg:hidden font-Inter">
      <Image
        onClick={toggleHamburgerMenu}
        src={pathname === "/" ?  ICONS.menu : ICONS.menuBlue}
        alt="menu-icon"
        className="size-6 cursor-pointer"
      />

      {/* Background Overlay */}
      <div
        onClick={toggleHamburgerMenu}
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isHamburgerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 bg-[#F4F3F0] w-[256px] overflow-y-auto h-screen transition-all duration-300 transform py-4 px-2 ${
          isHamburgerOpen ? "translate-x-0" : "translate-x-full" // Changed to translate-x-full
        }`}
      >
        <div className="w-full">
          <p className="text-sm text-neutral-100 font-medium leading-normal flex items-center justify-between mb-[22px]">
            Menu
            <Image
              onClick={toggleHamburgerMenu}
              src={ICONS.close}
              alt="menu-icon"
              className="size-6 cursor-pointer"
            />
          </p>

          <hr className="border border-primary-90" />

          <div className="flex flex-col gap-1 mt-1">
            {menuLinks.map((link, index) => (
              <Link
                key={index}
                href={`${link.path}`}
                className="text-sm text-neutral-100 font-medium leading-normal p-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
