import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { useApp } from "@/lib/app-context";

export const Route = createFileRoute("/login")({ component: LoginPage });

function LoginPage() {
  const { t, lang } = useApp();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true); setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
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
        <h1 className="font-display text-3xl text-foreground">{t("signIn")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("welcomeTitle")}</p>

        <form onSubmit={submit} className="mt-6 space-y-4">
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
              type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-foreground outline-none focus:border-leaf"
            />
          </div>
          {error && <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">{error}</p>}
          <button
            disabled={busy}
            className="w-full rounded-full bg-leaf py-3 text-sm font-semibold text-primary-foreground transition hover:bg-leaf-deep disabled:opacity-60"
          >
            {busy ? t("loading") : t("signIn")}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          {t("dontHave")}{" "}
          <Link to="/signup" className="font-semibold text-leaf hover:underline">{t("signUp")}</Link>
        </p>
      </motion.div>
    </div>
  );
}
