"use client";

import { TApp } from "@/types/apps.type";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const InstallAppBtn = ({ app }: { app: TApp }) => {
  const { installApps, setInstallApps } = useContext(AppContext);

  const handleInstall = () => {
    setInstallApps([...installApps, app]);
    console.log(app);
    toast.success(`${app.title} Install successfully `);
  };
  return (
    <div>
      <button
        onClick={() => handleInstall()}
        className="mt-10 group inline-flex items-center gap-3 rounded-xl bg-[#23BE0A] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1fa308] hover:shadow-lg hover:shadow-[#23BE0A]/20"
      >
        Install Now
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
};

export default InstallAppBtn;
