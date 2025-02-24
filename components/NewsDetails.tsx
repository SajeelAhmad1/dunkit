'use client'
import { FormattedMessage } from "react-intl";
import ClientMarkdown from "./Company/News/ClientMarkdown";

const NewsDetails = ({ news }: any) => {
  return (
    <div className="min-h-screen w-full mb-20">
      <div className='w-full px-4 sm:px-6 md:px-8 max-w-[800px] mx-auto mt-10 sm:mt-16 lg:mt-28'>
        {/* Header */}
        <div className='flex flex-wrap gap-3'>
          <div className='font-bold mt-1'>
            {news.date}
          </div>
        </div>

        {/* Title */}
        <div className='sm:mt-8'>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {news.title}
          </h1>
        </div>

        {/* Image */}
        <div className='mt-6 sm:mt-10'>
          <img
            src={news.coverImage}
            alt='img'
            className='w-full border border-gray-300'
          />
        </div>
      
      <div className="font-medium mt-4">
      <ClientMarkdown content={news.content} />
      </div>
      </div>
    </div>
  );
};

export default NewsDetails;