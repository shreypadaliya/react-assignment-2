import React, { useEffect } from "react";
import Mycard from "./Mycard";
import "../assets/styles/Imagecarousel.css";
import good4me1 from "../assets/imgs/good4me1.png";
import good4me2 from "../assets/imgs/good4me2.png";
import good4me3 from "../assets/imgs/good4me3.png";
import good4me4 from "../assets/imgs/good4me4.png";
import good4me5 from "../assets/imgs/good4me5.png";
import good4me6 from "../assets/imgs/good4me6.png";
// import { IoIosArrowBack } from "react-icons/io";

const Imagecarousel = () => {
  let box;

  useEffect(() => {
    box = document.querySelector(".product-container");

    return () => {};
  }, []);

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (
    <div className="product-carousel">
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>
      <div className="product-container">
        
        <Mycard imageSrc={good4me1} />
        <Mycard imageSrc={good4me2} />
        <Mycard imageSrc={good4me3} />
        <Mycard imageSrc={good4me4} />
        <Mycard imageSrc={good4me5} />
        <Mycard imageSrc={good4me6} />
        <Mycard imageSrc={good4me3} />
        <Mycard imageSrc={good4me1} />
        <Mycard imageSrc={good4me6} />
        <Mycard imageSrc={good4me5} />
        <Mycard imageSrc={good4me4} />
        <Mycard imageSrc={good4me6} />
        <Mycard imageSrc={good4me2} />
      </div>
    </div>
  );
};

export default Imagecarousel;
