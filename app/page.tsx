import { Feature } from "@/components/Feature";
import Home from "./Home/page";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { Testimonial } from "@/components/Testimonial/Testimonial";

export default function Main() {
  return (
    <main className="relative">
      <TracingBeam className="    ">
        <Home />
        <Feature />
        <Testimonial />
      </TracingBeam>
    </main>
  );
}
