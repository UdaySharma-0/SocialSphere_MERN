import React, { useState, useEffect } from 'react'
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import FeedNav from '../components/FeedNav';

const Feed = () => {

    const [posts, setPosts] = useState([]);
    const [arrow, setArrow] = useState(false);

    useEffect(()=>{

        axios.get("/api/posts")
        .then((res)=>{
            console.log(res.data.post);
            setPosts(res.data.post)
        })

    }, [])

    const handleDelete = (id, image)=>{
        console.log(id, image);
        const param = new URLSearchParams({
            id: id,
            fileId: image
        })

        axios.delete(`/api/posts/?${param.toString()}`)
        .then((res) =>{
            console.log(res.data);
            setPosts(posts.filter(post => post._id !== id));
            setArrow(false)
        })
    }

  return (
    <section className='flex justify-start items-center flex-col bg-amber-100 w-full '>
        <FeedNav />
        <div className='bg-black h-px w-full'/>
        {posts.length > 0 ? (
            posts.slice().reverse().map((post) => (
                <div key={post._id} className='flex justify-center items-center flex-col border m-4 p-2 w-[90%] bg-amber-50 rounded-2xl'>
                    <img src={post.image} alt="image" className='w-full rounded-2xl ' />
                    <div className='bg-black m-1 h-px w-full'/>
                    <p className='p-1 font-medium'>{post.caption}</p>
                    <FaAngleDown onClick={()=>setArrow(!arrow)}/>
                    {arrow && <button className='bg-red-500 p-1.5 w-full flex justify-center text-amber-100 font-bold rounded-2xl'><RiDeleteBin5Line onClick={()=>handleDelete(post._id, post.fileId)} /></button>}
                    
                </div>
            ))
        ) : (
            <h1 className='h-screen p-[10%] '>No posts available</h1>
        )}
    </section>
  )
}

export default Feed