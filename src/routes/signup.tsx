import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useApp } from "@/lib/app-context";

export const Route = createFileRoute("/signup")({ component: SignupPage });

function SignupPage() {
  const { t, lang } = useApp();
  const nav = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) { setError(lang === "he" ? "יש לאשר את התנאים" : "Please accept terms to continue"); return; }
    setBusy(true); setError(null);
    const redirectUrl = `${window.location.origin}/`;
    const { error } = await supabase.auth.signUp({
      email, password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName,
          marketing_opt_in: true,
          accepted_terms: true,
        },
      },
    });
    setBusy(false);
    if (error) { setError(error.message); return; }
    nav({ to: "/" });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-5" dir={lang === "he" ? "rtl" : "ltr"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl"
      >
        <Link to="/" className="mb-6 inline-block font-display text-2xl text-foreground">
          Leila <span className="font-script text-leaf">Deli</span>
        </Link>
        <div className="rounded-xl bg-leaf/15 px-4 py-3">
          <p className="font-display text-lg text-leaf">{t("welcomeOffer")}</p>
          <p className="text-xs text-muted-foreground">{t("welcomeSub")}</p>
        </div>

        <h1 className="mt-6 font-display text-3xl text-foreground">{t("createAccount")}</h1>

        <form onSubmit={submit} className="mt-5 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">{t("fullName")}</label>
            <input
              required value={fullName} onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-leaf"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">{t("email")}</label>
            <input
              type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-leaf"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">{t("password")}</label>
            <input
              type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-leaf"
            />
          </div>

          <label className="flex cursor-pointer items-start gap-2 rounded-lg border border-border bg-background/50 p-3 text-xs text-muted-foreground">
            <input
              type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-leaf"
            />
            <span>
              {t("acceptTerms")}{" "}
              <Link to="/terms" className="font-semibold text-leaf underline">{t("termsLink")}</Link>
            </span>
          </label>

          {error && <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}

          <button
            disabled={busy}
            className="w-full rounded-full bg-leaf py-3 text-sm font-semibold text-primary-foreground transition hover:bg-leaf-deep disabled:opacity-60"
          >
            {busy ? t("loading") : t("createAccount")}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {t("alreadyHave")}{" "}
          <Link to="/login" className="font-semibold text-leaf hover:underline">{t("signIn")}</Link>
        </p>
      </motion.div>
    </div>
  );
}
