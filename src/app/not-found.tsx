import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="relative flex min-h-[75vh] items-center justify-center overflow-hidden px-4">
      {/* Background Decoration */}
      <div className="absolute -left-20 top-20 h-52 w-52 rounded-full bg-[#23BE0A]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-[#23BE0A]/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Floating Book */}
        <div className="relative mx-auto mb-8 h-36 w-28 rotate-[-8deg] rounded-r-xl rounded-l-md bg-[#23BE0A] shadow-2xl shadow-[#23BE0A]/20">
          <div className="absolute left-3 top-0 h-full w-1 bg-white/20" />

          <div className="flex h-full flex-col items-center justify-center px-3 text-white">
            <span className="text-4xl font-black">?</span>
            <span className="mt-2 text-[9px] font-semibold uppercase tracking-[3px]">
              Unknown
            </span>
          </div>

          {/* Book pages */}
          <div className="absolute -right-2 top-2 h-[calc(100%-4px)] w-3 rounded-r-md bg-gray-100" />
        </div>

        {/* 404 */}
        <p className="text-sm font-bold uppercase tracking-[5px] text-[#23BE0A]">
          Chapter 404
        </p>

        <h1 className="mt-3 font-serif text-5xl font-bold tracking-tight text-[#131313] sm:text-6xl md:text-7xl">
          This page is missing.
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-gray-500">
          Looks like you opened a chapter that doesn&apos;t exist. Maybe this
          book took a wrong turn somewhere.
        </p>

        {/* Divider */}
        <div className="mx-auto my-7 flex max-w-xs items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-[#23BE0A]">✦</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Back Home */}
        <Link
          href="/"
          className="inline-flex items-center rounded-xl bg-[#23BE0A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#23BE0A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1fa308] hover:shadow-xl"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;