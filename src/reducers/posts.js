export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_POSTES":
            return action.payload

        case "ADD_POST":
            return [...state, action.payload]
        case "UPDATE_POST":
            return state.map((post) => post._id === action.payload._id ? action.payload : post)

        default:
            return state
            break;
    }
}