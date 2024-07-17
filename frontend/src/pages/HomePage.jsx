import react, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage=()=>{    
    const [books,setBooks]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("http://localhost:3000/books/")
                setBooks(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchBooks()
    }, [])

    return(
        <div>
            <h1 className='text-blue-500 underline text-4xl text-center mx-auto'>Book Details</h1>
            <Link to={"/create"}>Add a new book</Link>
            <table class="table-auto border-collapse border border-slate-500 text-center">
                <thead>
                    <tr>
                        <td class="border-collapse border border-slate-500 px-4 py-1 ">Title</td>
                        <td class="border-collapse border border-slate-500 px-4 py-1 ">Author</td>
                        <td class="border-collapse border border-slate-500 px-4 py-1 ">Year</td>
                        <td class="border-collapse border border-slate-500 px-4 py-1 ">Operations</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book) => (
                            <tr key={book._id}>
                                <td class="border-collapse border border-slate-500 px-4 py-1">{book.name}</td>
                                <td class="border-collapse border border-slate-500 px-4 py-1">{book.author}</td>
                                <td class="border-collapse border border-slate-500 px-4 py-1">{book.year}</td>
                                <td class="border-collapse border border-slate-500 px-4 py-1">
                                    <Link to={`/view/${book._id}`}> <button className='bg-blue-300 hover:bg-blue-500 text-white px-2 rounded'>View</button></Link>
                                    <Link to={`/edit/${book._id}`}> <button className='bg-yellow-300 hover:bg-yellow-500 text-white px-2 rounded'>Edit</button> </Link>
                                    <Link to={`/delete/${book._id}`}> <button className='bg-red-400 hover:bg-red-500 text-white px-2 rounded'>Delete</button> </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HomePage