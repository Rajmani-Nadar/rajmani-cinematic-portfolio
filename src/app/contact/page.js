import PageShell from "@/components/PageShell";
import ContactPage from "@/views/contact";

export const metadata = {
  title:       "Contact — Rajmani Nadar | Data Analyst • CRM Specialist • Full Stack Developer",
  description: "Get in touch with Rajmani Nadar, a data analyst, CRM specialist, and full stack developer based in Coimbatore, Tamil Nadu, India.",
  keywords:    ["Rajmani Nadar", "data analyst", "CRM specialist", "full stack developer", "contact developer"],
  alternates:  { canonical: "https://sarang-space.site/contact" },
  openGraph: {
    title: "Contact Rajmani Nadar — Data Analyst • CRM Specialist • Full Stack Developer",
    description: "Reach out to Rajmani Nadar for data, CRM, and full stack development projects in Coimbatore, Tamil Nadu, India.",
  },
};

export default function Page() {
  return (
    <PageShell>
      <ContactPage />
    </PageShell>
  );
}
