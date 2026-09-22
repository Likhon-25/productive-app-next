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

  const app = allApps.find(
    (app: TApp) => String(app.id) === String(id)
  );

  if (!app) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">App Not Found</h2>

          <Link
            href="/apps"
            className="btn btn-primary mt-4 rounded-xl"
          >
            Back to Apps
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-gray-50 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* App Details Card */}
          <div className="card overflow-hidden border border-gray-100 bg-white shadow-sm">
            <div className="card-body p-6 md:p-10">
              <div className="flex flex-col gap-7 sm:flex-row">
                {/* App Image */}
                <div className="shrink-0">
                  <Image
                    src={app.image}
                    alt={app.title}
                    width={150}
                    height={150}
                    className="h-32 w-32 rounded-3xl object-cover shadow-md ring-1 ring-gray-100 md:h-40 md:w-40"
                  />
                </div>

                {/* App Information */}
                <div className="min-w-0 flex-1">
                  {/* Title + Company */}
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                      {app.title}
                    </h1>

                    <p className="mt-1 text-base font-medium text-primary">
                      {app.companyName}
                    </p>
                  </div>

                  {/* Meta Information */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="badge badge-primary badge-outline rounded-full">
                      Application
                    </span>

                    <span className="badge badge-ghost rounded-full">
                      {app.size} MB
                    </span>

                    <span className="badge badge-ghost rounded-full">
                      {app.reviews} Reviews
                    </span>

                    <span className="badge badge-warning rounded-full">
                      ⭐ {app.ratingAvg}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 md:text-base">
                    {app.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AppDetailsPage;

