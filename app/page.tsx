import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Flag from "../public/Img/home.jpg"

export default function HomePage(){
    return(
        <div className={styles.container}>
            <div className={styles.item}>
           <h1 className={styles.title}>Welcome to hotel</h1>
           <p className={styles.desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <button className={styles.button}> Get started</button>
            </div>
            <div className={styles.item}>
            <Image src={Flag} className={styles.img}  alt="homeBanner"/>
            </div>

        </div>
    );
}