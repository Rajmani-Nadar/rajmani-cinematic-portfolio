import { Suspense } from "react";
import Cursor from "../../components/Cursor";
import Navbar from "../../components/Navbar";
import ProjectsPage from "../../views/projects";

export const metadata = {
  title:       "Projects — Rajmani Nadar | Data Analyst • CRM Specialist • Full Stack Developer",
  description: "Explore projects by Rajmani Nadar, a data analyst, CRM specialist, and full stack developer building intelligent digital experiences.",
  keywords:    ["Rajmani Nadar projects", "data analyst projects", "CRM specialist", "full stack developer"],
  alternates:  { canonical: "https://sarang-space.site/projects" },
  openGraph: {
    title: "Projects — Rajmani Nadar | Data Analyst • CRM Specialist • Full Stack Developer",
    description: "Detailed work by Rajmani Nadar spanning data, CRM, and full stack development projects.",
  },
};

export default function Page() {
  return (
    <main>
      <div className="grain-overlay" />
      <Cursor />
      <Navbar />
      <div className="relative z-10">
        <Suspense fallback={<div className="min-h-screen bg-[#060606]" />}>
          <ProjectsPage />
        </Suspense>
      </div>
    </main>
  );
}
