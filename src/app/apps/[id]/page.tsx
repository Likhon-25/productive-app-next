import InstallAppBtn from "@/app/components/sharedApps/InstallAppBtn";
import { getAllApps } from "@/lib/apps";
import { TApp } from "@/types/apps.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type TAppDetailsPageProps = {
  params: {
    id: string;
  };
};

const AppDetailsPage = async ({ params }: TAppDetailsPageProps) => {
  const { id } = await params;

  const allApps = await getAllApps();

  const app = allApps.find((app: TApp) => String(app.id) === String(id));

  if (!app) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-[#f8fff7] px-4">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#23BE0A]/10 text-2xl">
            📱
          </div>

          <h2 className="mt-5 text-2xl font-bold text-[#131313]">
            App Not Found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            The application you are looking for does not exist.
          </p>

          <Link
            href="/apps"
            className="btn mt-5 rounded-xl border-none bg-[#23BE0A] px-6 text-white hover:bg-[#1fa308]"
          >
            Back to Apps
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fff7] py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Main Card */}
          <div className="overflow-hidden rounded-3xl border border-[#23BE0A]/10 bg-white shadow-sm">
            <div className="p-6 md:p-10">
              {/* App Header */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {/* App Image */}
                <div className="shrink-0">
                  <div className="rounded-3xl bg-[#23BE0A]/5 p-2">
                    <Image
                      src={app.image}
                      alt={app.title}
                      width={150}
                      height={150}
                      className="h-32 w-32 rounded-2xl object-cover shadow-sm md:h-40 md:w-40"
                    />
                  </div>
                </div>

                {/* App Information */}
                <div className="min-w-0 flex-1">
                  <div>
                    <span className="inline-flex rounded-full bg-[#23BE0A]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#23BE0A]">
                      Application
                    </span>

                    <h1 className="mt-3 text-2xl font-bold tracking-tight text-[#131313] md:text-4xl">
                      {app.title}
                    </h1>

                    <p className="mt-1 text-sm font-medium text-[#23BE0A] md:text-base">
                      {app.companyName}
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="badge rounded-full border-none bg-[#23BE0A]/10 px-3 py-3 text-[#23BE0A]">
                      ⭐ {app.ratingAvg}
                    </span>

                    <span className="badge rounded-full border border-gray-200 bg-white px-3 py-3 text-gray-600">
                      {app.reviews} Reviews
                    </span>

                    <span className="badge rounded-full border border-gray-200 bg-white px-3 py-3 text-gray-600">
                      {app.size} MB
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
                    {app.description}
                  </p>
                </div>
              </div>

              {/* App Stats */}
              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-gray-100 pt-7 md:grid-cols-3">
                <div className="rounded-2xl bg-[#f8fff7] p-4">
                  <p className="text-xs text-gray-400">Downloads</p>
                  <p className="mt-1 text-lg font-bold text-[#131313]">
                    {app.downloads}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f8fff7] p-4">
                  <p className="text-xs text-gray-400">App Size</p>
                  <p className="mt-1 text-lg font-bold text-[#131313]">
                    {app.size} MB
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl bg-[#f8fff7] p-4 md:col-span-1">
                  <p className="text-xs text-gray-400">Rating</p>
                  <p className="mt-1 text-lg font-bold text-[#131313]">
                    {app.ratingAvg} / 5
                  </p>
                </div>
              </div>

              {/* Install Button */}
              <InstallAppBtn key={app.id} app={app} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppDetailsPage;
