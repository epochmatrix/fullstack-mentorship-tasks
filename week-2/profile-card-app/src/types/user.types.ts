// src/types/user.types.ts
export interface UserProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  skills: string[]; 
  socials: {
    github: string;
    linkedin: string;
  };
}
