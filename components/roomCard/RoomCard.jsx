import React from 'react'
import styles from "./roomcard.module.css"
import Image from 'next/image'
const RoomCard = ({img,No,title,desc,status}) => {
  return (
    <div className={styles.card}>
    <div className={styles.item}>
    <Image
     alt=""
     src={img}
      fill={true}
      className="img"/>
  <span className={styles.span}>{No}</span>
    </div>
    <div className={styles.info}>
    <h1>{title}</h1>
    <p>{desc}</p>
    <p>{status}</p>
    </div>
    </div>
  )
}

export default RoomCard