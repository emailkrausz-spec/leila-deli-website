import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

// ─────────── Language ───────────
export type Lang = "en" | "he";

type Dict = Record<string, { en: string; he: string }>;

export const T: Dict = {
  menu: { en: "Menu", he: "תפריט" },
  visit: { en: "Visit", he: "ביקור" },
  order: { en: "Order", he: "הזמן" },
  orderNow: { en: "Order Now", he: "הזמן עכשיו" },
  viewOrder: { en: "View Order", he: "צפה בהזמנה" },
  signIn: { en: "Sign In", he: "התחבר" },
  signUp: { en: "Sign Up", he: "הרשמה" },
  signOut: { en: "Sign Out", he: "התנתק" },
  account: { en: "Account", he: "חשבון" },
  heroBadge: { en: "Fast-Casual Deli · Jerusalem", he: "דלי מהיר · ירושלים" },
  heroFresh: { en: "Fresh.", he: "טרי." },
  heroSimple: { en: "Simple.", he: "פשוט." },
  heroDoneRight: { en: "Done Right.", he: "נכון." },
  heroSub: {
    en: "Sandwiches, schnitzel, grilled chicken and burgers — made to order. Delivery, pickup or dine in.",
    he: "כריכים, שניצל, עוף בגריל והמבורגרים — מוכן בהזמנה. משלוח, איסוף או אכילה במקום.",
  },
  viewMenu: { en: "View Menu", he: "צפה בתפריט" },
  orderOnline: { en: "Order Online", he: "הזמן אונליין" },
  yourOrder: { en: "Your Order", he: "ההזמנה שלך" },
  howWouldYou: { en: "How would you like it?", he: "איך תרצה לקבל?" },
  delivery: { en: "Delivery", he: "משלוח" },
  pickup: { en: "Pickup", he: "איסוף" },
  eatIn: { en: "Eat-In", he: "במקום" },
  emptyCart: { en: "Your cart is empty", he: "העגלה ריקה" },
  addFromMenu: { en: "Add items from the menu to get started.", he: "הוסף פריטים מהתפריט." },
  subtotal: { en: "Subtotal", he: "סכום ביניים" },
  total: { en: "Total", he: "סה״כ" },
  checkout: { en: "Checkout", he: "תשלום" },
  reserveTable: { en: "Reserve Table", he: "הזמן שולחן" },
  add: { en: "+ Add", he: "+ הוסף" },
  items: { en: "items", he: "פריטים" },
  address: { en: "Address", he: "כתובת" },
  hours: { en: "Hours", he: "שעות" },
  contact: { en: "Contact", he: "צור קשר" },
  getDirections: { en: "Get directions →", he: "← הוראות הגעה" },
  visitTitle: { en: "Visit Leila Deli", he: "בקרו אותנו" },
  welcomeTitle: { en: "Welcome to Leila Deli", he: "ברוכים הבאים ללעילא דלי" },
  welcomeOffer: { en: "Get 15% off your first order", he: "קבל 15% הנחה על ההזמנה הראשונה" },
  welcomeSub: {
    en: "Create a free account and we'll apply 15% off automatically at checkout.",
    he: "פתח חשבון חינם ואנחנו ניתן 15% הנחה אוטומטית בקופה.",
  },
  createAccount: { en: "Create Account", he: "פתח חשבון" },
  noThanks: { en: "No thanks", he: "לא תודה" },
  email: { en: "Email", he: "אימייל" },
  password: { en: "Password", he: "סיסמה" },
  fullName: { en: "Full Name", he: "שם מלא" },
  alreadyHave: { en: "Already have an account?", he: "כבר יש לך חשבון?" },
  dontHave: { en: "Don't have an account?", he: "אין לך חשבון?" },
  acceptTerms: {
    en: "I accept the Terms & Conditions and agree to receive promotional emails from Leila Deli.",
    he: "אני מקבל את התנאים ומסכים לקבל מיילים שיווקיים מלעילא דלי.",
  },
  termsLink: { en: "Read terms", he: "קרא תנאים" },
  language: { en: "EN", he: "עב" },
  loading: { en: "Loading…", he: "טוען…" },
  hi: { en: "Hi", he: "שלום" },
};

export function t(key: keyof typeof T, lang: Lang): string {
  return T[key]?.[lang] ?? key;
}

// ─────────── Combined Context ───────────
type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: keyof typeof T) => string;
  session: Session | null;
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
};

const AppCtx = createContext<Ctx | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return (localStorage.getItem("leila-lang") as Lang) || "en";
  });
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.lang = lang === "he" ? "he" : "en";
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    localStorage.setItem("leila-lang", lang);
  }, [lang]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  const value: Ctx = {
    lang,
    setLang: setLangState,
    t: (k) => t(k, lang),
    session,
    user: session?.user ?? null,
    loading,
    signOut: async () => { await supabase.auth.signOut(); },
  };

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
}

export function useApp() {
  const ctx = useContext(AppCtx);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
