import type { FC } from "react";
import DashboardHeader from "./layouts/Header";

const DashboardPage: FC = () => {
  return (
    <section className="h-screen w-screen">
      <DashboardHeader />
      <div className="flex h-[calc(100%-64px)] w-full">
        <aside className="hidden h-full w-80 bg-amber-400 xl:block"></aside>
        <main className="h-full w-full bg-blue-400 xl:w-[calc(100%-320px)]"></main>
      </div>
    </section>
  );
};

export default DashboardPage;
