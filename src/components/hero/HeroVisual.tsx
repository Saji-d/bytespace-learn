import type { CSSProperties } from "react";
import Image from "next/image";
import {
  CategoryStatCard,
  HappyStudentsCard,
  LearningProgressCard,
} from "@/components/cards/FloatingCards";
import { cn } from "@/lib/cn";

/*
 * The photo cluster at the bottom of the hero: lime ring, student photo and
 * floating stat cards. Every piece is placed with its Figma coordinates
 * relative to the page's centre axis (x = 720) and the cluster top (y = 545),
 * multiplied by `--s` so the whole composition scales down on smaller screens.
 */

const AXIS_X = 720;
const TOP_Y = 545;

/** Absolute position for a design point, scaled by `--s`. */
function placeAt(x: number, y: number) {
  return {
    "--x": `${x - AXIS_X}px`,
    "--y": `${y - TOP_Y}px`,
  } as CSSProperties;
}

const placed = "absolute left-[calc(50%_+_var(--x)_*_var(--s))] top-[calc(var(--y)_*_var(--s))]";

/** Floating cards keep a readable size: they scale less than the photo (`--cs`). */
const floating = cn(placed, "z-10 origin-top-left scale-(--cs)");

export function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative h-[calc(479px_*_var(--s))]",
        "[--cs:0.72] [--s:0.62] sm:[--cs:0.82] sm:[--s:0.78] md:[--cs:0.92] md:[--s:0.9] lg:[--cs:1] lg:[--s:1]",
        className,
      )}
    >
      {/* Lime annulus: circle r=414.5 with a 320px stroke, centred at (719.5, 1156.5). */}
      <svg
        viewBox="0 0 1149 1149"
        aria-hidden="true"
        focusable="false"
        style={placeAt(145, 582)}
        className={cn(placed, "w-[calc(1149px_*_var(--s))] max-w-none")}
      >
        <circle cx="574.5" cy="574.5" r="414.5" fill="none" stroke="#CBFC01" strokeWidth="320" />
      </svg>

      <Image
        src="/images/people/student-laptop.webp"
        alt="Smiling student with headphones holding a laptop"
        width={589}
        height={568}
        priority
        sizes="(min-width: 1024px) 589px, (min-width: 768px) 530px, (min-width: 640px) 460px, 366px"
        style={placeAt(480, 545.5)}
        className={cn(placed, "h-auto w-[calc(589px_*_var(--s))] max-w-none")}
      />

      <div style={placeAt(404, 639)} className={cn(floating, "hidden sm:block")}>
        <CategoryStatCard />
      </div>
      <div
        style={placeAt(842, 651)}
        className={cn(
          floating,
          "max-sm:top-[96px] max-sm:right-4 max-sm:left-auto max-sm:origin-top-right",
        )}
      >
        <LearningProgressCard />
      </div>
      <div style={placeAt(328, 837)} className={cn(floating, "max-sm:top-[200px] max-sm:left-4")}>
        <HappyStudentsCard />
      </div>
    </div>
  );
}
