import React from 'react'

function Navbar() {
  return (
    <nav className='h-[10vh] flex flex-row justify-evenly border-b border-b-sky-300 ' >
        <div className='flex items-center '>
            <h1 className='text-2xl font-bold tracking-widest text-orange-500'>E.C.I.P</h1>
        </div>
        <div className='flex flex-row justify-evenly w-1/4 items-end'>
            <p className='bg-sky-500 text-slate-100 px-2 py-1 hover:bg-sky-600 cursor-pointer rounded-t-md'>Home</p>
            <p className='bg-sky-500 text-slate-100 px-2 py-1 hover:bg-sky-600 cursor-pointer rounded-t-md'>About us</p>
            <p className='bg-sky-500 text-slate-100 px-2 py-1 hover:bg-sky-600 cursor-pointer rounded-t-md'>Contacts</p>
                </div>

    </nav>
  )
}

export default Navbar