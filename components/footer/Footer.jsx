import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

function Footer() {
  return (
    <div className={styles.container}>
      <div>
      Copyright 2023©
      </div>
      <div className={styles.social}>
       <Image src='/Img/1.png' width={25} height={25} className={styles.icon} alt='github'/>
       <Image src='/Img/2.png' width={25} height={25} className={styles.icon} alt='twitter'/>
       <Image src='/Img/3.png' width={25} height={25} className={styles.icon} alt='linkedin'/>
      </div>
    </div>
  )
}

export default Footer