import category_img from '../assets/images/category.png';

export default function Categories() {
  return (
    <div className='flex justify-between items-center mx-32 my-24  bg-[#000000] h-[480px] text-white pl-14'>
        <div className='flex flex-col gap-8 my-16 items-start'>
            <p className='text-[#00FF66]'>Categories</p>
            <p className='text-5xl font-medium flex flex-col gap-3'><span>Enhance Your</span> <span >Music Experience</span> </p>
            <div className='flex gap-6'>
                <div className='flex flex-col text-center bg-white text-black w-16 h-16  pt-3 rounded-full'>
                    <span className='font-semibold text-base'>23</span>
                    <span className='text-[11px]'>Hours</span>
                </div>

                <div className='flex flex-col text-center bg-white text-black w-16 h-16  pt-3 rounded-full'>
                    <span className='font-semibold text-base'>05</span>
                    <span className='text-[11px]'>Days</span>
                </div>

                <div className='flex flex-col text-center bg-white text-black w-16 h-16  pt-3 rounded-full'>
                    <span className='font-semibold text-base'>59</span>
                    <span className='text-[11px]'>Minutes</span>
                </div>

                <div className='flex flex-col text-center bg-white text-black w-16 h-16  pt-3 rounded-full'>
                    <span className='font-semibold text-base'>35</span>
                    <span className='text-[11px]'>Seconds</span>
                </div>
            </div>
            <div className='mt-3'><button className='bg-[#00FF66] w-44 h-14 rounded '>Buy Now!</button></div>
        </div>
        <div className=' '>
            <img src={category_img} className='w-[90%] ' alt="category_img" />
        </div>
    </div>
  );
}
