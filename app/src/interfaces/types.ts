import { Image } from './common';

export interface TeamMember {
  id: number;
  image: string;
  name: string;
  position: string;
  description: string;
  socials: { id: number; title: string; link: string }[];
}

export interface EventData {
  title: string;
  content: string;
  date: string;
  images: Image[];
  category: string;
}
