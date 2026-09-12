import { useState } from "react";
import Menu from "../assets/menu-icon.svg";
import Close from "../assets/close-icon.svg";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (<nav className="sticky top-0 z-50 shadow-md">
  
  <div className="flex justify-around items-center px-10 py-4">
    
    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
      <img src={isOpen ? Close : Menu} alt="" className="w-7 h-7" />
    </button>

    <img src={Logo} alt="" />

    <ul className="hidden md:flex gap-10 text-[20px] font-medium">
      <li className="text-[#D91B7E]">Home</li>
      <li className="text-[#475569] hover:text-[#D91B7E]">Technologies</li>
      <li className="text-[#475569] hover:text-[#D91B7E]">Projects</li>
      <li className="text-[#475569] hover:text-[#D91B7E]">About</li>
      <li className="text-[#475569] hover:text-[#D91B7E]">Contact</li>
    </ul>

    <div className=" flex items-center gap-5">
      <button className="text-[20px] font-medium text-[#475569]">
        Sign In
      </button>
      <button className="btn bg-[#D91B7E] rounded-full border-0 text-white text-[20px] font-medium py-6 px-6">
        Sign Up
      </button>
    </div>
  </div>

  {isOpen && (
    <div className="md:hidden w-full bg-white shadow-md px-10 pb-6">
      <ul className="flex flex-col gap-4 pt-2 text-[18px] font-medium">
        <li className="text-[#D91B7E]">Home</li>
        <li className="text-[#475569] hover:text-[#D91B7E]">Technologies</li>
        <li className="text-[#475569] hover:text-[#D91B7E]">Projects</li>
        <li className="text-[#475569] hover:text-[#D91B7E]">About</li>
        <li className="text-[#475569] hover:text-[#D91B7E]">Contact</li>
      </ul>

      
    </div>
  )}
</nav>
  );
};

export default Nav;
