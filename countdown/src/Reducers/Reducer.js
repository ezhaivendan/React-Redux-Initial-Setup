const getLocalStoreData = JSON.parse(localStorage.getItem('accountUser')) || [];
const getLoginUserInfo = JSON.parse(localStorage.getItem('loginUserInfo')) || [];
const getEventStoreData = JSON.parse(localStorage.getItem('eventInfo')) || [];
const initialState =  { accountUser: getLocalStoreData, loginUser: getLoginUserInfo, eventInfo: getEventStoreData };

const SignUpReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            localStorage.setItem('accountUser', JSON.stringify([...state.accountUser, action]));
            return {
                ...state, 
                accountUser: [
                    ...state.accountUser,
                    action
                ]
            };
            
        case 'LOGIN_USER':
            localStorage.setItem('loginUserInfo', JSON.stringify([...state.loginUser, action]));
            return {
                ...state, 
                loginUser: [
                    ...state.loginUser,
                    action
                ]
            };

        case 'LOGOUT_USER':
            localStorage.removeItem('loginUserInfo');
            const loggoutUser = state.loginUser.filter((user) => user.email !== action.email);
            return {
                ...state, 
                loginUser: loggoutUser
            };

        case 'ADD_EVENT':
            localStorage.setItem('eventInfo', JSON.stringify([...state.eventInfo, action]));
            return {
                ...state, 
                eventInfo: [
                    ...state.eventInfo,
                    action
                ]
            };

        default:
            return state;
    }
}

export default SignUpReducer;
