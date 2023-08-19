import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const Category = ({params}) => {
    console.log(params)
  return (
    <div className={styles.container}>
        <h1 className={styles.catTitle} >{params.category}</h1>
        <div className={styles.item}>
            <div className={styles.content}>
            <h1 className={styles.title}> test</h1>
            <p className={styles.desc}> desc</p>
            <button className={styles.button}> See more</button>
            </div>
            <div className={styles.imgContainer}>
            <Image 
            src='https://images.pexels.com/photos/9585588/pexels-photo-9585588.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
            alt=''
            fill={true}
            className={styles.img}
            />
            </div>
        </div>
        <div className={styles.item}>
            <div className={styles.content}>
            <h1 className={styles.title}> test</h1>
            <p className={styles.desc}> desc</p>
            <button className={styles.button}> See more</button>
            </div>
            <div className={styles.imgContainer}>
            <Image 
            src='https://images.pexels.com/photos/9585588/pexels-photo-9585588.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'
            alt=''
            fill={true}
            className={styles.img}
            />
            </div>
        </div>
    </div>
  )
}

export default Category