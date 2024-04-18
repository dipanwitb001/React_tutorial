import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    // just like outlets, where any component can be rendered keeping header footer same, children could be passed(just like div)

    const [user,setUser] = React.useState(null)
    // api call

    return(
        <UserContext.Provider value={{user,setUser}}>
            {/* specifying the values that will be available to the children */}
        {children}

        {/* it means all the children passed though can be */}
        </UserContext.Provider>
    )
}

export default UserContextProvider 