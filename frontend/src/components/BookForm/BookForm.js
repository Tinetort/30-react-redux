import { useState } from 'react'
import './BookForm.css'

const BookForm = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch actions
        if (title && author) {
            setAuthor('')
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
            </form>
        </div>
    )
}

export default BookForm