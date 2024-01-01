"use client";

import { IoCloseOutline, IoSearchOutline } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div>
      {/* Background black */}
      <div 
        className="
          w-full h-screen
          fixed top-0 left-0 z-10
          bg-black opacity-30
        "
      ></div>

      {/* Blur */}
      <div 
        className="
          w-full h-screen opacity-30
          fixed top-0 left-0 z-10
          fade-in backdrop-filter backdrop-blur-sm
        "
      ></div>

      {/* Sidebar */}
      <nav 
        className="
          w-[500px] h-screen
          fixed right-0 top-0 z-20
          p-5
          bg-white shadow-2xl
          transform transition-all duration-300
        "
      >
        <button className="absolute top-5 right-5" onClick={() => console.log("click")}>
          <IoCloseOutline size={40} />
        </button>
        
        <div className="relative mt-14">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />

          <input
            className="
              w-full
              py-1 pl-10
              text-base
              border-b-2 border-gray-200 
              bg-gray-50 rounded
              focus:outline-none focus:border-blue-500
            " 
            type="text"
            placeholder="Buscar"
          />
        </div>
      </nav>
    </div>
  );
};
