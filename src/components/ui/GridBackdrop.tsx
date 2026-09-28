import { cn } from "@/lib/cn";

/**
 * The faint 120px square grid drawn over the blue hero / CTA / auth panels.
 * Lines are 2px white at 12% opacity, aligned to the page centre so the grid
 * lines up with the 1440px design at every width.
 */
export function GridBackdrop({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.12]",
        "bg-[linear-gradient(to_right,#fff_2px,transparent_2px),linear-gradient(to_bottom,#fff_2px,transparent_2px)]",
        "bg-[size:120px_120px] bg-[position:calc(50%-720px)_-2px]",
        className,
      )}
    />
  );
}
