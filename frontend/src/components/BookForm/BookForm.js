import { useState } from 'react'
import { useDispatch } from 'react-redux'
import createBookWithId from '../../utils/craeteBookWithId'
import { addBook } from '../../redux/books/actionCreators'
import booksData from '../../data/books.json'
import './BookForm.css'

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const dispatch = useDispatch()
    const handleAddRandomBook = () => {
        const randomIndex = Math.floor(Math.random() * booksData.length)
        const randomBook = booksData[randomIndex]
        dispatch(addBook(createBookWithId(randomBook)))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && author) {
            dispatch(addBook(createBookWithId({ title, author })))

            setTitle('')
            setAuthor('')
        }
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
            </form>
        </div>
    )
}

export default BookForm
