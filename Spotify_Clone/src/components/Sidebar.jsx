import React from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

function Sidebar() {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="bg-black text-white w-32 p-5 h-screen flex flex-col items-center sm:w-16 md:w-32 lg:w-32">
        <img 
          src="/assets/SpotifyLogo.png" 
          alt="Logo" 
          className="w-24 h-auto mb-8 hidden sm:block"
        />
        <div className="flex flex-col items-center space-y-16 p-3">
          <IoHomeSharp className="text-white text-4xl" />
          <FaMicrophone className="text-white text-4xl" />
          <FaClock className="text-white text-4xl" />
          <IoIosSettings className="text-white text-5xl" />
        </div>
      </div>


    </div>
  );
}

export default Sidebar;
