import { ADD_ALBUM } from '../actions/ADD_ALBUM'

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_ALBUM:
            const album = [...state, action.payload]
            return album

        default:
            return state

    }
}