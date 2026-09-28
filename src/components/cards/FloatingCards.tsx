import { AvatarStack } from "@/components/ui/AvatarStack";
import { StarIcon } from "@/components/icons";
import { happyStudents } from "@/data/avatars";
import { cn } from "@/lib/cn";

/*
 * Small glassy stat cards that float over the photography in the hero and
 * the "growth" section. They are decorative summaries, so each card is a
 * self-contained figure with an accessible description.
 */

const cardBase = "rounded-2xl bg-white p-4 text-neutral-950 backdrop-blur-[10px]";

export function LearningProgressCard({
  value = 55,
  className,
}: {
  value?: number;
  className?: string;
}) {
  return (
    <div className={cn(cardBase, "w-[232px]", className)}>
      <p className="text-body-s leading-[1.3]">Learning Progress</p>
      <p className="mt-1.5 font-heading text-[48px] leading-[1.2] font-semibold tracking-heading">
        {value}%
      </p>
      <div
        role="progressbar"
        aria-label="Learning progress"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="mt-2 h-2 w-full max-w-[200px] overflow-hidden rounded-full bg-track"
      >
        <div className="h-full rounded-full bg-lime-400" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function HappyStudentsCard({
  className,
  tone = "white",
}: {
  className?: string;
  tone?: "white" | "lime";
}) {
  return (
    <div
      className={cn(
        cardBase,
        "w-[258px]",
        tone === "lime" && "bg-lime-400",
        className,
      )}
    >
      <p className="text-body-m leading-[1.3]">Happy Students</p>
      <p className="mt-0.5 flex items-center gap-1 text-body-xs leading-[1.3]">
        <span>
          4.5 <span className="text-neutral-400">(240)</span>
          <span className="sr-only"> average rating from 240 reviews</span>
        </span>
        <StarIcon
          className={cn("size-[13px]", tone === "lime" ? "text-primary-800" : "text-lime-400")}
        />
      </p>
      <AvatarStack
        size="md"
        avatars={happyStudents}
        extra="2K+"
        label="Over 2,000 happy students"
        className="mt-3"
        extraClassName={tone === "lime" ? "bg-neutral-950 text-white" : undefined}
      />
    </div>
  );
}
