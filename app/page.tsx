"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
// import { FaHome } from "react-icons/fa";
// import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import { navItems } from "@/Data";
import Experience from "../components/Experience";
import Approach from "../components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[var(--color-black-100)] flex justify-center flex-col items-center mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full space-y-8">
        <FloatingNav navItems={navItems} />
        <Hero />
        {/* <Grid /> */}
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
