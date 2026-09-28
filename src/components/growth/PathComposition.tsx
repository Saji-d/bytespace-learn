import Image from "next/image";
import { LearningProgressCard } from "@/components/cards/FloatingCards";
import { CourseCard } from "@/components/course/CourseCard";
import { Decor } from "@/components/ui/Decor";
import { courses } from "@/data/courses";
import { cn } from "@/lib/cn";
import { ScaledStage } from "./ScaledStage";

/** Course card, student photo, progress card and ornament (design box 638 x 613). */
export function PathComposition({ className }: { className?: string }) {
  return (
    <ScaledStage
      width={638}
      height={613}
      className={cn(
        "[--stage-scale:0.53] min-[400px]:[--stage-scale:0.56] sm:[--stage-scale:0.9] md:[--stage-scale:1]",
        className,
      )}
    >
      {/* Illustrative copy of a card already listed in the course grid: keep it out of the tab order and outline. */}
      <div inert className="absolute top-0 left-0 w-[373px]">
        <CourseCard course={courses[0]} />
      </div>
      <Image
        src="/images/people/student-laptop.webp"
        alt="Smiling student with headphones holding a laptop"
        width={589}
        height={567}
        sizes="(min-width: 640px) 589px, 330px"
        className="absolute top-[45.5px] left-[49px] w-[589px] [mask-image:linear-gradient(to_bottom,#000_89%,transparent)]"
      />
      <LearningProgressCard className="absolute top-[213px] left-[345px]" />
      <Decor name="squiggleLimeTall" className="top-[91.5px] left-[451px] w-[124.5px]" />
    </ScaledStage>
  );
}
