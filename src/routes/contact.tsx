import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, Clock, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import skinTreatmentImage from "@/assets/zeven-skin-treatment.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Zeven Salon · Studio · Academy" },
      { name: "description", content: "Visit, call or message Zeven Salon, Studio & Academy in Ahmedabad, Gujarat — we would love to hear from you." },
      { property: "og:title", content: "Contact Zeven Salon · Studio · Academy" },
      { property: "og:description", content: "Questions, bookings or academy inquiries — our team in Ahmedabad is ready to help." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const details = [
  { icon: MapPin, label: "Visit Us", value: "Ahmedabad, Gujarat", href: undefined as string | undefined },
  { icon: Phone, label: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: Mail, label: "Email Us", value: "info@zevensalonacademy.com", href: "mailto:info@zevensalonacademy.com" },
  { icon: Clock, label: "Open Hours", value: "Mon–Sun · 10:00 AM – 8:00 PM", href: undefined },
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

function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) return;
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHeader />

      <section className="border-b border-border px-5 pb-12 pt-16 text-center md:px-10 md:pb-16 md:pt-20">
        <p className="kicker">GET IN TOUCH</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-6xl leading-none md:text-8xl">We'd love to hear from you</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-muted-foreground">Questions, bookings or academy inquiries — our team in Ahmedabad is always happy to help.</p>
      </section>

      <section className="px-5 py-16 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div className="space-y-4">
            {details.map(({ icon: Icon, label, value, href }) => (
              <article key={label} className="flex items-center gap-5 border border-border bg-card p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold-deep text-primary"><Icon className="size-4" /></span>
                <div className="min-w-0">
                  <p className="text-[0.62rem] font-bold tracking-[0.18em] text-gold-deep">{label.toUpperCase()}</p>
                  {href ? <a href={href} className="mt-1 block truncate text-sm font-semibold hover:text-primary">{value}</a> : <p className="mt-1 text-sm font-semibold">{value}</p>}
                </div>
              </article>
            ))}

            <article className="border border-border bg-card p-6">
              <p className="text-[0.62rem] font-bold tracking-[0.18em] text-gold-deep">FOLLOW US</p>
              <div className="mt-4 flex items-center gap-5 text-primary">
                <a href="#" aria-label="Instagram"><Instagram className="size-5" /></a>
                <a href="#" aria-label="Facebook" className="font-display text-xl leading-none">f</a>
                <a href="#" aria-label="YouTube"><Youtube className="size-5" /></a>
                <a href="#" aria-label="WhatsApp"><MessageCircle className="size-5" /></a>
              </div>
            </article>

            <article className="relative overflow-hidden border border-gold/40 bg-primary p-8 text-primary-foreground">
              <img src={skinTreatmentImage} alt="" aria-hidden="true" width={1024} height={1365} loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity" />
              <div className="relative">
                <p className="font-script text-4xl leading-tight text-gold-light">Visit our studio ♥</p>
                <p className="mt-4 text-sm leading-7 text-primary-foreground/80">Walk in for a tour of the salon and academy, or call ahead and we'll prepare a warm welcome.</p>
              </div>
            </article>
          </div>

          <div className="border border-border bg-card p-7 md:p-10">
            <p className="kicker">SEND A MESSAGE</p>
            <h2 className="mt-4 font-display text-4xl">How can we help?</h2>
            <form onSubmit={submit} className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-1.5 text-xs font-semibold">Full name<Input required maxLength={100} placeholder="Your name" className="h-11 font-normal" /></label>
                <label className="grid gap-1.5 text-xs font-semibold">Phone number<Input required type="tel" maxLength={20} placeholder="+91" className="h-11 font-normal" /></label>
              </div>
              <label className="grid gap-1.5 text-xs font-semibold">Email address<Input required type="email" maxLength={255} placeholder="you@example.com" className="h-11 font-normal" /></label>
              <label className="grid gap-1.5 text-xs font-semibold">Topic
                <select required aria-label="Topic" defaultValue="" className="h-11 rounded-md border border-input bg-background px-3 text-sm font-normal">
                  <option value="" disabled>Select a topic</option>
                  <option>Appointment booking</option>
                  <option>Bridal & occasion makeup</option>
                  <option>Academy courses & admissions</option>
                  <option>Partnerships & press</option>
                  <option>Something else</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-xs font-semibold">Message<Textarea required maxLength={500} placeholder="Tell us a little about what you need…" className="min-h-32 font-normal" /></label>
              <Button type="submit" className="h-12 rounded-full">Send Message <ArrowRight /></Button>
              {sent && <p className="flex items-center gap-2 text-sm text-success"><CheckCircle2 className="size-4" />Thank you! We'll get back to you within one business day.</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-center text-primary-foreground md:px-10">
        <p className="text-xs font-semibold tracking-[0.22em] text-gold-light">READY WHEN YOU ARE</p>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Prefer to book directly?</h2>
        <Link to="/" hash="home" className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-primary">Book an Appointment <ArrowRight className="size-4" /></Link>
      </section>

      <footer className="bg-background px-5 py-8 text-center text-xs text-muted-foreground">© 2025 Zeven Salon & Academy · Ahmedabad, Gujarat</footer>
    </main>
  );
}
