import Link from "next/link";
import type { NewsItem } from "@/types";
import { formatDate } from "@/utils/formateDate";

export default function NewsCard({ news }: { news: NewsItem }) {
  return (
    <Link
      href={`/news/${news.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-h-9 aspect-w-16 bg-gray-100 overflow-hidden">
        <img
          src={news.coverImage}
          alt={news.title}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <time className="text-sm text-gray-500 block mb-2">
            {formatDate(news.date)}
          </time>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#9D0033] transition-colors duration-300 mb-3">
            {news.title}
          </h3>
          {news.excerpt && (
            <p className="text-gray-600 line-clamp-3 text-sm">{news.excerpt}</p>
          )}
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <span className="inline-flex items-center space-x-1">
            <span>By</span>
            <span className="font-medium text-[#EC003C]">{news.author}</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
