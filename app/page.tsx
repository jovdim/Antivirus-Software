import { Feature } from "@/components/Feature";
import Home from "./Home/page";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Testimonial } from "@/components/Testimonial/Testimonial";
import Pricing from "./Pricing/page";
import Supporting from "@/components/Supporting";
import Contact from "./Contact/page";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Main() {
  return (
    <main className="relative">
      <TracingBeam className="    ">
        <Home />
        <Feature />
        <Testimonial />
        <Pricing />
        <Supporting />
        <Contact />
        <FAQ />
        <Footer />
      </TracingBeam>
    </main>
  );
}
