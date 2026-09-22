import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/hero.png";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#eaf8e7]">
      {/* Soft Background Glow */}
      <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#23BE0A]/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#23BE0A]/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-10 md:py-14">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#23BE0A]/10 px-4 py-1.5 text-xs font-semibold text-[#23BE0A]">
            Your Ideas. Our Apps.
          </span>

          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-[#131313] sm:text-5xl md:text-6xl">
            We build{" "}
            <span className="text-[#23BE0A]">productive</span>
            <br />
            apps
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
            Discover powerful apps designed to make your everyday life easier,
            faster, and more productive.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative mx-auto mt-8 flex justify-center">
          <div className="absolute bottom-0 h-28 w-2/3 rounded-full bg-[#23BE0A]/20 blur-3xl" />

          <div className="relative z-10">
            <Image
              src={BannerImage}
              alt="App preview"
              width={700}
              height={420}
              priority
              className="h-auto w-full max-w-[650px] object-contain"
            />
          </div>
        </div>

        {/* Store Buttons - Image এর নিচে */}
        <div className="relative z-20 mt-5 flex justify-center gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-[#131313] px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:shadow-lg">
            <span className="text-base">▶</span>
            Google Play
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#131313] shadow-md ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <span className="text-base"></span>
            App Store
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;