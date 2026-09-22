import PageShell from "@/components/PageShell";
import AboutPage from "@/views/about";

export const metadata = {
  title:       "About — Rajmani Nadar | Data Analyst • CRM Specialist • Full Stack Developer",
  description: "Meet Rajmani Nadar, a data analyst, CRM specialist, and full stack developer based in Coimbatore, Tamil Nadu, India, building intelligent digital experiences.",
  keywords:    ["Rajmani Nadar", "data analyst", "CRM specialist", "full stack developer", "Coimbatore developer"],
  alternates:  { canonical: "https://sarang-space.site/about" },
  openGraph: {
    title: "About Rajmani Nadar — Data Analyst • CRM Specialist • Full Stack Developer",
    description: "Based in Coimbatore, Tamil Nadu, India, Rajmani builds intelligent digital experiences with modern analytics and full stack development skills.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <style>{`.bottom-blur { display: none !important; }`}</style>
      <AboutPage />
    </PageShell>
  );
}
