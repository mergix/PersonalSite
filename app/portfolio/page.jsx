import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

function Portfolio() {
  return (
    <div className={styles.container}>
    <h1 className={styles.selectTitle}> Pick Gallery</h1>
    <div className={styles.items}>
    <Link href="/portfolio/illustrations" className={styles.item}>
    <span className={styles.title}>Illustrations</span>
    </Link>
    <Link href="/portfolio/websites" className={styles.item}>
    <span className={styles.title}>Website</span>
    </Link>
    <Link href="/portfolio/applications" className={styles.item}>
    <span className={styles.title}>Application</span>
    </Link>
    </div>
    </div>
  )
}

export default Portfolio