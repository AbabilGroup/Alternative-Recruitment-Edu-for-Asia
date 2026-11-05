import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    router.events.on("hashChangeStart", close);
    return () => {
      router.events.off("routeChangeStart", close);
      router.events.off("hashChangeStart", close);
    };
  }, [router.events]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="site-container flex min-h-(--header-height) items-center justify-between gap-5">
        <Logo />
        <button
          type="button"
          className="block cursor-pointer p-2 text-primary nav:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
        <nav
          id="site-nav"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col border-b border-border bg-white px-5 pb-6 pt-3 shadow-card nav:static nav:flex nav:flex-row nav:items-center nav:gap-[26px] nav:border-0 nav:bg-transparent nav:p-0 nav:shadow-none`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b border-border py-[13px] text-[1.05rem] font-semibold text-ink hover:text-primary-light nav:border-0 nav:py-0 nav:text-[0.96rem]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="mt-[18px] whitespace-nowrap rounded-full bg-primary px-[18px] py-[11px] text-center text-[0.93rem] font-bold text-on-dark transition-colors hover:bg-primary-light nav:mt-0"
          >
            Book a free consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
