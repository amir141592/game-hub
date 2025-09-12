import type { FC } from "react";

import Logo from "../../../assets/logo.webp";

const DashboardHeader: FC = () => {
  return (
    <header className="flex h-16 w-full items-center px-4">
      <div className="flex h-full items-center gap-4">
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center">
          <img className="h-auto w-full" src={Logo} alt="Logo" />
        </div>
        <h1 className="">Game Hub</h1>
      </div>
      <nav></nav>
    </header>
  );
};

export default DashboardHeader;
