import Link from 'next/link';
import React from 'react'
import styles from "./navbar.module.css"
import DarkModeToggle from "../darkmodetoggle/DarkModeToggle"

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Room",
      url: "/rooms",
    },
    {
      id: 3,
      title: "About",
      url: "/about",
    },
    {
      id: 4,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 5,
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      id: 6,
      title: "Portfolio",
      url: "/portfolio",
    },
  ];

function Navbar() {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>
        Spectrum
        </Link>
        <div className={styles.links}>
          <DarkModeToggle/>
        {links.map(link =>(
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        <button className={styles.logout}>
          Logout
        </button>
        </div>
    </div>
  )
}

export default Navbar;