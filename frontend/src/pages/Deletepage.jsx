import axios from 'axios'
import react, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeletePage=()=>{
    const navigate=useNavigate()
    const {id}=useParams()

    const handleDelete=async(e)=>{
        e.preventDefault()
        const res= await axios.delete(`http://localhost:3000/books/${id}`)
        console.log(res.status)
        if(res.status == 200){
            navigate("/")
        }
    }

    const handleNavigate=()=>{
        navigate("/")
    }
    return(
        <div>
            <h1>Are you sure u want to delete this record</h1>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleNavigate}>Cancel</button>
        </div>
    )
}

export default DeletePage