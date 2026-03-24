import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const FeedNav = () => {
    const Navigate = useNavigate();
return (
    <div className='flex justify-between items-center'>
            <button className='p-1 px-2 rounded-2xl bg-amber-50 absolute left-1.5 border' onClick={()=>{Navigate("/create-post")}}><FaArrowLeft /></button>
            <h1 className='mb-3'>Social Honey</h1>
    </div>
)
}

export default FeedNav