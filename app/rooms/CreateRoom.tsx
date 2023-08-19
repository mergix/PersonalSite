'use client';
import axios from 'axios';



import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote() {
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('');
  const [roomType, setRoomType] = useState('');
  const [status, setStatus] = useState('');

  const router = useRouter();

  const create = async() => {

    // axios.post('https://localhost:7099/api/Room',{} ,{ withCredentials: true }).then(res => {
    //  console.log(res.data)
    // }).catch(err => console.log(err))

    setNumber('');
    setTitle('');

    router.refresh();
  }

  return (
    <form onSubmit={create}>
      <h3>Create a new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <label>Choose a room type</label>

<select name="pets" id="pet-select">
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
</select>

<label>Current Status</label>

<select name="pets" id="pet-select">
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
</select>

      <button type="submit">
        Create note
      </button>
    </form>
  );
}