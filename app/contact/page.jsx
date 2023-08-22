import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Flag from "../../public/Img/contact.jpg"

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Let&apos;s Chat</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
        <Image src={Flag}
         alt='contactPng'
         fill={true}
         className={styles.img}
         />
        </div>
        <form className={styles.form}>
        <input type='text' placeholder='name' className={styles.input}/>
        <input type='text' placeholder='name' className={styles.input}/>
        <textarea 
        className={styles.textArea} 
        placeholder='message'
        cols="30"
        rows="10"
        />
        <button className={styles.button}>
          Send
        </button>
        </form>
      </div>
    </div>
  )
}

export default Contact