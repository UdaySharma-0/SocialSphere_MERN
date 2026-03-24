import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const CreatePost = () => {

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{

    e.preventDefault() // prevents from reloading
    
    const formData = new FormData(e.target)
    axios.post("/api/create-post", formData)
    .then((res)=>{
      
      navigate("/feed")

    })
    .catch((err)=>{
      console.log(err);
      alert("Error creating post")
    })
  }

  return (
    <section className='flex flex-col bg-amber-100 items-center justify-center h-full w-full '>
        <h1  className='text-3xl font-extrabold m-3 '>Create Post</h1>
        <form action="" className='flex flex-col bg-amber-300 items-center justify-center p-2 border-2 rounded-2xl' onSubmit={handleSubmit}>
            <input type="file" name="image" id="imageInput" className='border-2'/>
            <div><span>Caption : </span>
            <input className='border-2 rounded-2xl' type="text" name='caption' required/></div>
            <button className='px-2 py-0.5 border-2 bg-amber-500 hover:bg-amber-600 rounded-2xl' type="submit">Post</button>
        </form>
    </section>
  )
}

export default CreatePost