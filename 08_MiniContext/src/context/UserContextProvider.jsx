import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    console.log("User context provider.jsx called");
    
    const [user,setUser] = React.useState(null)
    console.log(`setUser is ${setUser}`);
    console.log(`user is ${user}`);
    
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider