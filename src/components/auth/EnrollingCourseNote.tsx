"use client";

import { useSearchParams } from "next/navigation";
import { courses } from "@/data/courses";

/** Shows which course the visitor picked when they arrive from a course card (`?course=slug`). */
export function EnrollingCourseNote() {
  const slug = useSearchParams().get("course");
  const course = courses.find((item) => item.slug === slug);
  if (!course) return null;

  return (
    <p className="mt-3 text-body-m text-neutral-600">
      You&apos;re enrolling in <strong className="font-medium">{course.title}</strong>
    </p>
  );
}
