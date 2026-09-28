import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Decor } from "@/components/ui/Decor";
import { GridBackdrop } from "@/components/ui/GridBackdrop";
import { authNav, sectionIds } from "@/data/navigation";

/** 3D ornaments placed on a centred 1440px stage (design coordinates). */
function CtaOrnaments() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1440px] -translate-x-1/2 md:block"
    >
      <Decor name="squiggleLimeLg" className="top-[-98px] left-[-58px] w-[253.5px]" />
      <Decor name="squiggleWhiteSm" className="top-[33.5px] left-[210px] w-[116.5px]" />
      <Decor name="coneWhite" className="top-[240.6px] left-[-14.5px] w-[129.5px]" />
      <Decor name="torusLime" className="top-[358.3px] left-[68.5px] w-[240px]" />
      <Decor name="pyramidLime" className="top-[20.6px] left-[1104.4px] w-[126.5px]" />
      <Decor name="cylinderWhite" className="top-[40.7px] left-[1270.4px] w-[274px]" />
      <Decor name="squiggleLimeTall" className="top-[326.5px] left-[1178.5px] w-[192px]" />
    </div>
  );
}

export function CreatorCta() {
  return (
    <section
      id={sectionIds.creators}
      aria-labelledby="creator-cta-heading"
      className="relative overflow-hidden bg-primary-800 py-16 text-neutral-50 sm:py-20 xl:pt-[85px] xl:pb-[85px]"
    >
      <GridBackdrop />
      <CtaOrnaments />

      <Container className="relative flex flex-col items-center text-center">
        <h2
          id="creator-cta-heading"
          className="max-w-[600px] text-[2rem]/[1.2] sm:text-[2.5rem]/[1.2] lg:text-heading-m"
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-6 max-w-[964px] text-body-m sm:mt-10 sm:text-body-l">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <ButtonLink href={authNav.join.href} className="mt-8 sm:mt-10">
          Join as Creator
        </ButtonLink>
      </Container>
    </section>
  );
}
