import CampaignDetails from "@/components/CampaignDetails";
import { promises as fs } from "fs";
import path from "path";

async function getData() {
  const campaignDir = path.join(process.cwd(), "public/campaign");
  const allFiles = await fs.readdir(campaignDir);
  
  // Filter for image files only (jpg, jpeg, png, svg, webp)
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif'];
  const imageFiles = allFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return imageExtensions.includes(ext);
  });
  
  const images = imageFiles.map((file) => `/campaign/${file}`);

  const markdownPath = path.join(process.cwd(), "public/campaign-details.md");
  const markdownContent = await fs.readFile(markdownPath, "utf8");

  return { images, markdownContent };
}

export default async function Home() {
  const { images, markdownContent } = await getData();

  return <CampaignDetails images={images} markdownContent={markdownContent} />;
}
