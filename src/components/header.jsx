import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import MobileNavPanel from "./mobileNavPanel";

import { SparklesTextDemo } from "./sparklesText";
import { ShimmerButton } from "./magicui/shimmer-button";

export default function Header() {
  const [navPanelOpen, setNavPanelOpen] = useState(false);
  const token = localStorage.getItem("token")
  
  return (
    <header className="w-full h-[70px] shadow-xl flex justify-center items-center fixed bg-black/80 top-0 left-0 z-50 text-white">
      {/* <img src="/logo.png" alt="logo" className="w-[50px] h-[50px] object-cover border-[3px] absolute left-10 rounded-full" /> */}
      {/* <h1 className="text-2xl font-bold absolute left-10">Hotel Win Win</h1> */}
       <SparklesTextDemo className="text-2xl font-bold absolute left-10" />
      {/* <MorphingTextDemo /> */}
     
      <div className="hidden w-[450px] md:flex justify-evenly items-center">
        <Link to="/" className="hidden md:block text-[15px] m-1">
          Home
        </Link>

         <Link to="/rooms" className="hidden md:block text-[15px] m-1">
          Rooms
        </Link>

        <Link to="/gallery" className="hidden md:block text-[15px] m-1">
          gallery
        </Link>

        <Link to="/reviews" className="hidden md:block text-[15px] m-1">
          reviews
        </Link>
        
        <Link to="/contact" className="hidden md:block text-[15px] m-1">
          contact
        </Link>
        
        
        
        
        <Link to="/booking" className="hidden md:block text-[15px] font-bold m-1 absolute right-24">
          <ShimmerButton className="shadow-2xl ">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 text-[15px]">
            your booking
          </span>
         </ShimmerButton>
        </Link>
        
      </div>
      <GiHamburgerMenu
        className="absolute right-5 text-[24px] md:hidden"
        onClick={() => {
          setNavPanelOpen(true);
        }}
      />
      {token!=null&&<button className="hidden md:block absolute right-5 text-[15px]" onClick={()=>{ 
        localStorage.removeItem("token")
        window.location.href = "/login"
      }}>
        logout
      </button>}
      <MobileNavPanel isOpen={navPanelOpen} setOpen={setNavPanelOpen} />
      
    </header>
  );
}