import Image from "next/image";

type AuthIntroProps = {
  title: string;
  description: string;
};

/** Left-hand column of the auth pages: page title, pitch and course illustration. */
export function AuthIntro({ title, description }: AuthIntroProps) {
  return (
    <div className="flex flex-col">
      <h1 className="font-heading text-heading-xs font-semibold tracking-heading">{title}</h1>
      <p className="mt-3 max-w-[480px] text-body-m text-neutral-50 sm:text-body-l lg:mt-[15px]">
        {description}
      </p>
      <Image
        src="/images/auth/illustration.webp"
        alt="ByteSpace course cards with lesson counts, prices, ratings and happy students"
        width={497}
        height={558}
        sizes="497px"
        fetchPriority="high"
        className="mt-auto mb-[41.5px] hidden h-auto w-full max-w-[497px] lg:block"
      />
    </div>
  );
}
