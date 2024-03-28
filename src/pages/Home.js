import React from "react";

// Pictures
import waveBottum from "../imgs/wave-bottum.png";
import waveTop from "../imgs/wave-top.png";
import air from "../svgs/air.svg";
import purse from "../svgs/purse.svg";
import moneyNote from "../svgs/moneyNote.svg";
import point from "../svgs/point.svg";
import Rectangle17 from "../imgs/Rectangle17.png";
import Rectangle18 from "../imgs/Rectangle18.png";
import star from "../svgs/star.svg";
import emptyStar from "../svgs/emptyStar.svg";
import realReviewsImg from "../imgs/realReviewsImg.png";
import good4me1 from "../imgs/good4me1.png";
import good4me2 from "../imgs/good4me2.png";
import good4me3 from "../imgs/good4me3.png";
import good4me4 from "../imgs/good4me4.png";
import good4me5 from "../imgs/good4me5.png";
import good4me6 from "../imgs/good4me6.png";
import iron from "../imgs/1 1.png";
import slideshowp1 from "../imgs/slideshowp1.svg";
import slideshowp2 from "../imgs/slidershowp2.svg";

// Data
import dealData from "../data/dealData.js";
import ourProductsData from "../data/ourProductsData.js";
import shopAllData from "../data/shopAllData.js";
import latesNewsData from "../data/latestNewsData.js";

// Components
import Header from "../components/Header.jsx";
import DealCard from "../components/dealCard.jsx";
import OurFeatuesCard from "../components/OurFeatuesCard.jsx";
import OurProductsCard from "../components/OurProductsCard.jsx";
import ShopAllCard from "../components/shopAllCard.jsx";
import LatesNewsCard from "../components/latesNewsCard.jsx";

