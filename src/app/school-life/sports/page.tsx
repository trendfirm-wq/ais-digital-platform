import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ExperiencePage from "@/components/school-life/ExperiencePage";
import { schoolLife } from "@/lib/schoolLife";

export default function SportsPage() {
  return (
    <>
      <Header />
      <ExperiencePage experience={schoolLife.sports} />
      <Footer />
    </>
  );
}