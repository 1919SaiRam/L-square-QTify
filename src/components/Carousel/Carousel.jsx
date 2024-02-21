// import React from "react";
import React, { useEffect } from "react";

import {Navigation,} from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import styles from "./Carousel.module.css";
//Import swiper styles
import 'swiper/css';
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";


const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    }, [data, swiper]);
    return<></>;
}

function Carousel({ data, renderComponent }) {
    return (
        <div className={styles.wrapper}>
            <Swiper
                // install swiper modules
                style={{padding: "0px 20px"}}
                initialState={0}
                modules={[Navigation]}
                spaceBetween={40}
                slidesPerView={"auto"}
                allowTouchMove 
                >
                    <Controls data={data} />
                    <CarouselLeftNavigation/>
                    <CarouselRightNavigation/>
                    {data.map((ele,idx) => (
                        <SwiperSlide key={idx}>{renderComponent(ele)}</SwiperSlide>

                    ))}
                </Swiper>
        </div>
    )

}
export default Carousel;