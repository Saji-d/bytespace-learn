export type Avatar = { src: string };

const avatar = (name: string): Avatar => ({ src: `/images/avatars/${name}.webp` });

/** Seven faces shown in the "Happy Students" cards. */
export const happyStudents: Avatar[] = [1, 2, 3, 4, 5, 6, 7].map((n) => avatar(`student-${n}`));

/** Four learners shown on every course card. */
export const courseLearners: Avatar[] = [
  avatar("student-2"),
  avatar("learner-1"),
  avatar("learner-2"),
  avatar("learner-3"),
];

export const testimonialAvatars = {
  sarah: avatar("learner-2"),
  james: avatar("james"),
  alex: avatar("alex"),
};
