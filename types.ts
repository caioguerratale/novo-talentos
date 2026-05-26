export interface Service {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  homepageHighlights?: string[];
  longDescription: React.ReactNode;
  icon: React.ReactNode;
  imageUrl: string;
  bgImage?: string;
}
