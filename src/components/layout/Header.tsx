import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { BagIcon } from "@/components/icons";
import { authNav, primaryNav, sectionIds } from "@/data/navigation";
import { MobileNav } from "./MobileNav";

const linkStyles =
  "rounded-md text-body-m leading-[1.3] text-neutral-50 transition-opacity hover:opacity-75";

/** Transparent header that sits on top of the blue hero. */
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="flex h-[104px] items-center justify-between lg:relative">
        <Logo />

        <nav aria-label="Main" className="hidden lg:absolute lg:left-1/2 lg:block lg:-translate-x-1/2">
          <ul className="flex items-center gap-6">
            {primaryNav.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={index === 0 ? "page" : undefined}
                  className={linkStyles}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link href={authNav.signIn.href} className={linkStyles}>
            {authNav.signIn.label}
          </Link>
          <Link href={authNav.join.href} className={linkStyles}>
            {authNav.join.label}
          </Link>
          <Link
            href={`/#${sectionIds.courses}`}
            aria-label="Your bag — browse courses"
            className="ml-1 rounded-md p-1 text-neutral-50 transition-opacity hover:opacity-75"
          >
            <BagIcon className="h-5 w-4" />
          </Link>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
