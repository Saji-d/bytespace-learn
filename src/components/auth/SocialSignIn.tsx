"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { FacebookIcon, GoogleIcon } from "@/components/icons";

type Provider = {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const providers: Provider[] = [
  { name: "Facebook", Icon: FacebookIcon },
  { name: "Google", Icon: GoogleIcon },
];

/** "or" divider plus social sign-in buttons (not wired up in this demo). */
export function SocialSignIn() {
  const [status, setStatus] = useState("");

  return (
    <div className="relative mt-16 lg:mt-[74.7px]">
      <div className="flex items-center gap-3 text-body-m text-neutral-500">
        <span aria-hidden="true" className="h-px flex-1 bg-[#D1D1D1]" />
        <span>or</span>
        <span aria-hidden="true" className="h-px flex-1 bg-[#D1D1D1]" />
      </div>
      <ul className="mt-8 flex justify-center gap-4 lg:mt-[41.7px]">
        {providers.map(({ name, Icon }) => (
          <li key={name}>
            <button
              type="button"
              aria-label={`Continue with ${name}`}
              onClick={() => setStatus("Social sign-in isn't available in this demo.")}
              className="flex size-[72px] items-center justify-center rounded-[24px] border border-[#D1D1D1] text-black transition-colors hover:border-neutral-400 hover:bg-neutral-50"
            >
              <Icon className="size-[33px]" />
            </button>
          </li>
        ))}
      </ul>
      <p role="status" className="absolute inset-x-0 top-full mt-3 text-center text-body-s text-neutral-600">
        {status}
      </p>
    </div>
  );
}
