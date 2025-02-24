//@/pages/company-profile.tsx
'use client'

//Todo: translation
import MaxWidth from "@/components/max-width"
import { FormattedMessage } from "react-intl"

const CompanyProfilePage = () => {

  const detail = [
    {
      Name:"Company Name",
      description:"Dunkit Co., Ltd."
    },
    {
      Name:"Representative",
      description:"Kazuma Kotani"
    },
    {
      Name:"Established",
      description:"October 2024"
    },
    {
      Name:"location",
      description:"Hamamatsucho Diamond Building 2F, 2-2-15 Hamamatsucho, Minato-ku, Tokyo"
    },
    {
      Name:"Business Contents",
      description:"Provision and management of rental items for sports facilities"
    },
    {
      Name:"Capital",
      description:"31,000,000 yen"
    },
    {
      Name:"Major Shareholders",
      description:"XTech Ventures, Management Team"
    },
    
  ]

  const intoduction = [
    {
      subTitle:"Representative Director and CEO",
      title:"Kazuma Kotani",
      image: "/KazumaR.jpg",
      description:`Currently in his third year at the Faculty of Policy Management, Keio University.
      After long-term internships at the Chilean Embassy's Commercial Affairs Section and a foreign financial company, he launched several businesses.
      After noticing the issues that come with going to the gym, he co-founded Dunkit Inc.`
    },
    {
      subTitle:"Director and CTO",
      title:"Jason Park",
      image: "/JasonR2.jpg",
      description:`Graduated from the School of International Liberal Studies at Waseda University.
      While still a student, he launched the Waseda University international student community "WasedaTime" and a parking lot business. He has experience in developing and operating various software, including SNS and parking lot service apps.`
    },
  ]

  
  return (
    <div>
      <div className='-mt-[100px] hidden lg:flex items-center justify-between'>
          <div className='flex items-center' 
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
            >
            <img
              src='/about-bg-red.svg'
              alt='dunkit logo'
              className='w-[300px]'
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
              alt='dunkit logo'
              className='w-[300px]'
            />
          </div>
        </div>
    <div className="px-4 py-2 lg:px-6 max-w-[800px] mx-auto ">
      <div className="flex justify-center">
        <h1 className=" text-3xl lg:text-7xl ">
          <FormattedMessage id={"CompnyProfile.company"} defaultMessage={"Company Profile"}/>
        </h1>
      </div>
      <div className="lg:mt-[50px] lg:mt-[150px] overflow-hidden ">
  {detail.map((data, i) => (
    <div key={i} className="group ">
      <div className="pt-10 border-b transform scale-y-100 
          group-hover:scale-y-125 transition-transform duration-400 ease-in-out hover:bg-gray-50">
        <div className="px-5 flex gap-7 lg:gap-48 pb-10  flex-col lg:flex-row">
          <h5 className=" font-bold">
            <FormattedMessage id={"CompanyProfile.data"} 
            defaultMessage={"{value}"} 
            values={{value:data.Name}}/>
            </h5>
          <h6 className="">{data.description}</h6>
        </div>
      </div>
    </div>
  ))}
</div>

      <div className="mt-[80px] lg:mt-[200px]  flex-col justify-center">
        <div>
          <h1 className="text-2xl lg:text-5xl flex justify-center ">
            <FormattedMessage 
              id={"CompanyProfilePage.Tokyo"} 
              defaultMessage={"Tokyo Head Office"}
            />
          </h1>
        </div>
        <div className="flex justify-center  mx-auto  m-3 lg:max-w-[800px] lg:h-[450] ">
        <iframe src="https://www.google.com/maps?q=35.655384202264415,139.7548247712674&z=15&output=embed" 
        // {style="border:0;"} 
        // {allowfullscreen="" }
        loading="lazy" 
        className="m-3 w-[500px] h-[300px] lg:w-[750px] lg:h-[500px]"
        // {referrerpolicy="no-referrer-when-downgrade"}
        >
          
        </iframe>
        
        </div>
            <div className='-mt-[200px] hidden lg:block  items-center absolute top-[1900px] left-0'
           data-aos="fade-zoom-in"
           data-aos-easing="ease-in-back"
           data-aos-delay="100"
           data-aos-offset="0"
          >
            <img
              src='/about-bg-dot.svg'
              alt='dunkit logo'
              className='w-[250px]'
            />
          </div>
          <div className='hidden lg:block  items-center absolute  top-[1770px] right-0' 
           data-aos="zoom-in"
          >
            <img
              src='/home-service-bg-line.svg'
              alt='dunkit logo'
              className='w-[230px] lg:w-[360px]'
            />
          </div> 
        
        <div className="text-sm px-10 mt-20">
          <FormattedMessage id={"CpompanyProfilePage.1minit"} 
          defaultMessage={" 1 minuts walk from the to Yeasu main entrance of Tokyo Station"}
          />
        </div>
      </div>
      
    </div>
    <div className="mt-[60px] lg:mt-[200px] w-full lg:pb-50" style={{
          backgroundImage: 'url(/executive-introduction.jpg) ',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}>
          <div className="h-full w-full bg-[#00000066] backdrop-blur">
          
       <MaxWidth>
        <div className="flex justify-center">
          <h1 className="text-2xl lg:text-5xl font-bold text-white mt-10 lg:mt-44 ">
            <FormattedMessage id={"CompanyProfilePage.executive"} 
            defaultMessage={"Executive Introduction"}/>
          </h1>
        </div>
        {intoduction.map((item, index)=>(
        <div key={index} className="  grid grid-col-1 gap-4 lg:flex lg:justify-center  lg:grid-cols-2 lg:gap-16 pb-10 mt-20 ">
          <div className="lg:mx-auto rounded-full overflow-hidden lg:max-w-[800px] h-[100vw] lg:w-[330px]  lg:h-[330px]  border-2 border-white text-white">
            
            <img
            src={item.image}
            alt=""
            className="object-fill w-full"
            />
           
          </div>
              <div className="text-white w-full lg:w-[580px] lg:mt-10 p-3">
                <h5 className="">{item.subTitle}</h5>
                <h2 className="text-2xl lg:text-5xl  mt-3">{item.title}</h2>
                <h6 className=" leading-[21px] tracking-[2px] mt-2 whitespace-pre-line">{item.description}</h6>
                </div>
              </div>
          ))}
          </MaxWidth>
        </div>
        </div>
    </div>
  )
}

export default CompanyProfilePage