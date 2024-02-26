import React from "react";
import styles from "./Search.module.css";
// import { ReactComponent as SearchIcon } from "../../assets/searchbar.svg";
import { ReactComponent as SearchIcon } from "../../assets/Search icon.svg";

function Search( {placeholder }) {
    const  onSubmit = (e) => {
        e.preventDefault();
        // process some form logic here in future
    }
    return(
        <form className={styles.wrapper} onSubmit={onSubmit}>
            <input className={styles.search} placeholder=
            {placeholder} required />
            <button className={styles.searchButton}type="submit">
                <SearchIcon/>
            </button>
        </form>
    )
}
export default Search;
