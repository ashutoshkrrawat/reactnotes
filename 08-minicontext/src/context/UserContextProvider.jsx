import React  from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const[user, setUser]=React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider


/*
?difference between "usercontextprovider" and "usercontext.provider"
    -UserContextProvider---This is your custom component that wraps the rest of your app and provides the context.
    Creates a context state (user, setUser)
    Shares it with all components inside using <UserContext.Provider>
*/