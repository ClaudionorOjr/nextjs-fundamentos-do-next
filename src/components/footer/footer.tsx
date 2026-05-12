import Link from "next/link";
import { Logo } from "../logo";

const footerLinks = [
  { href: "/termos-de-uso", label: "Termos de uso" },
  { href: "/politica-de-privacidade", label: "Política de privacidade" },
  { href: "/feedback", label: "Feedback" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:flex-row gap-8 p-8">
          <Logo />

          <nav className="flex flex-col md:flex-row items-center text-muted-foreground gap-4 text-sm">
            {footerLinks.map(({ href, label }) => (
              <Link href={href} key={href} className="hover:text-primary">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
