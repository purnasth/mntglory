export interface TeamMember {
  id: number;
  image: string;
  name: string;
  position: string;
  description: string;
  socials: { id: number; title: string; link: string }[];
}
