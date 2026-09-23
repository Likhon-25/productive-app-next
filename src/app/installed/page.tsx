"use client";
import React, { useContext } from "react";
import { AppContext } from "../components/context/AppContext";
import AppCard from "../components/shared/AppCard";
import { TApp } from "@/types/apps.type";

const InstalledAppPage = () => {
  const { installApps } = useContext(AppContext);
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-[#23BE0A]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#23BE0A]">
            Trending Now
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#131313] md:text-4xl">
            Installed Apps
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
            Explore all trending apps on the market developed by top developers.
          </p>
        </div>

        {/* Display Data */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4">
  {installApps.length > 0 ? (
    installApps.map((app: TApp) => {
      return <AppCard key={app.id} app={app} />;
    })
  ) : (
    <div className="col-span-full flex min-h-[300px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#23BE0A]/10 text-2xl">
          📱
        </div>

        <h3 className="mt-5 text-xl font-bold text-[#131313]">
          No Installed Apps
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          You haven&apos;t installed any apps yet.
        </p>
      </div>
    </div>
  )}
</div>
      </div>
    </section>
  );
};

export default InstalledAppPage;
