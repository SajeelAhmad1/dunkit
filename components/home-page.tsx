//@/pages/home-page.tsx
"use client"
import Button from '@/components/button';
import MaxWidth from '@/components/max-width';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { FormattedMessage } from 'react-intl';

const HomePage = () => {

  const router = useRouter();

  return (
    <>
      {/* hero section */}
      <div className=' text-white min-h-screen relative bg-[#000000cd]'>
        <img
          src='/hero-section-bg.jpg'
          alt='Background'
          className='absolute w-full h-screen object-cover object-center mix-blend-overlay'
        />
        <div className='bg-white/10 backdrop-blur-sm min-h-screen'>
          <MaxWidth className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0 min-h-screen pt-10 lg:pt-0'>
            {/* hero section */}
            <div className='flex flex-col  m-auto gap-4 max-w-[450px]'
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div>
                <h1 >
                  <FormattedMessage 
                    id={"HomePage.make"} 
                    defaultMessage={"Make it easier to continue your gym routine"}
                    />
                </h1>
              </div>
              <div>
                <p >
                  <FormattedMessage id={"HomePage.commited"}
                  defaultMessage={"We are committed to providing a casual and "} 
                  /><br/>
                  <FormattedMessage id={"HomePage.convinientgym"} defaultMessage={"convenient gym experience."}/>
                   <br />
                   <FormattedMessage id={"HomePage.convinientand"} 
                   defaultMessage={"Rental clothing, towels, and shoes are available"}/>
                  <br /> 
                  <FormattedMessage id={"HomePage.habit"} defaultMessage={"to help you develop an exercise habit."}/>
                </p>
              </div>
              <div className='flex justify-start'>


            <div
            onClick={()=> router.push("/service")}
            >
            <Button animation>
              <FormattedMessage id={"HomePage.click"} defaultMessage={" Click here for services details"}/>
             </Button>
            </div>
              </div>
            </div>
            <div className='flex justify-center ' 
            data-aos="zoom-in"
            data-aos-delay="300">
              <img
                src='/hero-section.svg'
                alt='dunkit logo'
                className='w-[300px] lg:w-[450px] '
              />
            </div>
          </MaxWidth>
        </div>
      </div>

      {/* about section */}
      <div className='min-h-screen py-8 '> 
        <div className='hidden lg:flex items-center justify-between'>
          <div className='flex items-center' data-aos="zoom-in">
            <img
              src='/about-bg-red.svg'
              alt='dunkit logo'
              className='w-[200px]'
            />
          </div>
          <div className='flex items-center'
           data-aos="zoom-in"
          >
            <img
              src='/about-bg-dot.svg'
              alt='dunkit logo'
              className='w-[200px]'
            />
          </div>
        </div>
        <MaxWidth className='lg:-mt-24'>
          <div className='flex flex-col items-start mx-auto gap-8 lg:gap-12 max-w-[600px]'>
            <div className='flex flex-col gap-4 ' 
            data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <h2 >
                <FormattedMessage id={"HomePage.about"} defaultMessage={"ABOUT"}/>
              </h2>
              <h3>
              <FormattedMessage 
                id={"HomePage.going"} 
                defaultMessage={"Going to the gym has become more of a chore"}
              />
              </h3>
            </div>
            <div>
              <p 
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              >
                <FormattedMessage id={"HomePage.there"} 
                defaultMessage={"There are many reasons to get into fitness, such as for health or to improve"}
                /><br />
                <FormattedMessage id={"HomePage.ones"} 
                defaultMessage={" one's body. However, it is not easy to make daily exercise a habit."}
                /><br />
                <FormattedMessage id={"HomePage.we"} 
                defaultMessage={"We will increase the convenience of our fitness facilities, "}
                /><br />
                <FormattedMessage id={"HomePage.fit"} 
                defaultMessage={"making fitness more accessible and accessible."}
                />
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto' 
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            >
              <div
                onClick={()=>router.push("/company")}
                className='shadow-2xl w-[290px] h-full bg-white'
              >
                <img
                  src='company-profile.png'
                  alt='dunkit logo'
                  className=' h-[175px] w-[100%] object-cover object-center'
                />
                <p className='flex justify-center p-4'>
                  <FormattedMessage id={"HomePage.comny"} defaultMessage={"Company Profile"}/>
                </p>
              </div>
              <div
                onClick = {()=>router.push("/service")}
                className='shadow-2xl w-[290px] h-full '
              >
                <img
                  src='/service-details.png'
                  alt='dunkit logo'
                  className=' h-[175px] w-[100%] object-cover object-center'
                />
                <p className='flex justify-center p-4'>
                  <FormattedMessage id={"HomePage.dtail"} defaultMessage={"Service Details"}/>
                </p>
              </div>
            </div>
          </div>
        </MaxWidth>
      </div>

      {/* service section */}
      <div className='min-h-screen py-8'>
        <MaxWidth className=''>
          <div className='flex flex-col  mx-auto gap-8 lg:gap-12 max-w-[600px] '>
          
            <div className='flex flex-col gap-4' 
            data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <h2>
                <FormattedMessage id={"HomePage.service"}
                defaultMessage={"SERVICE"}
                />
              </h2>
              <h3>
                <FormattedMessage 
                  id={"HomePage.sub"} 
                  defaultMessage={"Dunkit Subscription-based rental wear"}
                />
              </h3>
            </div>
            <div 
            data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <p className='tracking-[2px] leading-[30px]'>
              <FormattedMessage 
                  id={"HomePage.gymssss"} 
                  defaultMessage={"Many gym users go to the gym while they are out and about, and"}
                /><br />
                <FormattedMessage 
                  id={"HomePage.gymuser"} 
                  defaultMessage={"carry a change of clothes and shoes with them. "}
                /><br />
                <FormattedMessage 
                  id={"HomePage.rentaqql"} 
                  defaultMessage={"Dunkit offers gym users a subscription-based rental outfit, allowing them"}
                /><br />
                <FormattedMessage 
                  id={"HomePage.empatyhandl"} 
                  defaultMessage={"to stop by the gym empty-handed."}
                />
                 
              </p>
            </div>
            <div className='flex items-center justify-center' 
            data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div onClick = {()=>router.push("/service")}>
                <Button animation>
                    <FormattedMessage id={"HomePAge.serv-detail"}
                    defaultMessage={"Service Details"}
                    />
                </Button>
              </div>
            </div>
            <div className=' w-full lg:w-[250px] h-full mx-auto' 
            data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <img
                src='dunkit-mobile.svg'
                alt='dunkit logo'
                className=' w-[150px] lg:w-full h-full mx-auto object-cover object-center'
              />
            </div>
          </div>
        </MaxWidth>
        <div className='hidden lg:flex items-center justify-between -mt-48' >
          <div className='flex items-center' 
          data-aos-delay="250"
          data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
          >
            <img
              src='/about-bg-dot.svg'
              alt='dunkit logo'
              className='w-[200px]'
            />
          </div>
          <div className='flex items-center' 
           data-aos="zoom-in"
          >
            <img
              src='/home-service-bg-line.svg'
              alt='dunkit logo'
              className='w-[200px]'
            />
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className=' py-8'>
        <MaxWidth className=' '>
          <div className='flex flex-col justify-start gap-10 max-w-[1000px] mx-auto'>
            <h2 
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <FormattedMessage id={"HomePage.neEws"} defaultMessage={"NEWS"}/>
            </h2>
            <div className='flex flex-col gap-4 '>
              <div className='group'>
                <div
                  className='flex flex-col gap-2 p-2 border-b border-gray-200 
                transform scale-y-100 group-hover:scale-y-105 transition-transform
                 duration-300 ease-in-out origin-top group-hover:bg-gray-100'
                >
                  <p className='text-xs'>
                    <FormattedMessage id={"HomePage.febuary"} defaultMessage={"February 21, 2025"}/>
                  </p>
                  <h5 >
                  <FormattedMessage id={"HomePage.raises"} 
                  defaultMessage={"Dunit Inc. raises seed round funding"}/>
                  </h5>
                </div>
              </div>
              <div className='group'>
                <div
                  className='flex flex-col gap-2 p-2 border-b border-gray-200 
                transform scale-y-100 group-hover:scale-y-105 transition-transform
                 duration-300 ease-in-out origin-top group-hover:bg-gray-100'
                >
                  <p className='text-xs'>
                    <FormattedMessage id={"HomePage.dates"} defaultMessage={"February 21, 2025"}/>
                  </p>
                  <h5>
                  <FormattedMessage id={"HomePage.annunce"} defaultMessage={"Announcement of Corporate Website Renewal"}/>
                  
                  </h5>
                </div>
              </div>
            </div>
            <div
              onClick = {()=>router.push("/company/news")}
              className='mx-auto cursor-pointer'
            >
              <Button
                icon={ArrowRight}
                animation
                className='rounded-0'
              >
                <FormattedMessage id={"HomePage.viewall"} defaultMessage={'View All'}/>
              </Button>
            </div>
          </div>
        </MaxWidth>
      </div>
    </>
  );
};

export default HomePage;
