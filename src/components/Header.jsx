import React, { useEffect, useState } from 'react'
import amerikaMap from '../assets/imgs/svgs/amerika.svg'
import search from '../assets/imgs/svgs/search.svg'
import basket from '../assets/imgs/svgs/basket.svg'
import Logo from '../assets/imgs/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    return (
        <div className='fixed left-0 top-0 w-full z-[999]'>
            <div className='w-full flex justify-between items-center py-[15px] lg:px-[120px] md:px-[60px] px-[30px] bg-[#F6623F] text-white'>
                <div className='md:block hidden'>
                    <span className='lg:text-[16px] text-[14px]' style={{ marginLeft: 10 }}>Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</span>
                </div>
                <div className='flex items-center md:justify-start justify-between w-full md:w-auto'>
                    <div>
                        <span>
                            <a href="#" className='lg:text-[16px] text-[14px]'>Sign In</a>
                        </span>
                        <span className='mx-[5px]'>/</span>
                        <span><a href="#" className='lg:text-[16px] text-[14px]'>Register</a></span>
                    </div>
                    <div className='w-[2px] h-[27px] opacity-30 bg-white mx-[23px]'>
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <img src={amerikaMap} alt="" width={24} height={16} />
                        </div>
                        <div className='flex items-center'>
                            <span className='ms-[7px] me-[3px]'>USD</span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none">
                                <path d="M0 0L4 4L7.99997 0H0Z" fill="white" />
                            </svg></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:px-[120px] md:px-[60px] px-[30px] py-[28px] flex justify-between items-center bg-[#FFFFFF] border-b-[#E0E0E0] border-b-[1px]'>
                <div>
                    <a href="#">
                        <img src={Logo} alt="Logo" width={198} height={47} />
                    </a>
                </div>
                <div className='nav flex justify-between'>
                    <ul className='grid w-full md:grid-cols-6 grid-cols-1 gap-y-[55px]'>
                        <li className='uppercase md:text-[18px] text-[16px]'>
                            <a href="#">Home</a>
                        </li>
                        <li className='uppercase md:text-[18px] text-[18px]'>
                            <a href="#">Shop</a>
                        </li>
                        <li className='uppercase md:text-[18px] text-[16px]'>
                            <a href="#">Faq's</a>
                        </li>
                        <li className='uppercase md:text-[18px] text-[16px]'>
                            <a href="#">Stocklist</a>
                        </li>
                        <li className='uppercase md:text-[18px] text-[16px] ms-8 '>
                            <a href="#">Wholesale</a>
                        </li>
                        <li className='uppercase md:text-[18px] text-[16px] ms-12'>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center md:ms-[45px]'>
                    <span>
                        <a href="#">
                            <img src={search} alt="" />
                        </a>
                    </span>
                    <span className='ms-[15px] relative'>
                        <a href="#">
                            <img src={basket} alt="" />
                            <span className='bg-[#F6623E] text-[#fff] font-medium translate-x-[-50%] translate-y-[-50%]  absolute left-[100%] top-0 text-[14px] rounded-[10px] px-[5px]'>{0}</span>
                        </a>
                    </span>
                </div>
                <div className='md:hidden block'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>
    )
}

export default Header
