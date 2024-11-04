import React from 'react'
import myImage from '../Image/technology/background.jpg'
import plane from '../Image/technology/image-launch-vehicle-portrait.jpg'

const Technology = () => {
  return (
    <div className='max-sm:p-5 text-white items-center bg-cover h-screen bg-[url()' style={{ backgroundImage: `url(${myImage})` }}>
      <section>
      <div className='flex gap-4 text-[22px] pl-16 max-sm:pl-3'>
            <p className='text-zinc-500'>03</p>
            <p>SPACE LAUNCH 101</p>
          </div>
      </section>
      <section className='flex max-sm:flex-col justify-around items-center pt-20 max-sm:pt-5 max-sm:gap-5'>
      <article className='w-[40vw] flex gap-7 max-sm:gap-4 max-sm:w-[95vw]'>
        <legend className='flex flex-col gap-16 max-sm:gap-10'>
            <div className='bg-white w-[4.5vw] p-5 rounded-full text-[20px] max-sm:w-[3vw] max-sm:h-16 max-sm:pl-2 shadow-lg'>
                <p className='text-black'>1</p>
            </div>
            <div className='bg-transparent border-2 border-zinc-500 shadow-lg max-sm:w-[3vw] max-sm:h-16 max-sm:pl-2 border-solid w-[4.5vw] p-5 rounded-full text-[20px]'>
                <p className='text-white'>2</p>
            </div>
            <div className='bg-transparent border-2 border-zinc-500 shadow-lg max-sm:w-[3vw] max-sm:h-16 max-sm:pl-2 border-solid w-[4.5vw] p-5 rounded-full text-[20px]'>
                <p className='text-white'>3</p>
            </div>
            </legend> 

<legend className='flex flex-col gap-8 max-sm:gap-4'>
            <p>THE TERMINOLOGY</p>
            <p className='text-[60px] max-sm:text-[20px]'>LAUNCH VEHICE</p>
            <p className='w-[35vw] text-[18px] max-sm:w-[80vw] max-sm:text-[16px]'>
A launch vehicle or carrier rocket is a rocket-propelled
vehicle used to carry a payload from Earth's surface to
space, usually to Earth orbit or beyond. Our WEB-X
carrier rocket is the most powerful in operation.
Standing 150 metres tall, it's quite an awe-inspiring sight
on the launch pad!</p>
</legend>
        </article>

        <article>
            <img className='w-[32vw] max-sm:w-[70vw]' src={plane} alt="" />
        </article>
      </section>
    </div>
  )
}

export default Technology
