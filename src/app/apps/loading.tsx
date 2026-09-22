import React from "react";

const AllAppsSkeleton = () => {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading Skeleton */}
        <div className="mb-10 text-center">
          <div className="skeleton mx-auto h-6 w-28 rounded-full" />

          <div className="skeleton mx-auto mt-4 h-10 w-64 rounded-lg" />

          <div className="skeleton mx-auto mt-4 h-5 w-full max-w-2xl rounded-lg" />
        </div>

        {/* Apps Skeleton */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="card border border-gray-100 bg-white shadow-sm"
            >
              <div className="card-body p-5">
                {/* App Header */}
                <div className="flex items-center gap-4">
                  <div className="skeleton h-[88px] w-[88px] shrink-0 rounded-2xl" />

                  <div className="min-w-0 flex-1">
                    <div className="skeleton h-5 w-3/4 rounded" />
                    <div className="skeleton mt-2 h-4 w-1/2 rounded" />

                    <div className="mt-3 flex gap-2">
                      <div className="skeleton h-5 w-12 rounded-full" />
                      <div className="skeleton h-5 w-16 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-5 space-y-2">
                  <div className="skeleton h-4 w-full rounded" />
                  <div className="skeleton h-4 w-4/5 rounded" />
                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-gray-50 px-4 py-3">
                    <div className="skeleton h-3 w-16 rounded" />
                    <div className="skeleton mt-2 h-4 w-20 rounded" />
                  </div>

                  <div className="rounded-xl bg-gray-50 px-4 py-3">
                    <div className="skeleton h-3 w-10 rounded" />
                    <div className="skeleton mt-2 h-4 w-16 rounded" />
                  </div>
                </div>

                {/* Button */}
                <div className="skeleton mt-5 h-11 w-32 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllAppsSkeleton;