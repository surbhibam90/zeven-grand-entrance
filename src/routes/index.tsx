import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  GraduationCap,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Sparkles,
  Star,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroImage from "@/assets/zeven-hero.jpg";
import academyImage from "@/assets/zeven-academy.jpg";
import servicesImage from "@/assets/zeven-services.jpg";
import skinTreatmentImage from "@/assets/zeven-skin-treatment.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zeven Salon · Studio · Academy | Jamnagar" },
      { name: "description", content: "Luxury salon services and professional beauty education in Jamnagar, Gujarat." },
      { property: "og:title", content: "Zeven Salon · Studio · Academy" },
      { property: "og:description", content: "Expert care for your hair, skin, nails and more — because you deserve the best." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ZevenHome,
});

const services = [
  { name: "Hair", detail: "Cut, colour, styling & rituals", price: "From ₹799", duration: "45–120 min" },
  { name: "Skin & Facials", detail: "Bespoke facials & skin therapy", price: "From ₹1,499", duration: "60–90 min" },
  { name: "Nails", detail: "Manicure, extensions & nail art", price: "From ₹699", duration: "45–90 min" },
  { name: "Makeup", detail: "Occasion and bridal artistry", price: "From ₹2,499", duration: "60–150 min" },
  { name: "Mehndi", detail: "Traditional and contemporary art", price: "From ₹999", duration: "60–180 min" },
  { name: "Skin Treatment", detail: "Gentle facial care, restorative serums and gua sha therapy", price: "From ₹1,999", duration: "60–90 min" },
];

const reviews = [
  { quote: "Amazing service and such a relaxing experience! The team is so professional and friendly. Truly the best salon in town.", name: "Priya S.", initials: "PS" },
  { quote: "Loved my bridal makeup! The staff understood exactly what I wanted. I will definitely visit again!", name: "Riddhi M.", initials: "RM" },
  { quote: "The academy gave me confidence, real practice and the skills to begin my own beauty career.", name: "Mahi P.", initials: "MP" },
] as const;

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={light ? "text-hero-foreground" : "text-primary"} aria-label="Zeven home">
      <span className="block font-display text-[1.7rem] leading-none tracking-[0.28em]">ZEVEN</span>
      <span className="mt-1 block text-[0.42rem] font-semibold tracking-[0.28em]">SALON · STUDIO · ACADEMY</span>
    </a>
  );
}

