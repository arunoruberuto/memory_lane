import { ConceptSection } from "@/components/top/ConceptSection";
import { Hero } from "@/components/top/Hero";
import { MemberGrid } from "@/components/top/MemberGrid";
import { PhotoHighlights } from "@/components/top/PhotoHighlights";

export function HomePage() {
  return (
    <>
      <Hero />
      <ConceptSection />
      <MemberGrid />
      <PhotoHighlights />
    </>
  );
}
