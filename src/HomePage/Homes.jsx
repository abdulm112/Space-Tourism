import React from 'react'
import myImage from '../Image/home/background.jpg'

const Homes = () => {
  return (
    <div>
      <section className='max-sm:flex-col text-white flex justify-around items-center bg-cover h-screen bg-[url()' style={{ backgroundImage: `url(${myImage})` }}>
        <legend className='w-[40vw] max-sm:w-[90vw] max-sm:flex max-sm:flex-col gap-10'>
          <p className='text-[25px]'>SO, YOU WANT TO TRAVEL TO <span className='text-[10vw] max-sm:text-[20vw] max-sm:pl-10'>SPACE</span></p>
          <p className='text-[17px] w-[30vw] max-sm:w-[90vw]'>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the
            edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience!</p>
        </legend>
        <legend>
          <div className='bg-white text-black p-16 text-center rounded-[50%] max-sm:p-20'>
            <button>EXPLORE</button>
          </div>
        </legend>
      </section>
    </div>
  )
}

export default Homes
