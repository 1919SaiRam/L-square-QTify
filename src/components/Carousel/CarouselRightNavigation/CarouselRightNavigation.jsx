// import React from "react";
import React, { useState, useEffect } from "react";
import styles from "./CarouselRightNavigation.module.css";
import { ReactComponent as RightArrow } from "../../../assets/Group 3740.svg";
import { useSwiper } from "swiper/react";

function CarouselRightNavigation () {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
       swiper.on("slideChange", function(){
          setIsEnd(swiper.isEnd);
    })
}, [swiper]);
return (
    <div className={styles.rightNavigation}>
        {!isEnd &&  <RightArrow onClick={() => swiper.slideNext()} />}
    </div>
)

}

export default CarouselRightNavigation;