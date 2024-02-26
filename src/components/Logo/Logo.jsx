import React from "react";
import LogoImage  from "../../assets/Logo.png";
import styles from "./Logo.module.css";

function Logo(){
    // return <img className={styles.logoDiv} src = { LogoImage} alt = "logo" width={67} />;


    return(
        <>
          <div className={styles.logoDiv}><img  src={LogoImage} alt="logo" width={67}/></div>
        </>
    )

}

export default Logo;