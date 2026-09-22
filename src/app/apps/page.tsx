import { TApp } from '@/types/apps.type';
import React from 'react';
import AppCard from '../components/shared/AppCard';
const getAllApps = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const AllAppsPage = async () => {
    const AppData = await getAllApps()
    return (
         <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-[#23BE0A]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#23BE0A]">
            Trending Now
          </span>

          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[#131313] md:text-4xl">
            Trending Apps
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
            Explore all trending apps on the market developed by top developers.
          </p>
        </div>

        {/* Display Data */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          {AppData.map((app: TApp) => {
            return <AppCard key={app.id} app={app} />;
          })}
        </div>
      </div>
    </section>
    );
};

export default AllAppsPage;