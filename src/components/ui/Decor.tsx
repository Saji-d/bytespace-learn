import Image from "next/image";
import { cn } from "@/lib/cn";

/** 3D ornaments rendered from the Figma file (2x transparent WebP). */
export const decor = {
  squiggleLimeLg: { src: "/images/decor/squiggle-lime-lg.webp", width: 253.5, height: 269 },
  squiggleLimeMd: { src: "/images/decor/squiggle-lime-md.webp", width: 141, height: 150 },
  squiggleLimeTall: { src: "/images/decor/squiggle-lime-tall.webp", width: 192, height: 251 },
  squiggleWhiteLg: { src: "/images/decor/squiggle-white-lg.webp", width: 192, height: 251 },
  squiggleWhiteSm: { src: "/images/decor/squiggle-white-sm.webp", width: 116.5, height: 123.5 },
  torusWhite: { src: "/images/decor/torus-white.webp", width: 240, height: 219.5 },
  torusLime: { src: "/images/decor/torus-lime.webp", width: 240, height: 219 },
  cylinderLime: { src: "/images/decor/cylinder-lime.webp", width: 274, height: 300 },
  cylinderWhite: { src: "/images/decor/cylinder-white.webp", width: 274, height: 300 },
  pyramidWhite: { src: "/images/decor/pyramid-white.webp", width: 126.5, height: 138.5 },
  pyramidLime: { src: "/images/decor/pyramid-lime.webp", width: 126.5, height: 138.5 },
  coneWhite: { src: "/images/decor/cone-white.webp", width: 129.5, height: 154 },
} as const;

export type DecorName = keyof typeof decor;

type DecorProps = {
  name: DecorName;
  /** Positioning / sizing classes. Width defaults to the design size. */
  className?: string;
  priority?: boolean;
};

/** Purely decorative, absolutely positioned 3D shape. */
export function Decor({ name, className, priority }: DecorProps) {
  const { src, width, height } = decor[name];
  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={Math.round(width)}
      height={Math.round(height)}
      priority={priority}
      sizes={`${Math.round(width)}px`}
      quality={90}
      className={cn("pointer-events-none absolute select-none", className)}
    />
  );
}
