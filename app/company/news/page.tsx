import { getAllNewsItems } from '@/utils/news';
import NewsCard from '@/components/Company/News/NewsCards';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お知らせ | Dunkit',
  description: '最新のニュースとお知らせ',
};

export default async function NewsList() {
  const newsList = getAllNewsItems();

  return (
    <main className="bg-gray-50">
      {/* Add padding-top to account for navbar */}
      <div className="pt-24 pb-16">
        {/* Header Section */}
        <div className="relative">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="border-b border-gray-200 pb-8">
              <h1 className="text-4xl font-bold tracking-tight text-[#9D0033]">
                お知らせ
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                最新のニュースとお知らせをご覧いただけます
              </p>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsList.map((news) => (
              <NewsCard key={news.slug} news={news} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}