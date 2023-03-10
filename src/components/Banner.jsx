import React from 'react'
import * as FaIcons from 'react-icons/fa'

function Banner() {
  return (
    <div className='h-[20vh] flex flex-row max-h-[30vh]' >
      <div className='border-b h-full border-b-black bg-gradient-to-tr from-orange-400 to-orange-300 w-full  absolute clip-banner
    flex flex-row flex-nowrap justify-between mb-8 pt-[8rem] '>
       <div className='w-1/2 h-full flex flex-col justify-start items-center'>
        <h1 className='text-[2.4rem] font-bold text-orange-50 tracking-wide font-sans'>Esther Child Integrated Program</h1>
        <div className='w-[85%] mt-6'>
        <p className='font-sans leading-8 text-center text-lg font-normal text-orange-100 tracking-wide'>A non-profit making organization that seeks to uplift and enhance the welfare of orphans and vulnerable children.</p>
        </div>

        <div className=' z-[90]'>
          <button className='z-90 mt-8 bg-sky-500 px-6 py-2 text-sky-100 rounded-full shadow-xl transition ease-in-out duration-150 text-base hover:scale-105 hover:bg-transparent 
          hover:border hover:border-sky-500 hover:text-sky-100'>
            Find out more
          </button>
        </div>
       
      </div>

      </div>
     
      <div className='w-1/2  h-[50vh] flex flex-col justify-end items-end  mx-2 z-50 absolute right-2 bottom-[2rem] pr-8 self-end  '>
  
        <div className='h-[10rem] w-[10rem] ring-4 ring-orange-300  hover:ring-opacity-90  hover:ring-orange-300 transition ease-in-out duration-300  z-50 rounded-full hover:scale-105' >      
        <img src="./images/img.jpeg" className='object-fill h-[10rem] w-[10rem] rounded-full' alt='Children banner'/>
        </div>
        <div className='w-full h-[20vh]  flex flex-row justify-end items-end  top-0 '>
        <div className="flex flex-row  mt-4 justify-end px-4  w-max">
                                <a href='https://web.facebook.com/?_rdc=1&_rdr' className='mr-3 text-xl text-sky-600 transition ease-in-out duration-150 hover:text-sky-500 hover:scale-125 cursor-pointer '><FaIcons.FaFacebookF/></a>
                                <a  href='https://web.twitter.com/?_rdc=1&_rdr' className='mr-3 text-lg text-sky-600 transition ease-in-out duration-150 hover:text-sky-500 hover:scale-125 cursor-pointer'> <FaIcons.FaTwitter/></a>

                                <a  href='https://web.youtube.com/?_rdc=1&_rdr' className='mr-3 text-lg text-sky-600 transition ease-in-out duration-150 hover:text-sky-500 hover:scale-125 cursor-pointer'><FaIcons.FaYoutube/> </a>
                                <a  href='https://web.instagram.com/?_rdc=1&_rdr' className='mr-3 text-lg text-sky-600 transition ease-in-out duration-150 hover:text-sky-500 hover:scale-125 cursor-pointer'>  <FaIcons.FaInstagramSquare/></a>
                            </div>

        </div>

      </div>
        
             

    </div>
  )
}

export default Banner