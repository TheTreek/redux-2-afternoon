import axios from 'axios';

//Inital state value
const initialState = {
    email: null,
    firstName: null,
    lastName: null
};

//ACTION
const REQUEST_USER_DATA = 'REQUEST_USER_DATA';

export const requestUserData = ()=>{
    const data = axios.get('/auth/user-data')
        .then(res=>{
            return res.data;
        });
    return {
        type: REQUEST_USER_DATA,
        payload: data
    };
}

//Reducer function --This gets exported
function reducer(state = initialState, action){
    switch(action.type){
        case REQUEST_USER_DATA + '_FULFILLED':
            const {email,firstName,lastName} = action.payload.user;
            return {email,firstName,lastName};
        default:
            return state;
    }
}

export default reducer;