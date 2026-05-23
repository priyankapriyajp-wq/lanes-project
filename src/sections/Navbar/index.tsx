import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavbarMenu } from "@/sections/Navbar/components/NavbarMenu";
import { NavbarToggle } from "@/sections/Navbar/components/NavbarToggle";

export const Navbar = () => {
  return (
    <div
      role="banner"
      className="fixed box-border caret-transparent h-[70px] outline-[3px] w-full z-[1000] top-0 left-0 right-0 md:h-20"
    >
      <div className="relative items-center backdrop-blur-[10px] box-border caret-transparent flex h-full justify-between outline-[3px] w-full z-[5] p-4 md:px-8">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarToggle />
      </div>
      <div className="absolute box-border caret-transparent hidden outline-[3px] w-full overflow-hidden top-full inset-x-0"></div>
    </div>
  );
};
