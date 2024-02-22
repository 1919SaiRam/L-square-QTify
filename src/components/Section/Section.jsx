import React, {useEffect, useState } from "react";
import styles from "./Section.module.css";
import { CircularProgress} from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";
// import {Filters} from "@mui/icons-material";

export default function Section({ title, data,filterSource, type}) {
    const [carouselToggle, setCarouselToggle] = useState(true);
    const [filters, setFilters] = useState([{key: "all", label: "All"}])
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0)

    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);

    }
    // useEffect(() => {
    //     if(filterSource) {
    //         filterSource().then((response) => {
    //             const { data } = response;
    //             // setFilters([...filters, ...data]);
    //             setFilters((prevFilters) => [...prevFilters, ...data]); // Use functional update to avoid stale closure
    //         })
    //     }
    // }, [filterSource]);
    useEffect(() => {
        if (filterSource) {
            filterSource().then((response) => {
                const { data } = response;
                setFilters((prevFilters) => [...prevFilters, ...data]);
            });
        }
    }, [filterSource]); // Adding filterSource as a dependency
    

    const showFilters = filters.length > 1;
    // console.log(data);
    // const cardToRender = data.filters((card) => showFilters && selectedFilterIndex !== 0 ? card.genre.key ===
    // filters[selectedFilterIndex].key : card);
    const cardToRender = data.filter((card) => showFilters && selectedFilterIndex !== 0 ? card.genre.key === filters[selectedFilterIndex].key : true);


    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                {!showFilters && (<h4 className={styles.toggleText} onClick={handleToggle}>
                    {/* (!carouselToggle ? "Collapse All": "Show All") */}
                    {!carouselToggle ? "Collapse All" : "Show All"}
                </h4>)}   
            </div>
            {showFilters && (
                <div className={styles.filterswrapper}>
                        <Filters
                            filters={filters}
                            selectedFilterIndex={selectedFilterIndex}
                            setSelectedFilterIndex={setSelectedFilterIndex}
                        />
                </div>
            )}
            {cardToRender.length === 0 ? (
                <CircularProgress />
            ):(
                <div className={styles.cardWrapper}>
                   {!carouselToggle ? (
                      <div className={styles.wrapper}>
                        {cardToRender.map((ele, index) => (
                            <Card key={index} data={ele} type={type} />
                        ))}
                      </div>
                   ): (
                     // Carousel logic will come here
                     <Carousel
                     data={cardToRender}
                     renderComponent={(d) => <Card data={d} type={type} />}
                     />
                   )}    
                </div>     

            )}
        </div>
    )

}

