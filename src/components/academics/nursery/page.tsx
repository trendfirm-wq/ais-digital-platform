import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProgrammePage from "@/components/academics/ProgrammePage";
import { programmes } from "@/lib/programmes";

export default function NurseryPage() {
  return (
    <>
      <Header />
      <main>
        <ProgrammePage programme={programmes.nursery} />
      </main>
      <Footer />
    </>
  );
}