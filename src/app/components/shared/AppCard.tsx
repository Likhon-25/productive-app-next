import { TApp } from "@/types/apps.type";
import Image from "next/image";
import Link from "next/link";

type TAppCardProps = {
  app: TApp;
};

const AppCard = ({ app }: TAppCardProps) => {
  return (
    <div className="group card overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#23BE0A]/20 hover:shadow-lg">
      <div className="card-body p-5">
        {/* App Header */}
        <div className="flex items-center gap-4">
          {/* Image */}
          <div className="shrink-0 rounded-2xl bg-gray-50 p-1.5 transition-all duration-300 group-hover:bg-[#23BE0A]/5">
            <Image
              src={app.image}
              alt={app.title}
              width={88}
              height={88}
              className="h-22 w-22 rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>

          {/* Info */}
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-lg font-bold text-[#131313] transition-colors duration-300 group-hover:text-[#23BE0A]">
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
          <div className="rounded-xl border border-gray-100 bg-gray-50/70 px-4 py-3 transition-all duration-300 hover:border-[#23BE0A]/15 hover:bg-[#23BE0A]/5">
            <p className="text-xs text-gray-400">Downloads</p>
            <p className="mt-1 text-sm font-bold text-[#131313]">
              {app.downloads}
            </p>
          </div>

          <div className="rounded-xl border border-gray-100 bg-gray-50/70 px-4 py-3 transition-all duration-300 hover:border-[#23BE0A]/15 hover:bg-[#23BE0A]/5">
            <p className="text-xs text-gray-400">Size</p>
            <p className="mt-1 text-sm font-bold text-[#131313]">
              {app.size} MB
            </p>
          </div>
        </div>

        {/* View Details */}
        <div className="mt-5">
          <Link
            href={`/apps/${app.id}`}
            className="group/btn inline-flex items-center rounded-xl border border-[#23BE0A] px-5 py-2.5 text-sm font-semibold text-[#23BE0A] transition-all duration-300 hover:bg-[#23BE0A] hover:text-white hover:shadow-md hover:shadow-[#23BE0A]/20"
          >
            View Details
            <span className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppCard;