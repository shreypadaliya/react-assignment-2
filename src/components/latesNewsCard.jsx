import React from 'react'


const LatesNewsCard = ({ data }) => {

  console.log("data", data);


  return (
    <div key={data.id}>
      <div className='flex justify-center'>
        <img src={data.img} alt="" />
      </div>
      <div className='flex flex-col items-center mt-[20px]'>
        <span className='text-[12px] font-medium text-[#F6623E]' style={{paddingBottom:"5px"}}>{data.date}</span>
        <span className='my-[2px] text-[20px] font-medium text-center'>{data.title}</span>
        <p className='text-center text-[#828181] text-[15px] leading-[30px]'style={{paddingBottom:"5px"}}>{data.text}</p>
        <div className='mt-[20px]'>
          <a href="#" className='py-[12px] px-[24px] text-[16px] font-medium uppercase bg-[#F6623E] text-white'>Read more</a>
        </div>
      </div>
    </div>
  )
}

export default LatesNewsCard
