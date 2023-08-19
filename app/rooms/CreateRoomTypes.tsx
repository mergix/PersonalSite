'use client';
import axios from 'axios';



import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateNote2() {
  const [title, setTitle] = useState('');
  const [number, setNumber] = useState('');
  const [roomType, setRoomType] = useState('');
  const [image, setImage] = useState('');

  const router = useRouter();

  const create = async() => {

    // axios.post('https://localhost:7099/api/Room',{} ,{ withCredentials: true }).then(res => {
    //  console.log(res.data)
    // }).catch(err => console.log(err))

    // setNumber('');
    // setTitle('');

    // router.refresh();
  }
 
  function onImageChange(e){
    setImage(URL.createObjectURL(e.target.files))
    console.log
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

<input type="file" />
<div>
    <img  src={image} onChange={onImageChange}  id='imgDisplay' height={200} width={200}  style={{border:' 1px solid #000000'}} />
</div>

      <button type="submit">
        Create note
      </button>

      <script type="text/javascript"></script>
    </form>
  );
}