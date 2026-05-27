import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useApp } from "@/lib/app-context";
import logo from "@/assets/logo.jpeg";
import heroFood from "@/assets/hero-food.jpg";

// Item images
import imgClassicChickenBreast from "@/assets/items/classic-chicken-breast.jpg";
import imgCrispySchnitzelPlate from "@/assets/items/crispy-schnitzel-plate.jpg";
import imgGoldenChickenBites from "@/assets/items/golden-chicken-bites.jpg";
import imgSweetSourWings from "@/assets/items/sweet-sour-wings.jpg";
import imgSpicyChickenPoppers from "@/assets/items/spicy-chicken-poppers.jpg";
import imgFlameGrilledChicken from "@/assets/items/flame-grilled-chicken.jpg";
import imgCrispyChickenBites from "@/assets/items/crispy-chicken-bites.jpg";
import imgSteamedRice from "@/assets/items/steamed-rice.jpg";
import imgGardenRice from "@/assets/items/garden-rice.jpg";
import imgCrispyOnionRings from "@/assets/items/crispy-onion-rings.jpg";
import imgGoldenPotatoBites from "@/assets/items/golden-potato-bites.jpg";
import imgSeasonedGreenBeans from "@/assets/items/seasoned-green-beans.jpg";
import imgVegetableCigars from "@/assets/items/vegetable-cigars.jpg";
import imgCreamyMashedPotatoes from "@/assets/items/creamy-mashed-potatoes.jpg";
import imgRoastedPotatoSlices from "@/assets/items/roasted-potato-slices.jpg";
import imgLeilaFries from "@/assets/items/leila-fries.jpg";
import imgSavoryBeefRolls from "@/assets/items/savory-beef-rolls.jpg";
import imgItalianPasta from "@/assets/items/italian-pasta.jpg";
import imgGrilledChickenSalad from "@/assets/items/grilled-chicken-salad.jpg";
import imgCrispySchnitzelSalad from "@/assets/items/crispy-schnitzel-salad.jpg";
import imgGardenSalad from "@/assets/items/garden-salad.jpg";
import imgLeilaHouseSalad from "@/assets/items/leila-house-salad.jpg";
import imgBurgerBowl from "@/assets/items/burger-bowl.jpg";
import imgClassicChickenSandwich from "@/assets/items/classic-chicken-sandwich.jpg";
import imgCrispySchnitzelSandwich from "@/assets/items/crispy-schnitzel-sandwich.jpg";
import imgGrilledChickenSandwich from "@/assets/items/grilled-chicken-sandwich.jpg";
import imgHouseKebab from "@/assets/items/house-kebab.jpg";
import imgSlowPulledBeef from "@/assets/items/slow-pulled-beef.jpg";
import imgDeliPastrami from "@/assets/items/deli-pastrami.jpg";
import imgShawarma from "@/assets/items/shawarma.jpg";
import imgClassicHotDog from "@/assets/items/classic-hot-dog.jpg";
import imgBeefFrank from "@/assets/items/beef-frank.jpg";
import imgLeilaMix from "@/assets/items/leila-mix.jpg";
import imgLeilaSignatureBurger from "@/assets/items/leila-signature-burger.jpg";
import imgClassicBeefBurger from "@/assets/items/classic-beef-burger.jpg";
import imgCrispyChickenBurger from "@/assets/items/crispy-chicken-burger.jpg";
import imgHomestyleChickenSoup from "@/assets/items/homestyle-chicken-soup.jpg";
import imgSoupOfTheDay from "@/assets/items/soup-of-the-day.jpg";

export const Route = createFileRoute("/")({ component: Index });

type MenuItem = { id: string; name: string; price: number; img: string };
type Section = { id: string; title: string; he: string; note?: string; items: MenuItem[] };

