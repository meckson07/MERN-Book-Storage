import axios from 'axios'
import react, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ViewPage=()=>{
    const navigate=useNavigate()
    const {id}=useParams()
    const [formData, setFormData]=useState([])

    useEffect(()=>{
        const getdata=async()=>{
            const res= await axios.get(`http://localhost:3000/books/${id}`)
            setFormData(res.data)
        }
        getdata()
    },[id])

    const handleNavigate=()=>{
        navigate("/")
    }
    return(
        <div>
            <div>
                <button onClick={handleNavigate}>X</button>
                <h2>Title :{formData.name}</h2>
                <h2>Author :{formData.author}</h2>
                <h2>Year :{formData.year}</h2>
                <h2>Description :{formData.description}</h2>
            </div>
        </div>
    )
}

export default ViewPage