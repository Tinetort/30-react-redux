import { v4 as uuidv4 } from 'uuid'

const createBookWithId = (book, sourse) => {
    return {
        ...book,
        sourse,
        id: uuidv4(),
        isFavorite: false,
    }
}

export default createBookWithId
