import { TApp } from "@/types/apps.type";
import Image from "next/image";

type TAppCardProps = {
  app: TApp;
};

const AppCard = ({ app }: TAppCardProps) => {
  return (
    <div className="group card overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#23BE0A]/20 hover:shadow-xl rounded-lg">
      <div className="card-body p-5">
        {/* App Header */}
        <div className="flex items-center gap-4">
          <div className="shrink-0 rounded-2xl bg-gray-50 p-1">
            <Image
              src={app.image}
              alt={app.title}
              width={88}
              height={88}
              className="h-[88px] w-[88px] rounded-xl object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="truncate text-lg font-bold text-[#131313]">
              {app.title}
            </h2>

            <p className="mt-1 truncate text-sm text-gray-500">
              {app.companyName}
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-full bg-[#23BE0A]/10 px-2.5 py-1 text-xs font-semibold text-[#23BE0A]">
                ★ {app.ratingAvg}
              </span>

              <span className="text-xs text-gray-400">
                {app.reviews} Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 line-clamp-2 text-sm leading-6 text-gray-500">
          {app.description}
        </p>

        {/* App Stats */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-gray-50 px-4 py-3">
            <p className="text-xs text-gray-400">Downloads</p>
            <p className="mt-1 text-sm font-bold text-[#131313]">
              {app.downloads}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 px-4 py-3">
            <p className="text-xs text-gray-400">Size</p>
            <p className="mt-1 text-sm font-bold text-[#131313]">
              {app.size} MB
            </p>
          </div>
        </div>

        {/* View Details */}
        <div className="mt-5">
          <button className="group rounded-xl border border-[#23BE0A] px-6 py-3 text-sm font-semibold text-[#23BE0A] transition-all duration-300 hover:bg-[#23BE0A] hover:text-white">
            View Details
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
