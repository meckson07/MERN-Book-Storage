import axios from 'axios'
import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const CreatePage=()=>{
    const navigate=useNavigate()
    const [formData, setFormData]=useState({
        name:"",
        author:"",
        year:0,
        description:""
    })

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
        const res= await axios.post("http://localhost:3000/books/", formData)
        console.log(res.status)
        if(res.status == 201){
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
                <button onClick={handleSubmit}>Create</button>
            </form>
        </div>
    )
}

export default CreatePage