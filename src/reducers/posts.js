export default (state = [], action) => {
    switch (action.type) {
        case "FETCH_POSTES":
            return action.payload

        case "ADD_POST":
            return [...state, action.payload]

        default:
            return state
            break;
    }
}