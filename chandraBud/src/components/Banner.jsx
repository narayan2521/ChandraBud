import React from "react";
import bannerBg from '../assets/white-background.jpg'

const Banner = ({ title, subtitle, background }) => {
  return (
    <div
      className="w-full h-[250px] sm:h-[300px] flex flex-col justify-center items-center text-center text-white relative"
      style={{
         background: `url(${bannerBg}) center/cover no-repeat`, // ✅ fallback to bannerBg
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-500">{title}</h1>
        {subtitle && (
          <p className="mt-3 text-lg sm:text-xl text-gray-500">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Banner;
