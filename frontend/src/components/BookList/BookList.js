import { useSelector, useDispatch } from 'react-redux'
import { deleteBook, toggleFavorite } from '../../redux/books/actionCreators'
import {
    selectAuthorFilter,
    selectTitleFilter,
    selectFavoriteFilter,
} from '../../redux/slices/filterSlice'
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'
import './BookList.css'

const BookList = () => {
    const books = useSelector((state) => state.books)
    const titleFilter = useSelector(selectTitleFilter)
    const authorFilter = useSelector(selectAuthorFilter)
    const favoriteFilter = useSelector(selectFavoriteFilter)
    const dispatch = useDispatch()

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))
    }

    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id))
    }

    const filtredBooks = books.filter((book) => {
        const matchesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase())
        const matchesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase())
        const matchesFavorite = favoriteFilter ? book.isFavorite : true
        return matchesTitle && matchesAuthor && matchesFavorite
    })

    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books avalible</p>
            ) : (
                <ul>
                    {filtredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}. {book.title} by{' '}
                                <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
                                <span
                                    onClick={() =>
                                        handleToggleFavorite(book.id)
                                    }
                                >
                                    {book.isFavorite ? (
                                        <BsBookmarkStarFill className="star-icon"></BsBookmarkStarFill>
                                    ) : (
                                        <BsBookmarkStar className="star-icon"></BsBookmarkStar>
                                    )}
                                </span>
                                <button
                                    onClick={() => handleDeleteBook(book.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default BookList
