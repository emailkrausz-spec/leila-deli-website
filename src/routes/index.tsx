import { createFileRoute } from "@tanstack/react-router";
import heroFood from "@/assets/hero-food.jpg";
import dishMains from "@/assets/dish-mains.jpg";
import dishSalads from "@/assets/dish-salads.jpg";
import dishBurgers from "@/assets/dish-burgers.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type MenuItem = { name: string; he?: string };
type Section = { id: string; title: string; he: string; note?: string; items: MenuItem[] };

const sections: Section[] = [
  {
    id: "mains",
    title: "Mains",
    he: "מנות עיקריות",
    items: [
      { name: "Classic Chicken Breast" },
      { name: "Crispy Schnitzel Plate" },
      { name: "Golden Chicken Bites" },
      { name: "Sweet & Sour Wings" },
      { name: "Spicy Chicken Poppers" },
      { name: "Flame-Grilled Chicken" },
      { name: "Crispy Chicken Bites" },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    he: "תוספות",
    items: [
      { name: "Steamed Rice" },
      { name: "Garden Rice" },
      { name: "Crispy Onion Rings" },
      { name: "Golden Potato Bites" },
      { name: "Seasoned Green Beans" },
      { name: "Vegetable Cigars" },
      { name: "Creamy Mashed Potatoes" },
      { name: "Roasted Potato Slices" },
      { name: "Leila Fries" },
      { name: "Savory Beef Rolls" },
      { name: "Italian Pasta" },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    he: "סלטים",
    items: [
      { name: "Grilled Chicken Salad" },
      { name: "Crispy Schnitzel Salad" },
      { name: "Garden Salad" },
      { name: "Leila House Salad" },
      { name: "Burger Bowl" },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    he: "כריכים",
    note: "Choose: Laffa · Challah Roll · Baguette",
    items: [
      { name: "Classic Chicken" },
      { name: "Crispy Schnitzel" },
      { name: "Grilled Chicken" },
      { name: "House Kebab" },
      { name: "Slow Pulled Beef" },
      { name: "Deli Pastrami" },
      { name: "Shawarma" },
      { name: "Classic Hot Dog" },
      { name: "Beef Frank" },
      { name: "Leila Mix" },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    he: "המבורגרים",
    items: [
      { name: "Leila Signature Burger" },
      { name: "Classic Beef Burger" },
      { name: "Crispy Chicken Burger" },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    he: "מרקים",
    items: [
      { name: "Homestyle Chicken Soup" },
      { name: "Soup of the Day" },
    ],
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-baseline gap-2 ${className}`}>
      <span className="font-display text-2xl tracking-tight">Leila Deli</span>
      <span className="font-hebrew text-sm text-muted-foreground" dir="rtl">לעילא דלי</span>
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#menu" className="hover:text-foreground">Menu</a>
          <a href="#visit" className="hover:text-foreground">Visit</a>
          <a href="#order" className="hover:text-foreground">Order</a>
        </nav>
        <a
          href="#order"
          className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition hover:bg-foreground/90 md:inline-flex"
        >
          Order Online
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:gap-12 md:py-28">
        <div className="flex flex-col justify-center">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Fast-Casual Deli
          </span>
          <h1 className="font-display text-5xl leading-[0.95] text-foreground md:text-7xl">
            Fresh.<br />Simple.<br />
            <span className="italic text-accent">Done Right.</span>
          </h1>
          <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
            Sandwiches, schnitzel, grilled chicken and burgers — made to order and built to travel well.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:bg-foreground/90">
              View Menu
            </a>
            <a href="#order" className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-foreground transition hover:border-foreground hover:bg-foreground hover:text-background">
              Order Online
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-2xl">
            <img
              src={heroFood}
              alt="Crispy schnitzel sandwich on fresh laffa with golden fries"
              width={1600}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-lg md:block">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Today</p>
            <p className="font-display text-lg">Flame-Grilled Chicken</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryStrip() {
  return (
    <div className="border-b border-border/60 bg-card/50">
      <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3 text-sm">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="whitespace-nowrap text-muted-foreground transition hover:text-foreground"
          >
            {s.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function MenuSection({ section, image }: { section: Section; image?: string }) {
  return (
    <section id={section.id} className="scroll-mt-24 border-b border-border/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <div className="md:sticky md:top-28">
              <p className="font-hebrew text-sm text-muted-foreground" dir="rtl">{section.he}</p>
              <h2 className="mt-1 font-display text-4xl text-foreground md:text-5xl">{section.title}</h2>
              {section.note && (
                <p className="mt-4 text-sm text-muted-foreground">{section.note}</p>
              )}
              {image && (
                <div className="mt-8 hidden aspect-square overflow-hidden rounded-2xl md:block">
                  <img src={image} alt={section.title} width={800} height={800} loading="lazy" className="h-full w-full object-cover" />
                </div>
              )}
            </div>
          </div>
          <ul className="divide-y divide-border">
            {section.items.map((item) => (
              <li key={item.name} className="group flex items-baseline justify-between gap-6 py-4">
                <span className="font-display text-xl text-foreground md:text-2xl">{item.name}</span>
                <span className="flex-1 translate-y-[-4px] border-b border-dashed border-border/70" />
                <span className="text-sm tabular-nums text-muted-foreground">—</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="border-b border-border/60 bg-foreground py-20 text-background">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-background/60">Hours</p>
          <ul className="mt-4 space-y-1 text-background/90">
            <li className="flex justify-between"><span>Sun – Thu</span><span>11:00 — 22:00</span></li>
            <li className="flex justify-between"><span>Friday</span><span>10:00 — 15:00</span></li>
            <li className="flex justify-between"><span>Saturday</span><span>Closed</span></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-background/60">Visit</p>
          <p className="mt-4 font-display text-2xl">123 Main Street</p>
          <p className="text-background/70">Tel Aviv, Israel</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-background/60">Contact</p>
          <p className="mt-4 text-background/90">+972 03 000 0000</p>
          <p className="text-background/70">hello@leiladeli.com</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row">
        <Logo />
        <p>© {new Date().getFullYear()} Leila Deli. All rights reserved.</p>
      </div>
    </footer>
  );
}

function StickyOrder() {
  return (
    <a
      id="order"
      href="#order"
      className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-xl shadow-foreground/20 transition hover:scale-[1.02] hover:bg-accent/90 md:bottom-8"
    >
      Order Now →
    </a>
  );
}

function Index() {
  const images: Record<string, string> = {
    mains: dishMains,
    salads: dishSalads,
    burgers: dishBurgers,
  };
  return (
    <div className="min-h-screen bg-background pb-24">
      <Nav />
      <main>
        <Hero />
        <div id="menu">
          <CategoryStrip />
          {sections.map((s) => (
            <MenuSection key={s.id} section={s} image={images[s.id]} />
          ))}
        </div>
        <Visit />
      </main>
      <Footer />
      <StickyOrder />
    </div>
  );
}
