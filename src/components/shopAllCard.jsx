import React from 'react'

const ShopAllCard = ({ data }) => {
    return (
        <div>
            <div className='relative h-[337px] bg-[#E8E8E8] flex justify-center items-center' style={{width:"350px"}}>
                <span className='absolute right-[11px] top-[11px] px-[9px] py-[5px] bg-[#F6623E] text-[10px] uppercase text-white' style={{top:"5px",right:"9px"}}>On Sale</span>
                <img src={data.img} alt="" className='h-full' style={{width:"350px"}}/>
            </div>
            <div className='flex flex-col items-center mt-[20px]'>
                <div className='flex justify-center'>
                    <span className='text-[14px] mb-[7px] text-center font-medium tracking-[1px]'>{data.title}</span>
                </div>
                <div>
                    <span className='text-[14px] text-[#F6623E] '>${data.newPrice} NZD</span>
                    <span className='mx-[20px] text-[14px] text-[#828181] line-through'>${data.price} NZD</span>
                </div>
            </div>
        </div>
    )
}

export default ShopAllCard
