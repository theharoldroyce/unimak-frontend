import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import Banner from "../../../Assests/unimakbann.png"

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(${Banner})`,

      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%] `}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Your One-Stop Shop for <br /> Construction Needs
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
        At our construction store, we strive to empower builders and enthusiasts alike, by offering an extensive range of top-quality tools,
         <br /> reliable materials, and a wealth of industry expertise, all aimed at unlocking the full potential of your{" "}
          <br /> construction projects and helping you achieve remarkable results that stand the test of time
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5 `}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
