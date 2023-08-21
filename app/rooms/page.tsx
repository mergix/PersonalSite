// "use client";

import React from 'react'
import styles from "./page.module.css";
import Link from 'next/link'
import RoomCard from "../../components/roomCard/RoomCard"
import https from 'https'
import axios from 'axios';


const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

async function getData() {
  const res = await axios.get('http://localhost:5279/allRooms', 
  { withCredentials:true });
  
  if (!res.data) {
    console.log("bad")
  }
 
  return res.data;
}

 async function  Rooms() {

  const data = getData();
data.then(res => console.log(res.result))
 
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Rooms</h1>
    <div className={styles.grid}>
      {data.then(res => res.result.map((item) => (
          <RoomCard img={"/Img/placeholder.jpg"} No={item.roomNo} title={"Test Title"} desc={"Test description"} status={"Taken"}/>
        )))}
    </div>
  </div>
  )
}

{/* <RoomCard img={"/Img/placeholder.jpg"} No={20} title={"Test Title"} desc={"Test description"} status={"Taken"}/> */}
export default Rooms