const Home = () => {
  return (
    <div>
      <>
        <Header />
      </>
      {/* Apple Cider vinegar */}
      {/* <div className='w-full  mt-[150px] flex flex-col  justify-end items-end  bg-[#FEF0E7]'>
                <div className='flex md:flex-row flex-col items-center w-full py-[40px] '>
                    <div className='md:w-1/2 w-full flex justify-center me-[15px]'>
                        <img src={iron} alt="" />
                    </div>
                    <div className='flex flex-col md:item-start items-center md:p-0 px-[80px] md:w-1/2 w-full md:mt-0 mt-[30px] mb-[75px]'>
                        <span className='text-[#F6623F] text-[26px] font-semibold font-Jost'>Good4Me</span>
                        <span className='ld:text-[56px] md:text-[40px] font-semibold'>Apple Cider Vinegar</span>
                        <p className='mt-[10px] text-[16px] lg:w-[70%] md:w-[90%] text-[#454545] md:text-start text-center'>Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime. </p>
                        <div className='mt-[35px]'>
                            <a href='#' className='bg-[#F6623E] px-[25px] py-[13px] text-[16px] uppercase text-white font-medium'>Show now</a>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={waveBottum} alt="" height={130}/>
                </div>
            </div> */}

      <div className="w-full mt-[150px] flex flex-col justify-end items-end">
        <div
          className="items-center w-full"
          style={{ backgroundColor: "#FEF0E7" }}
        >
          <div className="home-image w-full flex justify-center">
            <img src={iron} alt="" />
          </div>
        </div>

        <div
          className="details flex flex-col md:item-start items-center h-full md:p-0 px-[80px] md:w-1/2 w-full md:mt-0 mt-[30px] mb-[75px]"
          style={{
            alignItems: "start",
            height: "58%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <span className="text-[#F6623F] text-[26px] font-semibold font-Jost">
            Good4Me
          </span>
          <span className="ld:text-[56px] md:text-[40px] font-semibold">
            Apple Cider Vinegar v bhnfbfjgbvj
          </span>
          <p className="mt-[10px] text-[16px] lg:w-[70%] md:w-[90%] text-[#454545] md:text-start text-center">
            Good4Me Apple Cider Vinegar gummies are the newest addition to your
            morning health and well-being regime.{" "}
          </p>
          <div className="mt-[35px]">
            <a
              href="#"
              className="bg-[#F6623E] px-[25px] py-[13px] text-[16px] uppercase text-white font-medium"
            >
              Show now
            </a>
          </div>
        </div>

        <div className="mainbottom absolute ">
          <img src={waveBottum} alt="" height={130} />
        </div>
      </div>
      {/* Apple Cider vinegar */}

      {/* Good4Me Deal */}
      <div className="lg:mx-[120px] md:px-[60px] px-[30px] mt-[66px] flex flex-col items-center">
        <div className="flex flex-col items-center">
          <span className="text-[36px] font-medium">GOOD4ME DEAL </span>
          <div className="w-[127px] h-[4px] bg-[#F6623E] mt-[20px] mb-[25px]">
            {/*Line*/}
          </div>
          <p className="w-[85%] text-center text-[18px] text-[#454545] font-medium">
            Pick your beauty products today. 50% OFF on the most popular
            GOOD4ME. Order all classy products today!
          </p>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[32px] mt-[36px]">
          {dealData.map((item) => (
            <DealCard data={item} />
          ))}
        </div>
      </div>
      {/* Good4Me Deal */}

      {/* Our features */}
      <div className="my-[135px] md:w-[70%] w-full md:px-0 px-[30px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-x-[130px] gap-y-[50px]">
        <OurFeatuesCard
          svgs={air}
          svgsPoint={point}
          title="WORLDWIDE SHIPPING"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean"
        />
        <OurFeatuesCard
          svgs={purse}
          title="30 DAYS GUARANTEE"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean"
        />
        <OurFeatuesCard
          svgs={moneyNote}
          svgsPoint={point}
          title="SECURED PAYMENTS"
          text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean"
        />
      </div>
      {/* Our features */}

      {/* TAKE CONTROL OF YOUR HEALTH */}
      <div
        className="lg:px-[120px] md:px-[60px] px-[30px] flex md:flex-row flex-col items-center bg-[#FFF8F6]"
        style={{ width: "65%", padding: "0 0 0 8rem" }}
      >
        <div
          className="bg-[#FFF8F6] md:w-1/2 w-full h-[50%] md:pe-[80px] flex flex-col justify-center"
          style={{ paddingTop: 30, paddingBottom: 30 }}
        >
          <span className="text-[45px] font-semibold md:text-start text-center">
            TAKE CONTROL OF <br />
            YOUR HEALTH
          </span>
          <div className="mt-[17px] ">
            <p className="text-[15px] md:text-start text-center text-[#454545] font-medium">
              The Good4Me range has been formulated based on scientific & <br />
              traditional evidence.
            </p>
            <p className="text-[15px] md:text-start text-center text-[#454545] font-medium my-[12px]">
              Our vitamins are here and ready to boost your mood, immunity and{" "}
              <br />
              overall well-being!
            </p>
            <p className="text-[15px] md:text-start text-center text-[#454545] font-medium">
              Made in New Zealand from local and imported ingredients.
            </p>
          </div>
          <div className="mt-[34px] flex md:justify-start justify-center">
            <a
              href="#"
              className="py-[13px] px-[45px] border-[2px] border-[#F6623E] text-[16px] font-medium"
            >
              BROWSE OUR RANGE
            </a>
          </div>
        </div>

        <div
          className="flex sm:flex-row flex-col items-center h-full md:w-1/2 w-full md:mt-0 mt-[35px]"
          style={{ display: "flex", justifyContent: "end" }}
        >
          <div className="h-full">
            <img
              src={Rectangle17}
              alt=""
              width={430}
              height={330}
              className="h-1/2"
            />
            <img
              src={Rectangle18}
              alt=""
              width={430}
              height={320}
              className="pt-[30px] h-1/2"
            />
          </div>
          {/* <div className='sm:w-1/2 w-full h-[100%] sm:ms-[28px] ms-0 sm:mt-0 mt-[30px] bg-fuchsia-400'>
                        <img src={Rectangle16} alt="" width={590} className='h-full' />
                    </div> */}
        </div>
      </div>
      {/* TAKE CONTROL OF YOUR HEALTH */}

      {/* Our Products Are */}
      <div className="lg:px-[120px] md:px-[60px] px-[30px] mt-[135px] flex flex-col items-center">
        <div>
          <span className="text-[36px] font-medium">OUR PRODUCTS ARE</span>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] my-[60px]">
          {ourProductsData.map((item) => (
            <OurProductsCard data={item} />
          ))}
        </div>
        <div>
          <a
            href="#"
            className="border-[2px] border-[#F6623E] px-[45px] py-[15px] text-[16px] font-medium"
          >
            VIEW ALL PRODUCTS
          </a>
        </div>
      </div>
      {/* Our Products Are */}

      {/* Real Reviews */}
      <div className="w-full bg-[#FEF0E7] my-[85px]">
        <div>
          <img src={slideshowp2} alt="" />
        </div>
        <div className="pt-[70px] lg:px-[200px] md:px-[60px] px-[30px]  pb-[45px] flex md:flex-row flex-col-reverse justify-between">
          <div className="md:w-3/5 w-full flex flex-col md:mt-0 mt-[30px] justify-between md:items-start items-center">
            <span className="text-[20px] font-medium">REAL REVIEWS</span>
            <span className="text-[30px] font-medium text-[#F6623E]">
              REAL RESULTS
            </span>
            <div className="flex my-[10px]">
              <img src={star} alt="" />
              <img src={star} alt="" className="mx-[4px]" />
              <img src={star} alt="" />
              <img src={star} alt="" className="mx-[4px]" />
              <img src={emptyStar} alt="" />
            </div>
            <p className="text-[26px] tracking-[1px] font-medium md:text-start text-center my-[5px]">
              “We have perfected our formulas over time,
              <br /> based on your feedback. Check out hundreds of <br />
              reviews on our website.We can't wait until you <br />
              are a part of our Good4Me Family.”
            </p>
            <span className="text-[16px] font-semibold text-[#F6623E]">
              _Chloe H.
            </span>
            <div className="flex my-[10px]">
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <g clip-path="url(#clip0_46_411)">
                  <path
                    d="M41.25 0H2.75C1.23337 0 0 1.23337 0 2.75V41.25C0 42.7666 1.23337 44 2.75 44H41.25C42.7666 44 44 42.7666 44 41.25V2.75C44 1.23337 42.7666 0 41.25 0ZM41.25 41.25L2.75 41.2514V2.75H41.25V41.25Z"
                    fill="#828181"
                  />
                  <path
                    d="M27.097 14.7221L25.1527 12.7778L16.9027 21.0278C16.3651 21.5654 16.3651 22.4345 16.9027 22.9721L25.1527 31.2221L27.097 29.2778L19.8191 21.9999L27.097 14.7221Z"
                    fill="#828181"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="md:w-2/5 w-full md:ms-[100px] flex justify-center ">
            <img src={realReviewsImg} alt="" width={535} height={535} />
          </div>
        </div>
        <div>
          <img src={slideshowp1} alt="" style={{ paddingBottom: "20px" }} />
        </div>
      </div>
      {/* Real Reviews */}

      {/* Shop All */}
      <div className="lg:px-[120px] md:px-[60px] px-[30px] flex flex-col items-center">
        <div>
          <span className="text-[36px] font-medium ">SHOP ALL</span>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] mt-[50px] mb-[60px]">
          {shopAllData.map((item) => (
            <ShopAllCard data={item} />
          ))}
        </div>
        <div>
          <a
            href="#"
            className="px-[45px] py-[15px] border-[2px] border-[#F6623E] text-[16px] font-medium"
          >
            VIEW ALL PRODUCTS
          </a>
        </div>
      </div>
      {/* Shop All */}

      {/* LATEST NEWS */}
      <div className="lg:w-[65%] w-[90%] mx-auto my-[115px]">
        <div className="flex justify-center">
          <span
            className="text-[36px] font-medium"
            style={{ paddingBottom: "13px" }}
          >
            LATEST NEWS
          </span>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-[15px] gap-y-[45px] mt-[18px]">
          {latesNewsData.map((item) => (
            <LatesNewsCard data={item} />
          ))}
        </div>
      </div>
      {/* LATEST NEWS */}

      {/* #Good4Me */}
      <div className="w-full">
        <div className="flex justify-center">
          <span className="text-[36px] font-medium">#GOOD4ME</span>
        </div>
        <div className="w-full grid lg:grid-cols-6 md:grid-cols-3 gap-[30px] md:px-0 sm:px-[40px] mt-[40px]">
          <img src={good4me1} alt="" className="h-full w-full" />
          <img src={good4me2} alt="" className="h-full w-full" />
          <img src={good4me3} alt="" className="h-full w-full" />
          <img src={good4me4} alt="" className="h-full w-full" />
          <img src={good4me5} alt="" className="h-full w-full" />
          <img src={good4me6} alt="" className="h-full w-full" />
        </div>
      </div>
      {/* #Good4Me */}
    </div>
  );
};

export default Home;
