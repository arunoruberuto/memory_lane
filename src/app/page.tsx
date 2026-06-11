import { ConceptSection } from "@/components/home/ConceptSection";
import { Hero } from "@/components/home/Hero";
import { MemberGrid } from "@/components/home/MemberGrid";
import { PhotoHighlights } from "@/components/home/PhotoHighlights";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConceptSection />
      <MemberGrid />
      <PhotoHighlights />
    </>
  );
}
