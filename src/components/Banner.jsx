import React from 'react'

function Banner() {
  return (
    <div className='h-[50vh]' >
      <div className='border-b h-full border-b-black bg-gradient-to-tr from-orange-400 to-orange-300 w-full  absolute clip-banner
    flex flex-row flex-nowrap justify-between mb-8 pt-[8rem] -z-10'>
       <div className='w-1/2 h-full flex flex-col justify-start items-center'>
        <h1 className='text-[2.4rem] font-bold text-orange-50 tracking-wide font-sans'>Esther Child Integrated Program</h1>
        <div className='w-[85%] mt-6'>
        <p className='font-sans leading-8 text-center text-lg font-normal text-orange-100 tracking-wide'>A non-profit making organization that seeks to uplift and enhance the welfare of orphans and vulnerable children.</p>
        </div>
       
      </div>

      </div>
     
      <div className='w-1/2  flex flex-row justify-end items-end  mx-2 z-50 absolute right-2 bottom-8 pr-8 '>
  
        <div className='h-[10rem] w-[10rem] ring-4 ring-sky-500 ring-opacity-40 hover:ring-opacity-80 hover:scale-105 transition ease-in-out duration-150  z-50 rounded-full' >      
        <img src="./images/img.jpeg" className='object-fill h-[10rem] w-[10rem] rounded-full'/>
        </div>

      </div>
        
             

    </div>
  )
}

export default Banner