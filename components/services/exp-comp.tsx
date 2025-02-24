import MaxWidth from '../max-width';
import MobApp from "@/public/mob.svg"

const ExpComp = () => {
  return (
    <div className='w-[90%] md:w-[60%] mx-auto  relative'>
      <MaxWidth>
        <div className='flex flex-wrap items-center justify-center md:justify-between '>
          <div className='w-full md:w-[60%]'>
            <h4 className=' font-bold mb-4'>
              Take your gym experience to the next level
            </h4>
            <p className='text-lg mt-4 '>
              Dunkit is a monthly flat-rate rental service for tops, bottoms,
              towels, shoes, and socks. By subscribing to a plan, you can enjoy
              irreversible convenience and go to the gym empty-handed.
            </p>
          </div>
          <div className='relative mt-10 lg:mt-0'>
            <img
              src={MobApp.src}
              alt='Dunkit App'
              className='max-w-[150px] lg:max-w-[200px] h-auto'
            />
          </div>
        </div>
      </MaxWidth>
    </div>
  );
};

export default ExpComp;
