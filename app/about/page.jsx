import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
         <Image src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt='imgbanner'
          fill={true}
          className={styles.img}
          />
          <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Placeholder title</h1>
          <h2 className={styles.imgDesc}> Placeholde description</h2>
          </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
        <h1 className={styles.title}>
        Placeholder title
        </h1>
        <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in scelerisque magna. Suspendisse mattis quam nec dui posuere, ac semper leo feugiat. Nulla leo turpis, posuere non libero nec, tempor porta dolor. Aliquam nisl lorem, blandit in pretium in, finibus at nisi. Aliquam mollis quam sem, ut tincidunt augue venenatis in. Aliquam scelerisque pulvinar justo vitae volutpat. Aliquam id ipsum facilisis, ornare ante ut, feugiat leo. Nulla accumsan iaculis justo, eu pellentesque mi tincidunt a. Duis porta urna eu molestie commodo. Donec at scelerisque nisi. Nullam efficitur, erat ac vulputate viverra, lacus libero laoreet dolor, vitae semper mi erat et nulla. Pellentesque et viverra mauris, ac bibendum tellus. Integer interdum justo nibh.
        </p>
        </div>
        <div className={styles.item} >
        <h1 className={styles.title}>
        Placeholder title
        </h1>
        <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in scelerisque magna. Suspendisse mattis quam nec dui posuere, ac semper leo feugiat. Nulla leo turpis, posuere non libero nec, tempor porta dolor. Aliquam nisl lorem, blandit in pretium in, finibus at nisi. Aliquam mollis quam sem, ut tincidunt augue venenatis in. Aliquam scelerisque pulvinar justo vitae volutpat. Aliquam id ipsum facilisis, ornare ante ut, feugiat leo. Nulla accumsan iaculis justo, eu pellentesque mi tincidunt a. Duis porta urna eu molestie commodo. Donec at scelerisque nisi. Nullam efficitur, erat ac vulputate viverra, lacus libero laoreet dolor, vitae semper mi erat et nulla. Pellentesque et viverra mauris, ac bibendum tellus. Integer interdum justo nibh.
        </p>
        <button className={styles.button}>
          Contact
        </button>
       </div>
      </div>
    </div>
  )
}

export default About