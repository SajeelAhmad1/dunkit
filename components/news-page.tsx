"use client"
import { useRouter } from "next/navigation"
import { FormattedMessage } from "react-intl";

const NewsPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Top decorative images - only visible on large screens */}
      <div className='-mt-[100px] hidden lg:flex items-center justify-between'>
        <div className='flex items-center'
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <img
            src='/about-bg-red.svg'
            alt='decorative background'
            className='w-[200px] xl:w-[300px]'
          />
        </div>
        <div className='-mt-[100px] flex items-center'
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <img
            src='/about-bg-dot.svg'
            alt='decorative background'
            className='w-[200px] xl:w-[300px]'
          />
        </div>
      </div>

      {/* Main content container - adjusted margin top for medium screens */}
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:-mt-10 lg:mt-0">
        {/* Page title */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            <FormattedMessage id={"NewsPage.titalnews"} defaultMessage={"News"}/>
          </h1>
        </div>

        {/* News grid - adjusted image sizes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-20">
          {/* First news item */}
          <div className="flex flex-col items-center">
            <div
              onClick={() => router.push("/news/1")}
              className="cursor-pointer w-full max-w-[400px] md:max-w-[450px] lg:max-w-[600px]">
              <div className="group">
                <img
                  src="/News-img-1.png"
                  alt="Business news"
                  className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] object-cover border border-gray-300 rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="mt-4 sm:mt-6">
                  <p className="inline-block py-1 px-2 text-xs text-white bg-gray-900 rounded">
                    <FormattedMessage id={"NewsPage.business"} defaultMessage={"BUSINESS"}/>
                  </p>
                  <h4 className="mt-3 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                    <FormattedMessage id={"NewsPage.inc"} defaultMessage={"Dunit Inc. raises seed round funding"}/>
                  </h4>
                  <p className="mt-2 text-sm text-gray-400">
                    <FormattedMessage id={"NewsPage.feb"} defaultMessage={"February 21, 2025"}/>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second news item */}
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <div
              onClick={() => router.push("/news/2")}
              className="cursor-pointer w-full max-w-[400px] md:max-w-[450px] lg:max-w-[600px]">
              <div className="group">
                <img
                  src="/news-Announcement.png"
                  alt="Announcement news"
                  className="w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] object-cover border border-gray-300 rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="mt-4 sm:mt-6">
                  <p className="inline-block py-1 px-2 text-xs text-white bg-green-700 rounded">
                    <FormattedMessage id={"NewsPage.annunce"} defaultMessage={"ANNOUNCEMENT"}/>
                  </p>
                  <h4 className="mt-3 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                  <FormattedMessage id={"NewsPage.annunce-web"} defaultMessage={"Announcement of corporate website renewal"}/>
                    
                  </h4>
                  <p className="mt-2 text-sm text-gray-500">
                  <FormattedMessage id={"NewsPage.21feb"} defaultMessage={"February 21, 2025"}/>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative image - only visible on large screens */}
      <div
        className="h-[350px] hidden lg:block"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-anchor-placement="top-center"
      >
        <img
          src='/about-bg-dot.svg'
          alt='decorative background'
          className='w-[200px] xl:w-[300px]'
        />
      </div>
    </div>
  )
}

export default NewsPage