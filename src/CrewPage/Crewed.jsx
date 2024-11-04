import React from 'react'
import myImage from '../Image/crew/background-crew-desktop.jpg'
import woman from '../Image/crew/image-anousheh-ansari.webp'
import loading from '../Image/crew/loading.png'

const Crewed = () => {
  return (
    <div>
      <section className='flex  max-sm:flex max-sm:flex-col justify-around text-white items-center bg-cover h-screen bg-[url()' style={{ backgroundImage: `url(${myImage})` }}>
        <article className='w-[40vw] flex flex-col gap-20 max-sm:gap-5 max-sm:w-[90vw]'>
          <div className='flex gap-4 text-[22px]'>
            <p className='text-zinc-500'>02</p>
            <p>MEET YOUR CREW</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-[30px] text-zinc-500'>FLIGHT ENGINEER</p>
            <p className='text-[50px]'>ANOUSHEH ANSARI</p>
            <p className='w-[32vw] max-sm:w-[90vw]'>Anousheh Ansari is an Iranian American engineer and co-
              founder of Prodea Systems. Ansari was the fourth self-
              funded space tourist, the first self-funded woman to fly
              to the ISS, and the first Iranian in space.</p>
          </div>
          <div>
          <img className='w-[5vw] max-sm:w-[10vw]' src={loading} alt="" />
          </div>
        </article>


        <article>
          <img className='w-[30vw] max-sm:w-[40vw]' src={woman} alt="" />
        </article>
      </section>
    </div>
  )
}

export default Crewed
