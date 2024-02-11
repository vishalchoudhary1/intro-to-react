import React from 'react'
import userContext from './userContext'

const userContextProvider = ({children}) =>{
    const [user, setUser] = React.useState(null) //! user context will access this value
    return(
        <userContext.Provider value={{user, setUser}}>
        {children}
        </userContext.Provider>
    )
}

export default userContextProvider;