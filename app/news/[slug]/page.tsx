import Link from "next/link";
import { getNewsItem } from "@/utils/news";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate } from "@/utils/formateDate";
import ClientMarkdown from "@/components/Company/News/ClientMarkdown";
import NewsDetails from "@/components/NewsDetails";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const news = getNewsItem(params.slug);

  return {
    title: `${news.title} | Dunkit`,
    description: news.excerpt,
    openGraph: {
      title: news.title,
      description: news.excerpt,
      images: news.coverImage
        ? [{ url: news.coverImage, width: 1200, height: 630, alt: news.title }]
        : [],
    },
  };
}

function NewsDetailsPage({ params }: { params: { slug: string } }) {
  const news = getNewsItem(params.slug);
  return <NewsDetails news={news} />;
}

export default NewsDetailsPage;
