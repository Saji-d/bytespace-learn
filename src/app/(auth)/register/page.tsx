import type { Metadata } from "next";
import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthIntro } from "@/components/auth/AuthIntro";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { courses } from "@/data/courses";
import { authNav } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Join ByteSpace and get access to hundreds of courses from independent creators.",
};

const titleId = "register-title";

type RegisterPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const { course: slug } = await searchParams;
  const course = typeof slug === "string" ? courses.find((c) => c.slug === slug) : undefined;

  return (
    <>
      <AuthIntro
        title="Sign up and come in"
        description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
      />
      <AuthCard
        eyebrow="Create an Account"
        title={
          <>
            Welcome to <br className="hidden sm:block" />
            ByteSpace
          </>
        }
        titleId={titleId}
        note={
          course && (
            <>
              You&apos;re enrolling in <strong className="font-medium">{course.title}</strong>
            </>
          )
        }
        footer={
          <>
            Already have an account?{" "}
            <Link href={authNav.signIn.href} className="rounded-sm text-primary-800 hover:underline">
              Login
            </Link>
          </>
        }
      >
        <RegisterForm labelledBy={titleId} />
      </AuthCard>
    </>
  );
}
