import { FETCH_POSTES, ADD_POST, UPDATE_POST, DELETE_POST, LIKE_POST } from '../constants/actionTypes';
const posts = (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTES:
            return action.payload

        case ADD_POST:
            return [...state, action.payload]

        case UPDATE_POST:
        case LIKE_POST:
            return state.map((post) => post._id === action.payload._id ? action.payload : post)

        case DELETE_POST:
            return state.filter((post) => post._id !== action.payload)

        default:
            return state
    }
}
export default posts