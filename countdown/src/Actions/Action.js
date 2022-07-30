export const ADDUSER = (userDetails) => ({
    type : 'ADD_USER',
    ...userDetails
})

export const LOGINUSER = ({type, ...rest}) => ({
        type: 'LOGIN_USER',
        ...rest
});

export const LOGOUTUSER = ({type, email}) => ({
        type: 'LOGOUT_USER',
        email
});

export const ADDEVENT = (eventInfo) => ({
        type: 'ADD_EVENT',
        ...eventInfo
});
