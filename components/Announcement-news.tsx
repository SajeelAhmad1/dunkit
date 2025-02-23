'use client'
import { FormattedMessage } from "react-intl";

const Announcement = () => {
  return (
    <div className="min-h-screen w-full">
      <div className='w-full px-4 sm:px-6 md:px-8 max-w-[800px] mx-auto mt-10 sm:mt-16 lg:mt-20'>
        {/* Header */}
        <div className='flex flex-wrap gap-3'>
          <div className='px-4 py-2 text-sm bg-green-600 text-white'>
            <FormattedMessage id={"Announcement.announc"} defaultMessage={"A N N O U N C E M E N T"}/>
          </div>
          <div className='font-bold mt-1'>
            <FormattedMessage id={"Announcement.feb"} defaultMessage={"February 21, 2025"}/>
          </div>
        </div>

        {/* Title */}
        <div className='mt-8 sm:mt-14'>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          <FormattedMessage id={"Announcement.corp"} defaultMessage={"Announcement of corporate website renewal"}/>

          </h1>
        </div>

        {/* Image */}
        <div className='mt-6 sm:mt-10'>
          <img
            src='/news-Announcement.png'
            alt='img'
            className='w-full border border-gray-300'
          />
        </div>

        {/* Main text */}
        <div className='text-base sm:text-lg lg:text-xl mt-7 w-full sm:w-[600px]'>
          <FormattedMessage id={"Announcement.txt"} 
          defaultMessage={"Dunkit Inc. (hereinafter, the Company) completely redesigned its corporate website on February 21, 2025. In this renewal, the design and information architecture have been revised to improve usability and convey the worldview of the subscription-based rental clothing service \"Dunkit\" more clearly. The new site allows users to see the appeal of Dunkit, which realizes \"empty-handed gym\" its implementation examples, and specific ways to use the service in a more visual and smooth manner."}/>
        </div>

        <div className='text-base sm:text-lg mt-10'>
          <FormattedMessage id={"Announcement.newCorp"} 
          defaultMessage={"Dunkit Inc.\'s new corporate website:"}/>
          <a className='text-blue-700' href='https://dunkit.in/company'>
            {' '}https://dunkit.in/company
          </a>
        </div>

        {/* Background section */}
        <div className='mt-16 sm:mt-20 mb-10'>
          <div className='flex gap-4 sm:gap-10'>
            <div className='h-[50px] w-[7px] bg-red-700'></div>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-semibold'>
              <FormattedMessage id={"Announcement.background"} defaultMessage={"Background of the renewal"}/>
            </div>
          </div>
          <div className='mt-10 text-base sm:text-lg lg:text-xl'>
          <FormattedMessage 
              id={"Announcement.background"} 
              defaultMessage={"Dunkit is a startup that rents gym wear, towels, shoes, etc. on a monthly basis, providing an environment where people can train without the hassle of carrying around luggage. With this seed round of funding, we will further improve the quality of our service, expand our functions, and strengthen our brand recognition."}
          />
          </div>
        </div>

        {/* Key points section */}
        <div className='mt-16 sm:mt-20 mb-10'>
          <div className='flex gap-4 sm:gap-10'>
            <div className='h-[50px] w-[7px] bg-red-700'></div>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-semibold'>
              <FormattedMessage id={"Announcement.key"} defaultMessage={"Key points of the renewal"}/>
            </div>
          </div>
          <div className='mt-14 text-base sm:text-lg lg:text-xl'>
            <div>
              <h3 className="text-2xl font-bold">
                <FormattedMessage id={"Announcement.new-deg"} defaultMessage={"(1) New design"}/>
              </h3>
              <div className='mt-5'>
              <FormattedMessage id={"Announcement.new-deg"} 
              defaultMessage={"In this renewal, we were conscious of how we want to be recognized by society and of conveying our vision once again. By updating the design to a white base, we aimed to create a design that fosters even greater trust."}/>
              </div>
            </div>
            <div className='mt-14'>
              <h3 className="text-2xl font-bold">
                <FormattedMessage id={"Announcement.new-imp"} defaultMessage={"(2) Improved usability"}/>
              </h3>
              <div className='mt-5'>
              <FormattedMessage id={"Announcement.new-imp"}
               defaultMessage={"We have redesigned the site to organize our services and content in a more understandable way, allowing site visitors to smoothly access the information they need."}/>
              </div>
            </div>
          </div>
        </div>

        {/* About section */}
        <div className='mt-16 sm:mt-20 mb-10'>
          <div className='flex gap-4 sm:gap-10'>
            <div className='h-[50px] w-[7px] bg-red-700'></div>
            <div className='text-3xl sm:text-4xl lg:text-5xl font-semibold'>
              <FormattedMessage id={"Announcement.aboutDunk"} defaultMessage={"About Dunkit Inc."}/>
            </div>
          </div>
          <div className='mt-10 text-base sm:text-lg lg:text-xl'>
          <FormattedMessage id={"Announcement.ourComp"} defaultMessage={"Our company aims to create a world where people can go to the gym more easily, and offers a subscription-based rental wear service called \"Dunkit Rental Wear\" that allows people to go to the gym empty-handed. We will continue to develop our services to solve the problems in the fitness industry."}/>
          </div>
        </div>

        {/* Company Profile */}
        <div className='text-base sm:text-lg lg:text-xl mb-20 '>
          <FormattedMessage id={"Announcement.<c>"} defaultMessage={"＜Company Profile＞"}/>
          <br />
          <FormattedMessage id={"Announcement.Co.."} defaultMessage={"Company name: Dunkit Co., Ltd."}/>
          <br />
          <FormattedMessage id={"Announcement.Represent"} defaultMessage={"Representative: Kazuma Kotani"}/>
          <br />
          <FormattedMessage id={"Announcement.locat"} defaultMessage={"Location: Diamond Building 2F, 2-2-15 Hamamatsucho, Minato-ku, Tokyo"}/>
          <br />
          <FormattedMessage id={"Announcement.established"} defaultMessage={"Established: October 2024"}/>
          <br />
          <FormattedMessage id={"Announcement.buss-desc"} defaultMessage={"Business description: Provision and management of rental items for sports facilities"}/>
          <br />
          <FormattedMessage id={"Announcement.url"} defaultMessage={"URL:"}/>
          
          <a href='https://dunkit.in/company' className='text-blue-700'>
            {' '}https://dunkit.in/company
          </a>
        </div>
      </div>
    </div>
  );
};

export default Announcement;