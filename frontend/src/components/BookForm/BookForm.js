import { useState } from 'react'
import { useDispatch } from 'react-redux'
import createBookWithId from '../../utils/craeteBookWithId'
import { addBook, fetchBook } from '../../redux/slices/booksSlice'
import booksData from '../../data/books.json'
import './BookForm.css'
import { setError } from '../../redux/slices/errorSlice'

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()
    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length)
        const randomBook = booksData[randomIndex]
        dispatch(addBook(createBookWithId(randomBook, 'random')))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && author) {
            dispatch(addBook(createBookWithId({ title, author }, 'manual')))
            setTitle('')
            setAuthor('')
        } else {
            dispatch(setError('You have to fill title and author'))
        }
    }

    const handleAddRandomBookViaApi = () => {
        dispatch(fetchBook())
    }
    return (
        <div className="app-block book-form">
            <h2>Add new Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="author">Autor:</label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>
                <button type="submit">Add book</button>
                <button type="buttun" onClick={handleAddRandomBook}>
                    Add random
                </button>
                <button type="buttun" onClick={handleAddRandomBookViaApi}>
                    Add book via API
                </button>
            </form>
        </div>
    )
}

export default BookForm
