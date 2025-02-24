import HomePage from "@/components/home-page";
import { getAllNewsItems } from "@/utils/news";

export default function Home() {

  const news = getAllNewsItems();

  return (
    <HomePage news={news}/>
  );
}