const sections: Section[] = [
  {
    id: "mains",
    title: "Mains",
    he: "מנות עיקריות",
    items: [
      { id: "classic-chicken-breast", name: "Classic Chicken Breast", price: 48, img: imgClassicChickenBreast },
      { id: "crispy-schnitzel-plate", name: "Crispy Schnitzel Plate", price: 52, img: imgCrispySchnitzelPlate },
      { id: "golden-chicken-bites", name: "Golden Chicken Bites", price: 42, img: imgGoldenChickenBites },
      { id: "sweet-sour-wings", name: "Sweet & Sour Wings", price: 46, img: imgSweetSourWings },
      { id: "spicy-chicken-poppers", name: "Spicy Chicken Poppers", price: 44, img: imgSpicyChickenPoppers },
      { id: "flame-grilled-chicken", name: "Flame-Grilled Chicken", price: 54, img: imgFlameGrilledChicken },
      { id: "crispy-chicken-bites", name: "Crispy Chicken Bites", price: 42, img: imgCrispyChickenBites },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    he: "תוספות",
    items: [
      { id: "steamed-rice", name: "Steamed Rice", price: 14, img: imgSteamedRice },
      { id: "garden-rice", name: "Garden Rice", price: 16, img: imgGardenRice },
      { id: "crispy-onion-rings", name: "Crispy Onion Rings", price: 18, img: imgCrispyOnionRings },
      { id: "golden-potato-bites", name: "Golden Potato Bites", price: 18, img: imgGoldenPotatoBites },
      { id: "seasoned-green-beans", name: "Seasoned Green Beans", price: 18, img: imgSeasonedGreenBeans },
      { id: "vegetable-cigars", name: "Vegetable Cigars", price: 20, img: imgVegetableCigars },
      { id: "creamy-mashed-potatoes", name: "Creamy Mashed Potatoes", price: 16, img: imgCreamyMashedPotatoes },
      { id: "roasted-potato-slices", name: "Roasted Potato Slices", price: 18, img: imgRoastedPotatoSlices },
      { id: "leila-fries", name: "Leila Fries", price: 16, img: imgLeilaFries },
      { id: "savory-beef-rolls", name: "Savory Beef Rolls", price: 24, img: imgSavoryBeefRolls },
      { id: "italian-pasta", name: "Italian Pasta", price: 22, img: imgItalianPasta },
    ],
  },
  {
    id: "salads",
    title: "Salads",
    he: "סלטים",
    items: [
      { id: "grilled-chicken-salad", name: "Grilled Chicken Salad", price: 48, img: imgGrilledChickenSalad },
      { id: "crispy-schnitzel-salad", name: "Crispy Schnitzel Salad", price: 48, img: imgCrispySchnitzelSalad },
      { id: "garden-salad", name: "Garden Salad", price: 32, img: imgGardenSalad },
      { id: "leila-house-salad", name: "Leila House Salad", price: 38, img: imgLeilaHouseSalad },
      { id: "burger-bowl", name: "Burger Bowl", price: 48, img: imgBurgerBowl },
    ],
  },
  {
    id: "sandwiches",
    title: "Sandwiches",
    he: "כריכים",
    note: "Choose: Laffa · Challah Roll · Baguette",
    items: [
      { id: "sand-classic-chicken", name: "Classic Chicken", price: 42, img: imgClassicChickenSandwich },
      { id: "sand-crispy-schnitzel", name: "Crispy Schnitzel", price: 44, img: imgCrispySchnitzelSandwich },
      { id: "sand-grilled-chicken", name: "Grilled Chicken", price: 46, img: imgGrilledChickenSandwich },
      { id: "sand-house-kebab", name: "House Kebab", price: 48, img: imgHouseKebab },
      { id: "sand-slow-pulled-beef", name: "Slow Pulled Beef", price: 54, img: imgSlowPulledBeef },
      { id: "sand-deli-pastrami", name: "Deli Pastrami", price: 52, img: imgDeliPastrami },
      { id: "sand-shawarma", name: "Shawarma", price: 48, img: imgShawarma },
      { id: "sand-classic-hot-dog", name: "Classic Hot Dog", price: 32, img: imgClassicHotDog },
      { id: "sand-beef-frank", name: "Beef Frank", price: 38, img: imgBeefFrank },
      { id: "sand-leila-mix", name: "Leila Mix", price: 58, img: imgLeilaMix },
    ],
  },
  {
    id: "burgers",
    title: "Burgers",
    he: "המבורגרים",
    items: [
      { id: "leila-signature-burger", name: "Leila Signature Burger", price: 62, img: imgLeilaSignatureBurger },
      { id: "classic-beef-burger", name: "Classic Beef Burger", price: 52, img: imgClassicBeefBurger },
      { id: "crispy-chicken-burger", name: "Crispy Chicken Burger", price: 48, img: imgCrispyChickenBurger },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    he: "מרקים",
    items: [
      { id: "homestyle-chicken-soup", name: "Homestyle Chicken Soup", price: 28, img: imgHomestyleChickenSoup },
      { id: "soup-of-the-day", name: "Soup of the Day", price: 26, img: imgSoupOfTheDay },
    ],
  },
];

type CartLine = { item: MenuItem; qty: number };
type OrderType = "delivery" | "pickup" | "eat-in";

// ──────────────────────────────────────────────────────────────

function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const s = size === "sm" ? "h-9 w-9" : "h-11 w-11";
  return (
    <a href="#top" className="flex items-center gap-3">
      <img src={logo} alt="Leila Deli" className={`${s} rounded-full object-cover ring-1 ring-border`} width={64} height={64} />
      <div className="leading-tight">
        <div className="font-display text-xl tracking-tight text-foreground">
          Leila <span className="font-script text-leaf">Deli</span>
        </div>
        <div className="font-hebrew text-[11px] text-muted-foreground" dir="rtl">לעילא דלי · טעימה עולמית</div>
      </div>
    </a>
  );
}

function Nav({ cartCount, onOpenOrder }: { cartCount: number; onOpenOrder: () => void }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Logo />
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#menu" className="transition hover:text-foreground">Menu</a>
          <a href="#visit" className="transition hover:text-foreground">Visit</a>
        </nav>
        <button
          onClick={onOpenOrder}
          className="relative inline-flex items-center gap-2 rounded-full bg-leaf px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-leaf-deep"
        >
          Order
          {cartCount > 0 && (
            <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-background px-1.5 text-xs font-semibold text-leaf">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

function Hero({ onOrder }: { onOrder: () => void }) {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const textY = useTransform(scrollY, [0, 600], [0, -60]);

  const letters = "Done Right.".split("");

  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(60% 60% at 70% 30%, oklch(0.58 0.11 142 / 0.25), transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:gap-16 md:py-28">
        <motion.div className="flex flex-col justify-center" style={{ y: textY }}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-leaf"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            Fast-Casual Deli · Jerusalem
          </motion.span>
          <h1 className="font-display text-5xl leading-[0.95] text-foreground md:text-7xl">
            {["Fresh.", "Simple."].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
            <span className="block font-script text-6xl text-leaf md:text-8xl">
              {letters.map((ch, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30, rotate: -8 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.05, type: "spring" }}
                  className="inline-block"
                >
                  {ch === " " ? "\u00A0" : ch}
                </motion.span>
              ))}
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-6 max-w-md text-base text-muted-foreground md:text-lg"
          >
            Sandwiches, schnitzel, grilled chicken and burgers — made to order. Delivery, pickup or dine in.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#menu"
              className="rounded-full bg-cream px-6 py-3 text-sm font-semibold text-background"
            >
              View Menu
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOrder}
              className="rounded-full border border-leaf px-6 py-3 text-sm font-semibold text-leaf transition hover:bg-leaf hover:text-primary-foreground"
            >
              Order Online
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            style={{ y: heroY, scale: heroScale }}
            className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-2xl shadow-black/60 ring-1 ring-border"
          >
            <img
              src={heroFood}
              alt="Flame-grilled chicken on slate"
              width={1600}
              height={1280}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            whileHover={{ y: -4, rotate: -2 }}
            className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-lg md:block"
          >
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Today</p>
            <p className="font-display text-lg text-foreground">Flame-Grilled Chicken</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CategoryStrip() {
  return (
    <div className="sticky top-[68px] z-30 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl gap-6 overflow-x-auto px-5 py-3 text-sm">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="whitespace-nowrap text-muted-foreground transition hover:text-leaf"
          >
            {s.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function MenuCard({ item, onAdd, index }: { item: MenuItem; onAdd: () => void; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:border-leaf/60 hover:shadow-xl hover:shadow-black/50"
    >
      <div className="relative aspect-square overflow-hidden bg-muted">
        <motion.img
          src={item.img}
          alt={item.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.12, rotate: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg leading-tight text-foreground">{item.name}</h3>
          <span className="shrink-0 font-display text-base tabular-nums text-leaf">₪{item.price}</span>
        </div>
        <motion.button
          onClick={onAdd}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background py-2 text-xs font-semibold uppercase tracking-wider text-foreground transition hover:border-leaf hover:bg-leaf hover:text-primary-foreground"
        >
          + Add
        </motion.button>
      </div>
    </motion.article>
  );
}

function MenuSection({ section, onAdd }: { section: Section; onAdd: (item: MenuItem) => void }) {
  return (
    <section id={section.id} className="scroll-mt-32 border-b border-border/60 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="font-hebrew text-sm text-leaf" dir="rtl">{section.he}</p>
          <h2 className="mt-1 font-display text-4xl text-foreground md:text-5xl">{section.title}</h2>
          <div className="mt-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground leaf-divider">
            {section.items.length} items
          </div>
          {section.note && <p className="mt-4 text-sm text-muted-foreground">{section.note}</p>}
        </motion.header>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {section.items.map((item, i) => (
            <MenuCard key={item.id} item={item} onAdd={() => onAdd(item)} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  const hours = [
    { day: "Sunday", time: "5:30 am – 12:00 am" },
    { day: "Monday", time: "5:30 am – 12:00 am" },
    { day: "Tuesday", time: "5:30 am – 12:00 am" },
    { day: "Wednesday", time: "5:30 am – 12:00 am" },
    { day: "Thursday", time: "11:30 am – 4:00 am" },
    { day: "Friday", time: "Closed" },
    { day: "Saturday", time: "Closed" },
  ];
  const todayIdx = new Date().getDay();

  return (
    <section id="visit" className="relative overflow-hidden border-b border-border/60 bg-card py-20">
      <motion.div
        className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-leaf/10 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-hebrew text-sm text-leaf" dir="rtl">בקרו אותנו</p>
          <h2 className="mt-1 font-display text-4xl text-foreground md:text-5xl">Visit Leila Deli</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/40"
          >
            <iframe
              title="Leila Deli location"
              src="https://www.google.com/maps?q=Eli+ha-Cohen+St+15,+Jerusalem&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-leaf">Address</p>
              <p className="mt-3 font-display text-2xl text-foreground">Eli ha-Cohen St 15</p>
              <p className="text-muted-foreground">Jerusalem, Israel</p>
              <motion.a
                whileHover={{ x: 4 }}
                href="https://www.google.com/maps/dir/?api=1&destination=Eli+ha-Cohen+St+15,+Jerusalem"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-leaf"
              >
                Get directions →
              </motion.a>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-leaf">Hours</p>
              <ul className="mt-3 divide-y divide-border/60 text-sm">
                {hours.map((h, i) => {
                  const isToday = i === todayIdx;
                  const closed = h.time === "Closed";
                  return (
                    <motion.li
                      key={h.day}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className={`flex items-center justify-between py-2 ${isToday ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      <span className="flex items-center gap-2">
                        {isToday && (
                          <motion.span
                            className="h-1.5 w-1.5 rounded-full bg-leaf"
                            animate={{ scale: [1, 1.8, 1], opacity: [1, 0.4, 1] }}
                            transition={{ duration: 1.6, repeat: Infinity }}
                          />
                        )}
                        {h.day}
                        {isToday && <span className="text-[10px] uppercase tracking-wider text-leaf">Today</span>}
                      </span>
                      <span className={`tabular-nums ${closed ? "text-destructive/80" : ""}`}>{h.time}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-leaf">Contact</p>
              <p className="mt-3 text-foreground/90">hello@leiladeli.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row">
        <Logo size="sm" />
        <p>© {new Date().getFullYear()} Leila Deli · לעילא דלי</p>
      </div>
    </footer>
  );
}

// ───────────────────────────── Order Drawer ─────────────────────────────

function OrderDrawer({
  open, onClose, cart, setCart, orderType, setOrderType,
}: {
  open: boolean;
  onClose: () => void;
  cart: CartLine[];
  setCart: React.Dispatch<React.SetStateAction<CartLine[]>>;
  orderType: OrderType;
  setOrderType: (t: OrderType) => void;
}) {
  const total = cart.reduce((s, l) => s + l.item.price * l.qty, 0);
  const deliveryFee = orderType === "delivery" && cart.length ? 15 : 0;

  const changeQty = (id: string, d: number) =>
    setCart((prev) =>
      prev
        .map((l) => (l.item.id === id ? { ...l, qty: l.qty + d } : l))
        .filter((l) => l.qty > 0),
    );

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-background shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h3 className="font-display text-2xl text-foreground">Your Order</h3>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-2 text-muted-foreground hover:bg-card hover:text-foreground">✕</button>
        </div>

        {/* Order type tabs */}
        <div className="border-b border-border px-5 pb-4 pt-4">
          <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">How would you like it?</p>
          <div className="grid grid-cols-3 gap-1 rounded-full border border-border bg-card p-1 text-xs font-semibold">
            {([
              { id: "delivery", label: "Delivery" },
              { id: "pickup", label: "Pickup" },
              { id: "eat-in", label: "Eat-In" },
            ] as { id: OrderType; label: string }[]).map((t) => (
              <button
                key={t.id}
                onClick={() => setOrderType(t.id)}
                className={`rounded-full py-2 transition ${
                  orderType === t.id
                    ? "bg-leaf text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            {orderType === "delivery" && "Delivered to your door in ~35 min."}
            {orderType === "pickup" && "Ready for pickup in ~15 min."}
            {orderType === "eat-in" && "We'll have a table ready when you arrive."}
          </p>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
              <p className="font-display text-xl text-foreground">Your cart is empty</p>
              <p className="mt-2 text-sm">Add items from the menu to get started.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {cart.map((line) => (
                <li key={line.item.id} className="flex gap-3">
                  <img src={line.item.img} alt="" width={64} height={64} className="h-16 w-16 shrink-0 rounded-lg object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <span className="font-display text-base text-foreground">{line.item.name}</span>
                      <span className="font-display tabular-nums text-leaf">₪{line.item.price * line.qty}</span>
                    </div>
                    <div className="mt-auto flex items-center gap-1.5 pt-2">
                      <button onClick={() => changeQty(line.item.id, -1)} className="h-7 w-7 rounded-full border border-border text-foreground hover:border-leaf hover:text-leaf" aria-label="Decrease">–</button>
                      <span className="w-6 text-center text-sm tabular-nums">{line.qty}</span>
                      <button onClick={() => changeQty(line.item.id, 1)} className="h-7 w-7 rounded-full border border-border text-foreground hover:border-leaf hover:text-leaf" aria-label="Increase">+</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Totals + CTA */}
        <div className="border-t border-border px-5 py-5">
          <dl className="space-y-1 text-sm">
            <div className="flex justify-between text-muted-foreground">
              <dt>Subtotal</dt>
              <dd className="tabular-nums">₪{total}</dd>
            </div>
            {orderType === "delivery" && (
              <div className="flex justify-between text-muted-foreground">
                <dt>Delivery</dt>
                <dd className="tabular-nums">₪{deliveryFee}</dd>
              </div>
            )}
            <div className="flex justify-between pt-2 font-display text-lg text-foreground">
              <dt>Total</dt>
              <dd className="tabular-nums">₪{total + deliveryFee}</dd>
            </div>
          </dl>
          <button
            disabled={cart.length === 0}
            className="mt-4 w-full rounded-full bg-leaf py-3 text-sm font-semibold text-primary-foreground transition hover:bg-leaf-deep disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground"
          >
            {orderType === "delivery" && "Checkout · Delivery"}
            {orderType === "pickup" && "Checkout · Pickup"}
            {orderType === "eat-in" && "Reserve Table"}
          </button>
        </div>
      </aside>
    </>
  );
}

// ──────────────────────────────────────────────────────────────

function Index() {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addItem = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((l) => l.item.id === item.id);
      if (existing) return prev.map((l) => (l.item.id === item.id ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { item, qty: 1 }];
    });
    setDrawerOpen(true);
  };

  const cartCount = useMemo(() => cart.reduce((s, l) => s + l.qty, 0), [cart]);

  return (
    <div className="min-h-screen bg-background pb-24">
      <Nav cartCount={cartCount} onOpenOrder={() => setDrawerOpen(true)} />
      <main>
        <Hero onOrder={() => setDrawerOpen(true)} />
        <div id="menu">
          <CategoryStrip />
          {sections.map((s) => (
            <MenuSection key={s.id} section={s} onAdd={addItem} />
          ))}
        </div>
        <Visit />
      </main>
      <Footer />

      {/* Sticky floating order button (mobile-first) */}
      <motion.button
        onClick={() => setDrawerOpen(true)}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-5 left-1/2 z-40 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-leaf px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl shadow-leaf/30 md:bottom-8"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={cartCount}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {cartCount > 0 ? `View Order · ${cartCount}` : "Order Now"} →
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <OrderDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        cart={cart}
        setCart={setCart}
        orderType={orderType}
        setOrderType={setOrderType}
      />
    </div>
  );
}
