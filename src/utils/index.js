import { surpriseMePrompts } from "../constants";

export const getRandomPromt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPromt = surpriseMePrompts[randomIndex];

  if (randomPromt === prompt) return getRandomPromt(prompt);

  return randomPromt;
};
