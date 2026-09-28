import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthIntro } from "@/components/auth/AuthIntro";
import { EnrollingCourseNote } from "@/components/auth/EnrollingCourseNote";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { authNav } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Create an account",
  description: "Join ByteSpace and get access to hundreds of courses from independent creators.",
};

const titleId = "register-title";

export default function RegisterPage() {
  return (
    <>
      <AuthIntro
        title="Sign up and come in"
        description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
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
          <Suspense fallback={null}>
            <EnrollingCourseNote />
          </Suspense>
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
