import React from 'react'
import myImage from '../Image/destination/background.jpg'
import bg from '../Image/destination/image-mars.webp'

const Destin = () => {
  return (
    <div>
      <section className='flex max-sm:flex max-sm:flex-col items-center justify-around   bg-cover h-screen bg-[url()' style={{ backgroundImage: `url(${myImage})` }}>
        <article className='text-white w-[40vw] flex lg:flex-col gap-20 max-sm:flex max-sm:justify-between max-sm:w-[95vw] max-sm:gap-5'>
          <div className='flex gap-4 text-[22px] max-sm:text-[20px] max-sm:gap-2 max-sm:w-[20vw] items-center'>
            <p className='text-zinc-500'>01</p>
            <p>PICK YOUR DESTINATION</p>
          </div>
          <div>
            <img className='w-[30vw] max-sm:w-[55vw] ' src={bg} alt="" />
          </div>
        </article>


        <article className='text-white w-[40vw] flex flex-col gap-5 max-sm:w-[90vw]'>
          <div className='flex gap-6 max-sm:gap-12'>
            <p>MOON</p>
            <p>MARS</p>
            <p>EUROPA</p>
            <p>TITAN</p>
          </div>
          <div className='text-[10vw] max-sm:text-[20vw] max-sm:pl-10'>
            <h1>MARS</h1>
          </div>
          <div>
            <p className='text-[17px] w-[30vw] max-sm:w-[90vw]'>
              Don't forget to pack your hiking boots. You'll need them
              to tackle Olympus Mons, the tallest planetary mountain in
              our solar system. It's two and a half times the size of
              Everest!
            </p>
          </div>
          <div>
            <hr className='w-[30vw] max-sm:w-[90vw]' />
          </div>
          <div className='flex gap-20'>
            <legend className='flex flex-col'>
              <p className='text-zinc-500 text-[14px]'>AVG. DISTANCE</p>
              <p className='text-[22px]'>225 MIL. KM</p>
            </legend>
            <legend className='flex flex-col'>
              <p className='text-zinc-500 text-[14px]'>EST. TRAVEL TIME</p>
              <p className='text-[27px]'>9 MONTHS</p>
            </legend>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Destin
