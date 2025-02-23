const BusinessNews = () => {
    return (
      <div>
        <div className='w-full px-4 sm:px-6 lg:w-[800px] mx-auto mt-20'>
          <div className='flex flex-wrap gap-5'>
            <div className='px-4 py-2 text-sm bg-gray-800 text-white'>B U S I N E S S</div>
            <div className='font-bold mt-1'>February 21, 2025</div>
          </div>
          <div className='mt-14'>
            <div className='text-6xl font-semibold'>Dunkit Inc. raises seed round funding</div>
          </div>
          <div className='mt-10'>
            <img
              src={'/News-img-1.png'}
              alt='img'
              className='w-full border border-gray-300'
            />
          </div>
          <div className='text-xl mt-7 font-semibold w-full lg:w-[800px]'>
            Dunkit Inc. (Headquarters: Minato-ku, Tokyo; CEO: Kazuma Kotani), which operates a subscription-based rental service for gym users, has issued J-KISS-type stock acquisition rights to XTech Ventures and raised funds in a seed round. The funds raised this time will be used to develop the product and expand the number of stores that introduce the product.
          </div>
          <div className='mt-20 mb-10'>
            <div className='flex gap-10'>
              <div className='h-[50px] w-[7px] bg-red-700'></div>
              <div className='text-5xl font-semibold'>What is &quot;Dunkit&quot;?</div>
            </div>
            <div className='mt-10 text-xl'>
              &quot;Dunkit&quot; is a service that allows you to rent clothing, shoes, socks, and towels at gym stores for a fixed monthly fee. Users do not need to carry a change of clothes or exercise shoes, and can go to the gym without any preparation. By scanning the QR code of the Dunkit rental items at the gym store with the dedicated app, you can use it outside of staff hours 24 hours a day. Gym owners can install it at no cost and without increasing the workload of their staff. Dunkit makes the customer journey to the gym smoother, making it easier for users to continue going to the gym.
            </div>
          </div>
          <div className='mt-20 mb-10'>
            <div className='flex gap-10'>
              <div className='h-[50px] w-[7px] bg-red-700'></div>
              <div className='text-5xl font-semibold'>Future outlook</div>
            </div>
            <div className='mt-10 text-xl'>
              Based on feedback from users and gym owners, Dunkit will continue to improve its service to increase satisfaction for both parties, including establishing a more streamlined rental system, improving the quality of rental items, and improving the UX/UI. We will also expand our services to more 24-hour gyms and personal gyms.
            </div>
          </div>
          <div className='text-xl'>
            ＜Company Profile＞ <br />
            Company name: Dunkit Co., Ltd.<br />
            Representative: Kazuma Kotani<br />
            Location: Diamond Building 2F, 2-2-15 Hamamatsucho, Minato-ku, <br />
            Tokyo <br />
            Established: October 2024<br />
            Business description: Provision and management of rental items for sports facilities<br />
            URL: <a href="https://dunkit.in/company" className='text-blue-700'>https://dunkit.in/company</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default BusinessNews;
  