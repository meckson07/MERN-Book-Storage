import axios from 'axios'
import react, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditPage=()=>{
    const navigate=useNavigate()
    const {id}=useParams()
    const [formData, setFormData]=useState({
        name:"",
        author:"",
        year:0,
        description:""
    })

    console.log(id)

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormData((pervFormData)=>{
            return {
                ...pervFormData,
                [name]:value
            }
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const res= await axios.put(`http://localhost:3000/books/${id}`, formData)
        console.log(res.status)
        if(res.status == 200){
            navigate("/")
        }
    }

    return(
        <div>
            <form>
                <div className="inputcontainer">
                <label htmlFor="name">Title</label>
                <input type="text" id="name" name='name' value={formData.name} onChange={handleChange}/>
                </div>
                <div className="inputcontainer">
                <label htmlFor="author">Author</label>
                <input type="text"id="author" name='author' value={formData.author} onChange={handleChange}/>
                </div>
                <div className="inputcontainer">
                <label htmlFor="year">Year</label>
                <input type="number" id="year" name='year' value={formData.year} onChange={handleChange}/>
                </div>
                <div className="inputcontainer">
                <label htmlFor="description">Description</label>
                <textarea type="text" id="description" name='description' value={formData.description} onChange={handleChange}/>
                </div>
                <button onClick={handleSubmit}>Update</button>
            </form>
        </div>
    )
}


export default EditPage