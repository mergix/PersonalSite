// 'use client';

import React from "react";
import Link from 'next/link';
import styles from './Rooms.module.css';
import CreateNote from './CreateRoom';
import axios from 'axios';
import CreateNote2 from "./CreateRoomTypes";

//  async function getRooms(){
  
//   const res = await fetch(`https://localhost:7272/allRooms`, { cache: 'no-store' });
//   const data = await res.json();
//   return data?.result as any[];
// }

export default async function HomePage(){
  // const rooms = await getRooms();
    return(
       <div>
      <h1>Notes</h1>
      {/* <div className={styles.grid}>
      {rooms?.map((note) => {
          return <Room key={note.id} note={note} />;
        })}
      </div> */}

      {/* <CreateNote />
      <CreateNote2 /> */}
    </div>
    );
}

function Room({ room }: any) {
    const { id, roomNo, roomType, status } = room || {};
  
    return (
      <Link href={`/rooms/${id}`}>
        <div className={styles.note}>
          <h2>{roomNo}</h2>
          <h5>{roomType}</h5>
          <p>{status}</p>
        </div>
      </Link>
    );
  }