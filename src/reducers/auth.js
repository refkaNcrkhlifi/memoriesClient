import { AUTH } from '../constants/actionTypes';
const authReducer = (state = [], action) => {
    switch (action.type) {
        case AUTH:
            console.log("action.payload===", action.payload);
            return action.payload

        default:
            return state
    }
}
export default authReducer