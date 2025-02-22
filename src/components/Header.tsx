import logo from "@/assets/images/header/logo.svg";
import menu from "@/assets/images/header/menu.svg";
import { useState } from "react";

export const Header = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  const handleMenuItem = (id: string) => {
    setIsCollapse(true);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="hidden md:flex items-center px-[40px] py-[32px] bg-[black] text-[white] justify-between">
        <img src={logo} className="w-[180px] h-auto" />
        <div className="flex items-center justify-between gap-[53px]">
          <div className="flex items-center justify-center gap-[40px] text-[16px] font-[400] text-[white] font-[Aldrich]">
            <span>Home</span>
            <span>Vision</span>
            <span>Technology</span>
            <span>Application</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full relative z-50">
        <div className="h-24 px-5 py-8 bg-black backdrop-blur-md justify-between items-center flex">
          <img src={logo} className="w-[180px] h-auto" />
          {isCollapse ? (
            <img
              src={menu}
              className="size-8 text-white"
              onClick={() => setIsCollapse(false)}
            />
          ) : (
            <div className="fixed z-50 top-0 left-0 w-full px-5 py-10 bg-white rounded-bl-[20px] rounded-br-[20px] space-y-12 text-black text-xl font-normal font-['Aldrich'] leading-normal">
              <div className="w-full text-right" onClick={() => handleMenuItem("home")}>Home</div>
              <div className="w-full text-right" onClick={() => handleMenuItem("vision")}>Vision</div>
              <div className="w-full text-right" onClick={() => handleMenuItem("technology")}>
                Technology
              </div>
              <div className="w-full text-right" onClick={() => handleMenuItem("application")}>
                Application
              </div>
              <div className="w-full text-right" onClick={() => handleMenuItem("contact")}>Contact</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
