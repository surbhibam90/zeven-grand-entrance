import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, GraduationCap, HeartHandshake, Leaf, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/zeven-hero.jpg";
import academyImage from "@/assets/zeven-academy.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Zeven Salon · Studio · Academy" },
      { name: "description", content: "The story, values and people behind Zeven Salon, Studio & Academy in Ahmedabad, Gujarat." },
      { property: "og:title", content: "About Zeven Salon · Studio · Academy" },
      { property: "og:description", content: "A quiet space where expert artistry, warm care and your individuality come together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: HeartHandshake, title: "Warm Hospitality", text: "Every visit begins with a welcome — a calm space, a listening ear and care that feels personal." },
  { icon: Sparkles, title: "Expert Artistry", text: "Our stylists, therapists and artists train continuously so every detail is executed with precision." },
  { icon: Leaf, title: "Modest Luxury", text: "Refined, comfortable and respectful — luxury that feels effortless and appropriate for everyone." },
  { icon: GraduationCap, title: "Always Learning", text: "From new techniques to emerging trends, we grow so our clients and students can too." },
];

const milestones = [
  { year: "2019", title: "The First Studio", text: "Zeven opens its doors in Ahmedabad with a small team and a big promise — beauty beyond ordinary." },
  { year: "2021", title: "The Academy", text: "We launch professional beauty courses, sharing our craft with the next generation of artists." },
  { year: "2023", title: "A Growing Family", text: "Our studio expands with dedicated skin, nail and mehndi ateliers under one elegant roof." },
  { year: "Today", title: "10,000+ Clients", text: "Thousands of clients and 1000+ trained students later, our promise remains exactly the same." },
];

function Brand() {
  return (
    <Link to="/" className="text-primary-foreground" aria-label="Zeven home">
      <span className="block font-display text-[1.7rem] leading-none tracking-[0.28em]">ZEVEN</span>
      <span className="mt-1 block text-[0.42rem] font-semibold tracking-[0.28em]">SALON · STUDIO · ACADEMY</span>
    </Link>
  );
}

function PageHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold/25 bg-primary/95 px-5 py-4 text-primary-foreground backdrop-blur-xl md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-[1320px] grid-cols-[1fr_auto_1fr] items-center">
        <Link to="/" className="flex items-center gap-2 justify-self-start text-xs"><span aria-hidden="true">←</span> Back Home</Link>
        <Brand />
        <Link to="/" hash="home" className="hidden justify-self-end text-xs sm:block">Book Appointment <ArrowRight className="ml-2 inline size-4" /></Link>
      </div>
    </header>
  );
}

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHeader />

      <section className="border-b border-border px-5 pb-12 pt-16 text-center md:px-10 md:pb-16 md:pt-20">
        <p className="kicker">OUR STORY</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-6xl leading-none md:text-8xl">Beauty, with intention.</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted-foreground">A quiet space where expert artistry, warm care and your individuality come together.</p>
      </section>

      <section className="px-5 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-t-[999px] border border-gold/40">
            <img src={heroImage} alt="A relaxing hair ritual at Zeven Salon" width={1920} height={1088} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div>
            <p className="kicker">SINCE 2019 · Ahmedabad</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Where self care becomes an art</h2>
            <div className="my-6 h-px w-10 bg-gold-deep" />
            <p className="text-sm leading-7 text-muted-foreground">Zeven began with a simple belief: everyone deserves a place to slow down and feel their most beautiful. What started as a single studio in Ahmedabad has grown into a full salon, studio and academy — yet every appointment still feels personal.</p>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">From restorative hair rituals and bespoke facials to bridal artistry, nails and mehndi, our team blends timeless technique with modern style — always in a space that is elegant, welcoming and comfortably modest.</p>
            <blockquote className="mt-8 border-l-2 border-gold-deep pl-6 font-script text-3xl leading-tight text-primary">Beauty Beyond Ordinary ♥</blockquote>
          </div>
        </div>
      </section>

      <section className="bg-soft px-5 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="text-center"><p className="kicker">WHAT GUIDES US</p><h2 className="mt-4 font-display text-4xl md:text-5xl">Our Values</h2></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="border border-border bg-card p-7">
                <span className="grid size-11 place-items-center rounded-full border border-gold-deep text-primary"><Icon className="size-4" /></span>
                <h3 className="mt-6 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-xs leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-10 text-primary-foreground md:px-10">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-y-8 md:grid-cols-4">
          {[[Users,'10K+','Happy Clients'],[Award,'5+','Years of Excellence'],[Sparkles,'20+','Expert Professionals'],[GraduationCap,'1000+','Students Trained']].map(([Icon,value,label], index) => { const StatIcon = Icon as typeof Users; return <div key={label as string} className={`flex items-center justify-center gap-4 px-4 ${index > 0 ? 'md:border-l md:border-primary-foreground/20' : ''}`}><StatIcon className="size-8 text-gold" /><div><strong className="font-display text-3xl font-normal">{value as string}</strong><span className="block text-[0.65rem] opacity-75">{label as string}</span></div></div>})}
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="kicker">OUR JOURNEY</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">Milestones along the way</h2>
            <div className="mt-10 space-y-0">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`grid grid-cols-[4.5rem_1fr] gap-5 py-6 ${index > 0 ? 'border-t border-border' : ''}`}>
                  <span className="font-display text-2xl text-gold-deep">{milestone.year}</span>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide">{milestone.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-muted-foreground">{milestone.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-t-[999px] border border-gold/40">
            <img src={academyImage} alt="A Zeven Academy instructor guiding a student" width={1104} height={1408} loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
            <p className="absolute right-4 top-6 rotate-[-5deg] font-script text-3xl leading-tight text-primary drop-shadow-sm">Create Beautiful<br />Careers ♥</p>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-center text-primary-foreground md:px-10">
        <p className="text-xs font-semibold tracking-[0.22em] text-gold-light">COME SAY HELLO</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Experience the Zeven difference</h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/" hash="home" className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-primary">Book an Appointment <ArrowRight className="size-4" /></Link>
          <Button variant="outline" asChild className="h-12 rounded-full border-gold/50 bg-transparent px-7 text-sm text-primary-foreground hover:bg-gold hover:text-primary"><Link to="/contact">Contact Us</Link></Button>
        </div>
      </section>

      <footer className="bg-background px-5 py-8 text-center text-xs text-muted-foreground">© 2025 Zeven Salon & Academy · Ahmedabad, Gujarat</footer>
    </main>
  );
}
