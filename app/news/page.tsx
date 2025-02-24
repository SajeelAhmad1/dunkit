import NewsPage from "@/components/news-page";
import { getAllNewsItems } from "@/utils/news";

export default function NewsPageMain () {
    const news = getAllNewsItems();
    return <NewsPage news={news} />  
}
