import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { getAllNewsItems, getNewsItem } from '@/utils/news';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import { formatDate } from '@/utils/formateDate';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params; // ✅ Await params before using it
  const news = await getNewsItem(slug); // ✅ Ensure getNewsItem is async

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

export default async function NewsDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params; // ✅ Await params before using it
  let news;

  try {
    news = await getNewsItem(slug); // ✅ Ensure getNewsItem is async
  } catch (error) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen">
      <article className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/company/news"
              className="inline-flex items-center space-x-2 text-[#EC003C] hover:text-[#9D0033] transition-colors duration-300"
            >
              <span>←</span>
              <span>ニュース一覧に戻る</span>
            </Link>
          </div>

          <header className="mb-8">
            <time className="text-gray-500 text-sm block mb-4">
              {formatDate(news.date)}
            </time>
            <h1 className="text-4xl font-bold text-[#9D0033] mb-4">
              {news.title}
            </h1>
            <div className="flex items-center text-sm text-gray-500">
              <span>By</span>
              <span className="font-medium text-[#EC003C] ml-1">
                {news.author}
              </span>
            </div>
          </header>

          {news.coverImage && (
            <div className="relative mb-12 aspect-h-9 aspect-w-16 overflow-hidden rounded-lg">
              <img
                src={news.coverImage}
                alt={news.title}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <Markdown>{news.content}</Markdown>
          </div>
        </div>
      </article>
    </main>
  );
}
