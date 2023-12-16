import { useDispatch, useSelector } from 'react-redux'
import {
    setTitleFilter,
    selectTitleFilter,
    setAuthorFilter,
    selectAuthorFilter,
    resetFilters,
} from '../../redux/slices/filterSlice'
import './Filter.css'

const Filter = () => {
    const dispatch = useDispatch()

    // Title filter
    const titleFilter = useSelector(selectTitleFilter)
    const handleTitleFilterChange = (e) => {
        dispatch(setTitleFilter(e.target.value))
    }

    // Author filter
    const authorFilter = useSelector(selectAuthorFilter)
    const handleAuthorFilterChange = (e) => {
        dispatch(setAuthorFilter(e.target.value))
    }

    // Clear filters
    const handleResetFilter = () => {
        dispatch(resetFilters())
    }
    return (
        <div className="app-block filter">
            <div className="filter-row">
                <div className="filter-group">
                    <input
                        value={titleFilter}
                        onChange={handleTitleFilterChange}
                        type="text"
                        placeholder="Filter by title..."
                    />
                </div>
                <div className="filter-group">
                    <input
                        value={authorFilter}
                        onChange={handleAuthorFilterChange}
                        type="text"
                        placeholder="Filter by author..."
                    />
                </div>

                <button type="button" onClick={handleResetFilter}>
                    Reset filters
                </button>
            </div>
        </div>
    )
}

export default Filter
