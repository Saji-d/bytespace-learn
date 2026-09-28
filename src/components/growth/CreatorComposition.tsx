import Image from "next/image";
import { HappyStudentsCard } from "@/components/cards/FloatingCards";
import { Decor } from "@/components/ui/Decor";
import { cn } from "@/lib/cn";
import { RevenueCard } from "./RevenueCard";
import { ScaledStage } from "./ScaledStage";

/** Creator photo with revenue tiles and the happy-students card (design box 541 x 624). */
export function CreatorComposition({ className }: { className?: string }) {
  return (
    <ScaledStage
      width={541}
      height={624}
      className={cn("[--stage-scale:0.62] min-[400px]:[--stage-scale:0.66] sm:[--stage-scale:1]", className)}
    >
      <RevenueCard
        label="Total Revenue"
        period="July 1-28"
        amount="$120.29"
        change="+12$"
        progress={56}
        className="absolute top-3 left-0 w-[232px]"
      />
      <RevenueCard
        label="Year to Date"
        period="2023"
        amount="$1,200.38"
        change="+12$"
        className="absolute top-[162px] left-0 w-[134px]"
      />
      <Image
        src="/images/people/creator-tablet.webp"
        alt="Course creator wearing a headset and holding a tablet"
        width={477}
        height={624}
        sizes="(min-width: 640px) 477px, 320px"
        className="absolute top-0 left-[46px] w-[477px] [mask-image:linear-gradient(to_bottom,#000_90%,transparent)]"
      />
      <HappyStudentsCard className="absolute top-[381px] left-[283px]" />
      <Decor name="squiggleLimeMd" className="top-[118px] left-[339px] w-[141px]" />
    </ScaledStage>
  );
}
