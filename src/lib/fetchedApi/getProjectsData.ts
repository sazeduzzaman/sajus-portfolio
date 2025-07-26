// Define the CategoryData interface for the fetched data
interface ProjectsData {
  id: number;
  title: string;
  name?: string;
  name_bangla?: string;
  category: string;
  category_id?: string; // optional
  slug: string;
  img: string;
  image_url?: string;
  thumbnail?: string;
  thumbnail_img?: string;
  description: string;
  features: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  duration: string;
  role: string;
  client: string;
  challenges: string;
  solution: string;
  news_title?: string; // optional
}

export const getProjectsData = async (): Promise<ProjectsData[]> => {
  try {
    const response = await fetch("/data/project.json", {
      next: { revalidate: 1 },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch news categories:", error);
    throw new Error("Something went wrong while fetching news categories.");
  }
};
