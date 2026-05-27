import { createFileRoute, Link } from "@tanstack/react-router";
import { useApp } from "@/lib/app-context";

export const Route = createFileRoute("/terms")({ component: TermsPage });

function TermsPage() {
  const { lang } = useApp();
  const isHe = lang === "he";

  return (
    <div className="min-h-screen bg-background px-5 py-16" dir={isHe ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="text-sm text-leaf hover:underline">{isHe ? "← חזרה" : "← Back"}</Link>
        <h1 className="mt-4 font-display text-4xl text-foreground md:text-5xl">
          {isHe ? "תנאים והגבלות" : "Terms & Conditions"}
        </h1>

        <div className="prose prose-invert mt-8 space-y-6 text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl text-foreground">
              {isHe ? "מבצע 15% הנחה" : "15% Welcome Discount"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              {isHe
                ? "בעת פתיחת חשבון חדש בלעילא דלי תקבל קוד הנחה של 15% להזמנה הראשונה. ההנחה תופעל אוטומטית בקופה בהזמנה הראשונה דרך החשבון שלך. המבצע מוגבל למימוש חד-פעמי לכל לקוח חדש ואינו ניתן לשילוב עם מבצעים אחרים."
                : "Opening a new Leila Deli account entitles you to a 15% discount on your first order. The discount is applied automatically at checkout on your first signed-in order. Limited to one redemption per new customer and not combinable with other offers."}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              {isHe ? "הסכמה למיילים שיווקיים" : "Promotional Emails"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              {isHe
                ? "בעת פתיחת חשבון אתה מסכים לקבל מיילים שיווקיים מלעילא דלי הכוללים מבצעים, תפריטים חדשים והודעות. תוכל להסיר את עצמך בכל עת באמצעות הקישור 'הסר' שבתחתית כל מייל או דרך הגדרות החשבון שלך."
                : "By creating an account you agree to receive promotional emails from Leila Deli including offers, new menu items and announcements. You can unsubscribe at any time via the 'unsubscribe' link in any email or through your account settings."}
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground">
              {isHe ? "פרטיות" : "Privacy"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed">
              {isHe
                ? "אנו שומרים את פרטיך לצורך עיבוד הזמנות ושליחת תקשורת רלוונטית. הנתונים שלך לעולם לא יימכרו לצדדים שלישיים."
                : "We store your details to process orders and send you relevant communications. Your data will never be sold to third parties."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
