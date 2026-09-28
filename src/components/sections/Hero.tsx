import { HeroDecor } from "@/components/hero/HeroDecor";
import { HeroSearch } from "@/components/hero/HeroSearch";
import { HeroVisual } from "@/components/hero/HeroVisual";
import { Container } from "@/components/ui/Container";
import { GridBackdrop } from "@/components/ui/GridBackdrop";

/** Blue landing hero; the transparent header is rendered on top of it. */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-primary-800 pt-[136px] sm:pt-[152px] lg:h-[1024px] lg:pt-[166px]"
    >
      <GridBackdrop />

      <Container className="relative z-10 text-center">
        <h1
          id="hero-heading"
          className="mx-auto max-w-[880px] text-[40px] leading-[1.15] text-balance text-white sm:text-[52px] md:text-[60px] lg:text-heading-l lg:leading-[1.2]"
        >
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-[560px] text-body-m text-neutral-100 sm:text-body-l lg:mt-8 lg:max-w-none">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>
        <HeroSearch className="mx-auto mt-8 max-w-[581px] text-left lg:mt-[62px]" />
      </Container>

      <HeroVisual className="mt-10 sm:mt-12 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0" />
      <HeroDecor />
    </section>
  );
}
