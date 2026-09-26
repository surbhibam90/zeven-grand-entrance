import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import heroImage from "@/assets/zeven-hero.jpg";
import academyImage from "@/assets/zeven-academy.jpg";
import servicesImage from "@/assets/zeven-services.jpg";
import skinTreatmentImage from "@/assets/zeven-skin-treatment.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Zeven Salon · Studio · Academy" },
      { name: "description", content: "Explore hair, skincare, makeup, nail, mehndi and academy work by Zeven in Ahmedabad." },
      { property: "og:title", content: "The Zeven Gallery" },
      { property: "og:description", content: "A curated collection of beauty transformations and student artistry from Zeven." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", "Hair Styling & Spa", "Skin & Facials", "Bridal & Party Makeup", "Nails Art", "Mehndi & Henna", "Academy & Student Work"] as const;
type Category = (typeof categories)[number];

type GalleryItem = {
  title: string;
  category: Exclude<Category, "All">;
  description: string;
  image: string;
  position: string;
  tall?: boolean;
};

const galleryItems: GalleryItem[] = [
  { title: "Silken Ritual", category: "Hair Styling & Spa", description: "A restorative wash and scalp ritual designed for luminous, healthy hair.", image: heroImage, position: "68% center", tall: true },
  { title: "Gloss & Movement", category: "Hair Styling & Spa", description: "Polished texture, fluid movement and a beautifully natural finish.", image: servicesImage, position: "8% center" },
  { title: "Golden Hour Facial", category: "Skin & Facials", description: "Nourishing serums and cooling jade therapy for fresh, radiant skin.", image: skinTreatmentImage, position: "center", tall: true },
  { title: "Quiet Radiance", category: "Skin & Facials", description: "A gentle skin ritual focused on hydration, comfort and glow.", image: servicesImage, position: "26% center" },
  { title: "The Zeven Bride", category: "Bridal & Party Makeup", description: "Refined bridal artistry balancing tradition with a modern luminous finish.", image: academyImage, position: "70% 24%", tall: true },
  { title: "Evening Edit", category: "Bridal & Party Makeup", description: "Elegant occasion makeup with softly defined eyes and radiant skin.", image: servicesImage, position: "66% center" },
  { title: "Burgundy Gold", category: "Nails Art", description: "A jewel-toned manicure finished with delicate metallic detail.", image: servicesImage, position: "45% center" },
  { title: "Modern Minimal", category: "Nails Art", description: "Clean, understated nail artistry made for everyday luxury.", image: servicesImage, position: "48% center", tall: true },
  { title: "Heritage Lines", category: "Mehndi & Henna", description: "Intricate henna motifs drawn with precision and a contemporary rhythm.", image: servicesImage, position: "84% center", tall: true },
  { title: "Celebration Henna", category: "Mehndi & Henna", description: "Detailed traditional artistry for weddings and joyful occasions.", image: servicesImage, position: "87% center" },
  { title: "Artist in Practice", category: "Academy & Student Work", description: "Guided hands-on learning with close attention from expert trainers.", image: academyImage, position: "35% center" },
  { title: "Crafting Confidence", category: "Academy & Student Work", description: "Professional techniques, real practice and creativity in every lesson.", image: academyImage, position: "60% center", tall: true },
];

function Brand() {
  return (
    <Link to="/" className="text-primary-foreground" aria-label="Zeven home">
      <span className="block font-display text-[1.7rem] leading-none tracking-[0.28em]">ZEVEN</span>
      <span className="mt-1 block text-[0.42rem] font-semibold tracking-[0.28em]">SALON · STUDIO · ACADEMY</span>
    </Link>
  );
}

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const visibleItems = useMemo(() => activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory), [activeCategory]);
  const selectedItem = selectedIndex === null ? null : visibleItems[selectedIndex];

  const moveLightbox = (direction: number) => {
    if (selectedIndex === null || visibleItems.length === 0) return;
    setSelectedIndex((selectedIndex + direction + visibleItems.length) % visibleItems.length);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-gold/25 bg-primary/95 px-5 py-4 text-primary-foreground backdrop-blur-xl md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center">
          <Link to="/" className="flex items-center gap-2 justify-self-start text-xs"><ChevronLeft className="size-4" /> Back Home</Link>
          <Brand />
          <Link to="/" hash="home" className="hidden justify-self-end text-xs sm:block">Book Appointment <ArrowRight className="ml-2 inline size-4" /></Link>
        </div>
      </header>

      <section className="border-b border-border px-5 pb-12 pt-16 text-center md:px-10 md:pb-16 md:pt-20">
        <p className="kicker">THE ZEVEN EDIT</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-6xl leading-none md:text-8xl">Artistry in Every Detail</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted-foreground">A curated collection of transformations, rituals and emerging talent from our salon and academy.</p>
      </section>

      <section className="px-5 py-12 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="Gallery categories">
            {categories.map((category) => (
              <Button key={category} role="tab" aria-selected={activeCategory === category} variant={activeCategory === category ? "default" : "outline"} onClick={() => { setActiveCategory(category); setSelectedIndex(null); }} className={`shrink-0 rounded-full px-5 text-xs ${activeCategory === category ? "bg-primary text-primary-foreground" : "border-gold-deep/40 bg-transparent"}`}>{category}</Button>
            ))}
          </div>

          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {visibleItems.map((item, index) => (
              <article key={`${item.title}-${item.category}`} className="group mb-5 break-inside-avoid">
                <Button variant="ghost" onClick={() => setSelectedIndex(index)} className="relative block h-auto w-full overflow-hidden rounded-t-[999px] p-0 text-left hover:bg-transparent" aria-label={`View ${item.title}`}>
                  <div className={item.tall ? "aspect-[3/4]" : "aspect-[4/5]"}>
                    <img src={item.image} alt={item.title} width={1024} height={1365} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: item.position }} />
                  </div>
                  <div className="absolute inset-0 flex items-end bg-primary/0 p-6 text-primary-foreground opacity-0 transition-all duration-300 group-hover:bg-primary/65 group-hover:opacity-100">
                    <span className="text-xs font-semibold tracking-[0.18em]">VIEW STORY</span>
                  </div>
                </Button>
                <div className="border-b border-border px-1 py-5">
                  <p className="text-[0.62rem] font-bold tracking-[0.18em] text-gold-deep">{item.category.toUpperCase()}</p>
                  <h2 className="mt-2 font-display text-2xl">{item.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-center text-primary-foreground md:px-10">
        <p className="text-xs font-semibold tracking-[0.22em] text-gold-light">YOUR MOMENT AWAITS</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Inspired by what you see?</h2>
        <Link to="/" hash="home" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-primary">Book an Appointment <ArrowRight className="size-4" /></Link>
      </section>

      <footer className="bg-background px-5 py-8 text-center text-xs text-muted-foreground">© 2025 Zeven Salon & Academy · Ahmedabad, Gujarat</footer>

      <Dialog open={selectedItem !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        <DialogContent className="max-h-[94vh] overflow-hidden border-gold/30 bg-primary p-0 text-primary-foreground sm:max-w-5xl [&>button]:hidden">
          <DialogTitle className="sr-only">{selectedItem?.title ?? "Gallery image"}</DialogTitle>
          {selectedItem && <div className="grid max-h-[94vh] md:grid-cols-[1.25fr_.75fr]">
            <div className="relative min-h-[52vh] md:min-h-[78vh]">
              <img src={selectedItem.image} alt={selectedItem.title} width={1024} height={1365} className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: selectedItem.position }} />
              <Button variant="ghost" size="icon" onClick={() => setSelectedIndex(null)} aria-label="Close gallery viewer" className="absolute right-4 top-4 rounded-full bg-primary/70 text-primary-foreground hover:bg-primary"><X /></Button>
            </div>
            <div className="flex flex-col justify-between p-7 md:p-10">
              <div><p className="text-[0.62rem] font-bold tracking-[0.2em] text-gold-light">{selectedItem.category.toUpperCase()}</p><h2 className="mt-4 font-display text-4xl">{selectedItem.title}</h2><p className="mt-5 text-sm leading-7 text-primary-foreground/75">{selectedItem.description}</p></div>
              <div className="mt-8 flex items-center justify-between"><span className="text-xs text-primary-foreground/60">{String((selectedIndex ?? 0) + 1).padStart(2, "0")} / {String(visibleItems.length).padStart(2, "0")}</span><div className="flex gap-2"><Button variant="outline" size="icon" onClick={() => moveLightbox(-1)} aria-label="Previous image" className="rounded-full border-gold/50 bg-transparent text-primary-foreground hover:bg-gold hover:text-primary"><ArrowLeft /></Button><Button variant="outline" size="icon" onClick={() => moveLightbox(1)} aria-label="Next image" className="rounded-full border-gold/50 bg-transparent text-primary-foreground hover:bg-gold hover:text-primary"><ArrowRight /></Button></div></div>
            </div>
          </div>}
        </DialogContent>
      </Dialog>
    </main>
  );
}