import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import DiscoverAIS from "@/components/home/DiscoverAIS";
import AboutPreview from "@/components/home/AboutPreview";
import AcademicsPreview from "@/components/home/AcademicsPreview";
import SchoolLife from "@/components/home/SchoolLife";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";
import StudentStories from "@/components/home/StudentStories";
import NewsEvents from "@/components/home/NewsEvents";
import GalleryPreview from "@/components/home/GalleryPreview";
import AdmissionsCTA from "@/components/home/AdmissionsCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />
      <DiscoverAIS />
      <AboutPreview />
      <AcademicsPreview />
      <SchoolLife />
   <FacilitiesPreview />
<StudentStories />
<NewsEvents />
<GalleryPreview />
<AdmissionsCTA />
<Footer />
    </main>
  );
}