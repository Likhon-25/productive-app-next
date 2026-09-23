"use client";
import { TApp } from "@/types/apps.type";
import React, { createContext, ReactNode, useState } from "react";

type TAppContext = {
  installApps: TApp[];
  setInstallApps: React.Dispatch<React.SetStateAction<TApp[]>>;
};
export const AppContext = createContext<TAppContext>({
  installApps: [],
  setInstallApps: () => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [installApps, setInstallApps] = useState<TApp[]>([]);
  const shareData = {
    installApps,
    setInstallApps,
  };
  return (
    <AppContext.Provider value={shareData}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
