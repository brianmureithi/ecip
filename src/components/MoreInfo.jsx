import React from 'react'

function MoreInfo() {
  return (
  
<div className='w-full h-[160vh] bg-sky-500 absolute mt-[99rem] flex flex-col items-center justify-center '>
  <div className='pb-[6rem] text-[1.8rem] text-sky-100'>
  <h1 className='font-sans '>More About ECIP</h1>
  </div>

  <div className='flex flex-wrap flex-row w-full  items-center justify-evenly  pb-[1rem]'>
  <div className='border-[2.1px] border-sky-50 w-[25%] h-[80vh] rounded shadow-md flex flex-col justify-start items-center hvr-float transition ease-in-out duration-500 hover:bg-sky-400 cursor-pointer'>
  <object className='drop-shadow-xl  pb-8 fill-sky-50 stroke-none rounded-full bg-orange-600  text-slate-50 w-[7rem] h-[7rem] mt-14 ring ring-sky-50 ring-opacity-80  ' data="./images/operate.svg" > </object>
  <div className=' w-[88%] mt-20'>
  <p className='text-[1.03rem] text-sky-50 leading-7 tracking-wide px-2'>E.C.I.P operates primarily in Tharaka-Nithi county. This area has been adversely affected by HIV leaving many orphaned. The effects of the Covid-19 are still very much evident with many lacking the basic needs. ECIP caters for these orphans by providing a meal, 
    physcological, and psychosocial needs through counselling, emergency response, care, aimed at improving them wholisticly.  </p>
</div>
  </div>

  <div className='border-[2.1px] border-sky-50 w-[25%] h-[80vh] rounded shadow-md flex flex-col justify-start items-center hvr-float transition ease-in-out duration-500 hover:bg-sky-400 cursor-pointer'>
  <object className='drop-shadow-xl  pb-8 fill-sky-50 stroke-none rounded-full bg-orange-600  text-slate-50 w-[7rem] h-[7rem] mt-14 ring ring-sky-50 ring-opacity-80 ' data="./images/volunteer.svg" > </object>
  <div className=' w-[88%] mt-20'>
  <p className='text-[1.03rem] text-sky-50 leading-7 tracking-wide px-2'>ECIP collaborates with local stakeholders, communities, volunteers, and experts to provide crucial support to vulnerable members. This includes counseling, emergency response, and care for orphans and teenage mothers. Together with the church and other entities, ECIP empowers the most vulnerable individuals by providing necessary resources and support for a brighter future.</p>
</div>
  </div>
  <div className='border-[2.1px] border-sky-50 w-[25%] h-[80vh] overflow-y-clip rounded shadow-md flex flex-col justify-start items-center hvr-float transition ease-in-out duration-500 hover:bg-sky-400 cursor-pointer'>
  <object className='drop-shadow-xl  pb-8 fill-sky-50 stroke-none rounded-full bg-orange-600  text-slate-50 w-[7rem] h-[7rem] mt-14 ring ring-sky-50 ring-opacity-80  '  data="./images/eathling.svg" > </object>
  <div className=' w-[88%] mt-20'>
  <p className='text-[1.03rem] text-sky-50 leading-7 tracking-wide px-2 pb-6'> ECIP is a platform that facilitates giving and support to disadvantaged children affected by HIV or orphaned. The organization provides various services such as counseling, emergency response, and care to improve their well-being and bring back their lost smiles. ECIP believes in the importance of giving and gratitude and is motivated
  by its desire to make a positive impact on the lives of these children and empower them for a better future.
   </p>
</div>
  </div>
 
  </div>
 

</div>
  )
}

export default MoreInfo