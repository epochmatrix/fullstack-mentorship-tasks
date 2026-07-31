// src/constants/user.constants.ts
import { type UserProfile } from "../types/user.types";

export const USERS_DATA: UserProfile[] = [
  {
    id: "1",
    name: "Wildan Reyan",
    role: "Fullstack Developer",
    bio: "Passionate about building scalable web apps and slaying bugs in the dark.",
    avatarUrl: "https://i.pinimg.com/736x/46/88/12/468812df30ab33d9c66397e40be563af.jpg",
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
    avatarUrl: "https://i.pinimg.com/736x/55/8f/e3/558fe37f6b6659157465467b070857f0.jpg",
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
    avatarUrl: "https://i.pinimg.com/736x/50/15/c0/5015c074ceb4e2bcee05a10df7826187.jpg",
    skills: ["Python", "SQL", "TypeScript", "TensorFlow"],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  }
];
