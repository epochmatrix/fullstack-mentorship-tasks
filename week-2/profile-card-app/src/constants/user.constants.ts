// src/constants/user.constants.ts
import { type UserProfile } from "../types/user.types";

export const USERS_DATA: UserProfile[] = [
  {
    id: "1",
    name: "Wildan Reyan",
    role: "Fullstack Developer",
    bio: "Passionate about building scalable web apps and slaying bugs in the dark.",
    avatarUrl: "https://pinimg.com",
    skills: ["React", "TypeScript", "Node.js", "Tailwind"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "2",
    name: "Hamza AHmed",
    role: "UI/UX Designer",
    bio: "Creating beautiful, user-centered vampire-themed experiences and web interfaces.",
    avatarUrl: "https://dicebear.com",
    skills: ["Figma", "Tailwind CSS", "React", "Adobe XD"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "3",
    name: "Khalid Bilal",
    role: "Data Scientist",
    bio: "Analyzing historical vampire data patterns and training nocturnal machine learning models.",
    avatarUrl: "https://pinimg.com",
    skills: ["Python", "SQL", "TypeScript", "TensorFlow"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
];
