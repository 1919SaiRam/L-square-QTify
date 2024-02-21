// import React from "react";
import React, { useState, useEffect } from "react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/Group 3741.svg";
import { useSwiper } from "swiper/react";

function CurousalLeftNavigation () {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
       swiper.on("slideChange", function(){
          setIsBeginning(swiper.isBeginning);
    })
}, [swiper]);
return (
    <div className={styles.leftNavigation}>
        {!isBeginning &&  <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
)

}

export default CurousalLeftNavigation;