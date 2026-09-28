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
  /** Topic chips this course appears under (see courseTopics). */
  topics: string[];
};

export const courseTopics = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
] as const;

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
    topics: ["Featured", "Digital Illustration", "Graphic Design", "Creative Marketing"],
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
    topics: ["Featured", "Freelance & Entrepreneurship", "Data Science"],
  },
  {
    ...shared,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    image: "/images/courses/startup.webp",
    topics: ["Featured", "Freelance & Entrepreneurship", "Marketing", "Social Media"],
  },
];
