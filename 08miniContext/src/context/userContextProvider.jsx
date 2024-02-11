import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) =>{
    const [user, setUser] = React.useState(null) //! user context will access this value
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;