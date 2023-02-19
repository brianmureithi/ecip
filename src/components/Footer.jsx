import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {SocialIcon}from 'react-social-icons'


function Footer() {
  return (
    <div className='w-full h-[8vh] absolute mt-[225rem] ' >
      <div  className='w-full h-full bg-sky-500 relative  flex flex-row items-center justify-center  '>
      <p className='flex flex-row text-slate-100'>Developed with <span className='text-red-500 px-2 py-1 shadow-lg'><AiFillHeart/></span> for Humanity &copy; 2023</p>
      
      <div className="flex flex-row   justify-end px-4  w-max absolute right-2">
           <SocialIcon style={{width:'2rem',height:'2rem'}} className='mx-1 bg-white overflow-hidden rounded-full transition ease-in-out hover:scale-110' url='https://twitter.com'/>
                       <SocialIcon style={{width:'2rem',height:'2rem'}}  className='mx-1 bg-white overflow-hidden rounded-full transition ease-in-out hover:scale-110' url='https://instagram.com'/>
                       <SocialIcon style={{width:'2rem',height:'2rem'}} className='mx-1 bg-white overflow-hidden rounded-full transition ease-in-out hover:scale-110' url='https://facebook.com'/>
                       <SocialIcon style={{width:'2rem',height:'2rem'}} className='mx-1 bg-white overflow-hidden rounded-full transition ease-in-out hover:scale-110' url='https://linkedin.com'/>
    </div>
      </div>
    

    

    </div>
  )
}

export default Footer