import { ADD_ALBUM, SET_ALBUMS } from '../actions/ADD_ALBUM'
export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_ALBUM:
            const album = [...state, action.payload]
            return album

        case SET_ALBUMS:

            return [...action.payload]

        default:
            return state

    }
}