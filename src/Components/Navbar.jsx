import React, { useState } from 'react'
import moon from '../Image/home/moon.png'
import menu from '../Image/menu.png'


const Navbar = () => {
  const [isopen, setIsopen] = useState(false)
  return (
    <div>
      <section className='items-center p-5 text-white flex justify-around max-sm:justify-between max-sm:p-2' style={{
        background: 'linear-gradient(130deg, #050622 15%, #0a0d36 40%, #1b2746 60%, #273956 70%, #3d4f67 85%, #50638a 100%)',
      }}>
        <article className=''>
          <img className='w-[5vw] max-sm:w-[16vw]' src={moon} draggable='false' alt="" />
        </article>
        <article className={`flex ${isopen ? 'flex' : 'hidden'} lg:flex max-sm:absolute max-sm:top-20  max-sm:right-0 max-sm:left-0`}>
          <ul className='flex gap-24 max-sm:flex-col border-zinc-400 rounded-md border-2 border-solid max-sm:mb-10 p-5 shadow-lg max-sm:w-[100vw] max-sm:rounded-b-[20px] max-sm:gap-10' style={{background: 'linear-gradient(130deg, #050622 15%, #0a0d36 40%, #1b2746 60%, #273956 70%, #3d4f67 85%, #50638a 100%)',}}>
            <li>
              <a className='flex gap-2' href="/">
                <span>00</span>
                <span>HOME</span>
              </a></li>
            <li>
              <a className='flex gap-2' href="/Destination">
                <span>01</span>
                <span>DESTINATION</span></a>
            </li>
            <li>
              <a className='flex gap-2' href="/Crew">
                <span>02</span>
                <span>CREW</span>
              </a>
            </li>
            <li>
              <a className='flex gap-2' href="/Tech">
                <span>03</span>
                <span>TECHNOLOGY</span>
              </a>
            </li>
          </ul>
        </article>
          <img className='lg:hidden max-sm:block w-[16vw] cursor-default' src={menu} draggable ='false' onClick={() => setIsopen(!isopen)} alt="" />
      </section>
    </div>
  )
}

export default Navbar