function ZevenHome() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [academyOpen, setAcademyOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [sent, setSent] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const visibleReviews = [
    reviews[reviewIndex] ?? reviews[0],
    reviews[(reviewIndex + 1) % reviews.length] ?? reviews[1],
  ];

  useEffect(() => {
    const updateHeader = () => setHeaderScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  const openBooking = (service?: (typeof services)[number]) => {
    setSelectedService(service ?? null);
    setSent(false);
    setBookingOpen(true);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) return;
    setSent(true);
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section id="home" className="relative min-h-screen bg-hero">
        <div aria-hidden="true" className="absolute inset-0 bg-cover bg-fixed bg-[position:67%_center]" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-hero-overlay" />
        <header className={`fixed left-0 right-0 top-0 z-50 grid grid-cols-[auto_1fr_auto] items-center border-b px-5 py-4 transition-[background-color,border-color,box-shadow] duration-300 md:px-10 lg:px-16 ${headerScrolled ? "border-gold/25 bg-primary/95 text-primary-foreground shadow-lg backdrop-blur-xl" : "border-transparent bg-transparent text-hero-foreground"}`}>
          <nav className="hidden items-center gap-7 text-xs lg:flex"><a href="#services">Services</a><a href="#academy">Academy</a><a href="#gallery">Gallery</a></nav>
          <div className="justify-self-center"><Brand light /></div>
          <nav className="hidden items-center justify-self-end gap-6 text-xs lg:flex"><a href="#about">About</a><a href="#contact">Contact</a><Button onClick={() => openBooking()} className="h-11 rounded-full border border-gold/60 bg-primary/80 px-6 text-xs hover:bg-primary">Book Appointment <ArrowRight /></Button></nav>
          <Button variant="ghost" size="icon" aria-label="Open menu" onClick={() => setMenuOpen(true)} className="justify-self-end rounded-full border border-hero-foreground/40 text-hero-foreground lg:hidden"><Menu /></Button>
        </header>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-5 pb-20 pt-24 md:px-10 lg:px-16">
          <div className="max-w-xl pt-12 text-hero-foreground md:pt-0">
            <p className="kicker text-gold-light">SELF CARE · EXPERT CARE</p>
            <h1 className="mt-7 font-display text-6xl leading-[0.88] sm:text-7xl md:text-8xl">Relax<br />Rejuvenate<br />Be You</h1>
            <div className="my-6 h-px w-10 bg-gold" />
            <p className="max-w-md text-sm leading-6 text-hero-foreground/85 md:text-base">Expert care for your hair, skin, nails and more<br className="hidden sm:block" /> — because you deserve the best.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button onClick={() => openBooking()} className="h-12 rounded-full bg-gold px-7 text-primary hover:bg-gold-light">Book Appointment <ArrowRight /></Button>
              <Button variant="ghost" onClick={() => setStoryOpen(true)} className="h-12 rounded-full px-3 text-hero-foreground hover:bg-hero-foreground/10 hover:text-hero-foreground"><span className="grid size-10 place-items-center rounded-full border border-hero-foreground/60"><Play className="ml-0.5" /></span> Watch Our Story</Button>
            </div>
            <div className="mt-12 flex items-center gap-3 text-[0.65rem] tracking-[0.18em]"><span>01</span><span>/</span><span>03</span><span className="h-px w-20 bg-hero-foreground/60" /></div>
          </div>
        </div>
        <div className="absolute bottom-16 right-5 z-10 hidden border-r border-hero-foreground/50 pr-4 text-right text-[0.65rem] font-semibold tracking-[0.28em] text-hero-foreground md:block lg:right-12">
          {['HAIR','SKIN','NAILS','MAKEUP','MEHNDI'].map((item, index) => <div key={item} className={index === 0 ? "py-1 text-gold-light" : "py-1 opacity-70"}>{item}</div>)}
        </div>
      </section>

      <section id="academy" className="border-b border-border bg-background py-20 lg:py-0">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-10 px-5 lg:grid-cols-[1fr_1.05fr] lg:px-16 lg:py-24">
            <div>
              <p className="kicker">ZEVEN ACADEMY</p>
              <h2 className="mt-5 font-display text-6xl leading-[0.94]">Learn<br />Create<br /><em className="text-gold-deep">Grow</em></h2>
              <div className="my-5 h-px w-10 bg-gold-deep" />
              <p className="text-sm leading-6 text-muted-foreground">Professional beauty courses with hands-on training, certification and placement support.</p>
              <Button onClick={() => setAcademyOpen(true)} className="mt-7 h-12 rounded-full px-7">Join Academy <ArrowRight /></Button>
            </div>
            <div className="border-l border-border pl-7">
              <div className="space-y-5 pt-4">
                {[[Users,'Expert Trainers'],[Sparkles,'Hands-on Practice'],[Award,'Certified Courses'],[GraduationCap,'Placement Support']].map(([Icon,label]) => {
                  const IconComponent = Icon as typeof Users;
                  return <div key={label as string} className="flex items-center gap-4 text-sm font-medium"><span className="grid size-10 place-items-center rounded-full border border-gold-deep text-primary"><IconComponent className="size-4" /></span>{label as string}</div>
                })}
              </div>
              <blockquote className="mt-10 border-t border-border pt-7 font-display text-xl italic text-gold-deep">“Skills today,<br />a brighter tomorrow”</blockquote>
            </div>
          </div>
          <div className="relative mt-12 min-h-[540px] overflow-hidden lg:mt-0">
            <img src={academyImage} alt="A Zeven Academy instructor training a beauty student" width={1104} height={1408} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top [clip-path:ellipse(72%_78%_at_58%_100%)] lg:[clip-path:ellipse(67%_86%_at_56%_100%)]" />
            <p className="absolute right-5 top-8 rotate-[-5deg] font-script text-3xl leading-tight text-primary lg:right-10">Create<br />Beautiful<br />Careers ♥</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-background px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-5">
            <div><p className="kicker">OUR SERVICES</p><h2 className="mt-4 font-display text-5xl md:text-6xl">Beauty In Every Form</h2></div>
            <button onClick={() => document.getElementById('service-grid')?.scrollIntoView({ behavior: 'smooth' })} className="hidden items-center gap-3 text-[0.65rem] font-semibold tracking-[0.16em] md:flex">EXPLORE ALL SERVICES <ArrowRight className="size-4" /></button>
          </div>
          <div id="service-grid" className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {services.map((service, index) => (
              <article key={service.name} className="group min-w-0">
                <button onClick={() => setSelectedService(service)} className="block w-full text-left">
                  <div className="aspect-[0.78] overflow-hidden rounded-t-[999px] bg-muted">{service.name === "Skin Treatment" ? <img src={skinTreatmentImage} alt="Luxury skin serums, jade roller and gua sha treatment tools" width={1024} height={1365} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /> : <img src={servicesImage} alt={service.name} width={1808} height={1008} loading="lazy" className="h-full w-[600%] max-w-none object-cover transition-transform duration-500 group-hover:scale-[1.03]" style={{ transform: `translateX(-${index * (100 / 6)}%)` }} />}</div>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-b border-border py-4"><span className="truncate text-sm font-medium">{service.name}</span><span className="grid size-8 shrink-0 place-items-center rounded-full border border-gold-deep"><ArrowRight className="size-3" /></span></div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="border-t border-border bg-soft px-5 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="relative hidden min-h-[360px] overflow-hidden border border-gold/50 bg-primary lg:block">
              <img src={academyImage} alt="Zeven beauty editorial" width={1104} height={1408} loading="lazy" className="h-full w-full object-cover opacity-40 mix-blend-luminosity" />
              <div className="absolute inset-5 border border-gold/50" />
              <p className="absolute inset-0 grid place-items-center px-8 text-center font-script text-4xl leading-tight text-hero-foreground">More Self Love<br />Everyday ♥</p>
            </div>
            <div>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                <div><p className="kicker text-center lg:text-left">CLIENT LOVE</p><h2 className="mt-3 font-display text-4xl md:text-5xl">What Our Clients Say</h2></div>
                <div className="flex gap-2"><Button variant="outline" size="icon" aria-label="Previous review" onClick={() => setReviewIndex((reviewIndex + reviews.length - 1) % reviews.length)} className="rounded-full"><ArrowLeft /></Button><Button variant="outline" size="icon" aria-label="Next review" onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)} className="rounded-full"><ArrowRight /></Button></div>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {visibleReviews.map((review) => (
                  <article key={review.name} className="border border-border bg-card p-7">
                    <span className="font-display text-5xl leading-none text-gold-deep">“</span><p className="min-h-24 text-sm leading-7 text-muted-foreground">{review.quote}</p>
                    <div className="mt-7 flex items-center gap-3"><span className="grid size-11 place-items-center rounded-full bg-primary font-display text-primary-foreground">{review.initials}</span><div><p className="text-sm font-semibold">{review.name}</p><div className="mt-1 flex text-gold-deep">{Array.from({ length: 5 }).map((_,i) => <Star key={i} className="size-3 fill-current" />)}</div></div></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-10 text-primary-foreground md:px-10">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-y-8 md:grid-cols-4">
          {[[Users,'10K+','Happy Clients'],[Award,'5+','Years of Excellence'],[Sparkles,'20+','Expert Professionals'],[GraduationCap,'1000+','Students Trained']].map(([Icon,value,label], index) => { const StatIcon = Icon as typeof Users; return <div key={label as string} className={`flex items-center justify-center gap-4 px-4 ${index > 0 ? 'md:border-l md:border-primary-foreground/20' : ''}`}><StatIcon className="size-8 text-gold" /><div><strong className="font-display text-3xl font-normal">{value as string}</strong><span className="block text-[0.65rem] opacity-75">{label as string}</span></div></div>})}
        </div>
      </section>

      <footer id="about" className="bg-background px-5 py-14 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-10 border-b border-border pb-12 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr_1.3fr]">
          <div><Brand /><p className="mt-7 font-script text-2xl text-primary">Beauty Beyond Ordinary ♥</p></div>
          <FooterList title="Quick Links" items={['Home','Services','Academy','Gallery']} />
          <FooterList title="About" items={['About Us','Contact','Privacy Policy','Terms']} />
          <div><h3 className="text-sm font-semibold">Follow Us</h3><div className="mt-6 flex gap-4"><Instagram className="size-4" /><span className="font-bold">f</span><Youtube className="size-4" /><MessageCircle className="size-4" /></div></div>
          <div id="contact" className="space-y-4 text-sm text-muted-foreground"><p className="flex gap-3"><MapPin className="size-4 shrink-0 text-primary" />Jamnagar, Gujarat</p><p className="flex gap-3"><Phone className="size-4 shrink-0 text-primary" />+91 98765 43210</p><p className="flex min-w-0 gap-3"><Mail className="size-4 shrink-0 text-primary" /><span className="break-all">info@zevensalonacademy.com</span></p></div>
        </div>
        <div className="mx-auto flex max-w-[1320px] flex-col gap-4 pt-7 text-[0.65rem] tracking-wide text-muted-foreground md:flex-row md:items-center md:justify-between"><span>© 2025 Zeven Salon & Academy. All rights reserved.</span><span className="tracking-[0.2em]">MAKING BEAUTY A BETTER TOMORROW —</span></div>
      </footer>

      {menuOpen && <div className="fixed inset-0 z-[60] bg-primary p-6 text-primary-foreground lg:hidden"><div className="flex items-center justify-between"><Brand light /><Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="text-primary-foreground"><X /></Button></div><nav className="mt-20 grid gap-7 font-display text-4xl">{[['Services','#services'],['Academy','#academy'],['Gallery','#gallery'],['About','#about'],['Contact','#contact']].map(([label,href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav><Button onClick={() => { setMenuOpen(false); openBooking(); }} className="mt-12 rounded-full bg-gold text-primary">Book Appointment <ArrowRight /></Button></div>}

      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} service={selectedService?.name} sent={sent} onSubmit={submit} />
      <Dialog open={academyOpen} onOpenChange={setAcademyOpen}><DialogContent className="max-h-[90vh] overflow-y-auto"><DialogHeader><DialogTitle className="font-display text-3xl">Begin your beauty career</DialogTitle><DialogDescription>Tell us what you want to learn. Our academy advisor will contact you.</DialogDescription></DialogHeader><form onSubmit={submit} className="grid gap-4"><select required aria-label="Course" className="h-11 rounded-md border border-input bg-background px-3 text-sm"><option value="">Select a course</option><option>Professional Makeup</option><option>Hair Artistry</option><option>Nail Technology</option><option>Complete Cosmetology</option></select><Input required maxLength={100} placeholder="Full name" /><Input required type="tel" maxLength={20} placeholder="Phone number" /><Input required type="email" maxLength={255} placeholder="Email address" /><Textarea maxLength={500} placeholder="Tell us about your goals" /><Button type="submit" className="h-11 rounded-full">Send Admission Inquiry</Button>{sent && <p className="flex items-center gap-2 text-sm text-success"><CheckCircle2 className="size-4" />Thank you. Our academy team will be in touch.</p>}</form></DialogContent></Dialog>
      <Dialog open={storyOpen} onOpenChange={setStoryOpen}><DialogContent className="overflow-hidden border-gold/30 bg-primary p-0 text-primary-foreground sm:max-w-3xl"><div className="relative aspect-video"><img src={heroImage} alt="The Zeven salon story" width={1920} height={1088} className="h-full w-full object-cover opacity-55" /><div className="absolute inset-0 grid place-items-center text-center"><div><span className="mx-auto grid size-16 place-items-center rounded-full border border-gold"><Play className="ml-1 text-gold" /></span><h2 className="mt-5 font-display text-4xl">Beauty, with intention.</h2><p className="mx-auto mt-3 max-w-md text-sm text-primary-foreground/75">A quiet space where expert artistry, warm care and your individuality come together.</p></div></div></div></DialogContent></Dialog>
      <Dialog open={Boolean(selectedService) && !bookingOpen} onOpenChange={(open) => !open && setSelectedService(null)}><DialogContent><DialogHeader><DialogTitle className="font-display text-3xl">{selectedService?.name}</DialogTitle><DialogDescription>{selectedService?.detail}</DialogDescription></DialogHeader><div className="grid grid-cols-2 border-y border-border py-5 text-sm"><div><span className="block text-muted-foreground">Starting at</span><strong>{selectedService?.price}</strong></div><div><span className="block text-muted-foreground">Duration</span><strong>{selectedService?.duration}</strong></div></div><Button onClick={() => selectedService && openBooking(selectedService)} className="h-11 rounded-full">Book this service <ArrowRight /></Button></DialogContent></Dialog>
    </main>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="text-sm font-semibold">{title}</h3><ul className="mt-5 space-y-3 text-xs text-muted-foreground">{items.map(item => <li key={item}><a href={item === 'Home' ? '#home' : `#${item.toLowerCase().replace(' us','').replace(' policy','')}`}>{item}</a></li>)}</ul></div>;
}

function BookingDialog({ open, onOpenChange, service, sent, onSubmit }: { open: boolean; onOpenChange: (open: boolean) => void; service: string | undefined; sent: boolean; onSubmit: (event: FormEvent<HTMLFormElement>) => void }) {
  return <Dialog open={open} onOpenChange={onOpenChange}><DialogContent className="max-h-[92vh] overflow-y-auto"><DialogHeader><DialogTitle className="font-display text-3xl">Book your appointment</DialogTitle><DialogDescription>Choose your ritual and preferred time. We’ll confirm your appointment by phone.</DialogDescription></DialogHeader><form onSubmit={onSubmit} className="grid gap-4"><label className="grid gap-1.5 text-xs font-semibold">Service<select required defaultValue={service ?? ''} className="h-11 rounded-md border border-input bg-background px-3 text-sm font-normal"><option value="">Select a service</option>{services.map(item => <option key={item.name}>{item.name}</option>)}</select></label><div className="grid grid-cols-2 gap-3"><label className="grid gap-1.5 text-xs font-semibold">Date<Input required type="date" className="h-11 font-normal" /></label><label className="grid gap-1.5 text-xs font-semibold">Time<select required className="h-11 rounded-md border border-input bg-background px-3 text-sm font-normal"><option value="">Select</option><option>10:00 AM</option><option>12:30 PM</option><option>3:00 PM</option><option>5:30 PM</option></select></label></div><label className="grid gap-1.5 text-xs font-semibold">Stylist preference<select className="h-11 rounded-md border border-input bg-background px-3 text-sm font-normal"><option>No preference</option><option>Senior stylist</option><option>Female stylist</option></select></label><Input required maxLength={100} placeholder="Full name" /><Input required type="tel" maxLength={20} placeholder="Phone number" /><Input required type="email" maxLength={255} placeholder="Email address" /><Button type="submit" className="h-11 rounded-full">Request Appointment <ArrowRight /></Button>{sent && <p className="flex items-center gap-2 text-sm text-success"><CheckCircle2 className="size-4" />Request received. We’ll call to confirm shortly.</p>}</form></DialogContent></Dialog>;
}