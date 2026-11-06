import { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import HeroSection from "../components/home/HeroSection";
import IntroSection from "../components/home/IntroSection";
import StatsSection from "../components/home/StatsSection";
import ModelsPreview from "../components/home/ModelsPreview";
import TestimonialPanels from "../components/home/TestimonialPanels";
import CtaSection from "../components/home/CtaSection";

export default function Home() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    base44.entities.Testimonial.list("-created_date", 3).then((list) =>
      setTestimonials(Array.isArray(list) ? list : [])
    );
  }, []);

  return (
    <div>
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <ModelsPreview />
      <TestimonialPanels testimonials={testimonials} />
      <CtaSection />
    </div>
  );
}