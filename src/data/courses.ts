import { sectionIds } from "@/data/navigation";

export type Topic = { slug: string; label: string };

export type Course = {
  slug: string;
  title: string;
  creator: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
  learners: string;
  price: number;
  /** Labels of the topic chips this course appears under. */
  topics: string[];
};

const toTopic = (label: string): Topic => ({
  label,
  slug: label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, ""),
});

/** The default chip: shows every course. */
export const featuredTopic = toTopic("Featured");

/** Topic chips in the rows the design lays them out in (the first row starts with Featured). */
export const topicRows: Topic[][] = [
  [
    featuredTopic,
    ...[
      "Music",
      "Drawing & Painting",
      "Marketing",
      "Animation",
      "Social Media",
      "UI/UX Design",
      "Creative Marketing",
    ].map(toTopic),
  ],
  [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
  ].map(toTopic),
  ["Productivity", "Web Development", "Data Science", "Cooking"].map(toTopic),
];

/** Extra topics revealed by the "+ More" control. */
export const moreTopics: Topic[] = ["Writing", "Languages", "3D Modeling", "Finance"].map(toTopic);

export const allTopics: Topic[] = [...topicRows.flat(), ...moreTopics];

export function findTopic(slug: string | null | undefined): Topic {
  return allTopics.find((topic) => topic.slug === slug) ?? featuredTopic;
}

const shared = {
  creator: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  rating: 4.5,
  learners: "26+",
  price: 25,
} as const;

export const courses: Course[] = [
  {
    ...shared,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    image: "/images/courses/learn-figma.webp",
    topics: ["Featured", "UI/UX Design", "Graphic Design", "Web Development"],
  },
  {
    ...shared,
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    image: "/images/courses/digital-asset.webp",
    topics: ["Featured", "Digital Illustration", "Graphic Design", "Creative Marketing", "Photography"],
  },
  {
    ...shared,
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    image: "/images/courses/big-data.webp",
    topics: ["Featured", "Data Science", "Marketing"],
  },
  {
    ...shared,
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    image: "/images/courses/productivity.webp",
    topics: ["Featured", "Productivity", "Freelance & Entrepreneurship"],
  },
  {
    ...shared,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    image: "/images/courses/money-management.webp",
    topics: ["Featured", "Freelance & Entrepreneurship", "Data Science", "Finance"],
  },
  {
    ...shared,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: "/images/courses/startup.webp",
    topics: ["Featured", "Freelance & Entrepreneurship", "Marketing", "Social Media"],
  },
];

/** Courses under `topic` whose title, topics or creator contain `query` (case-insensitive). */
export function filterCourses(list: Course[], topic: Topic, query = ""): Course[] {
  const term = query.trim().toLowerCase();
  return list.filter((course) => {
    if (topic.slug !== featuredTopic.slug && !course.topics.includes(topic.label)) return false;
    if (!term) return true;
    return [course.title, course.creator, ...course.topics].some((value) =>
      value.toLowerCase().includes(term),
    );
  });
}

/** URL search params that drive the course filter (the hero search form submits `q`). */
export const courseParams = { topic: "topic", query: "q" } as const;

/** Link to the course list pre-filtered by `topic`. */
export function topicHref(topic: Topic): string {
  const search =
    topic.slug === featuredTopic.slug ? "" : `?${courseParams.topic}=${encodeURIComponent(topic.slug)}`;
  return `/${search}#${sectionIds.courses}`;
}
