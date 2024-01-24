import React, { useState } from "react";
import UserContext from "./UserContext";

// children means ki jo bhi data aaare like Card component etc usko as it is likhdo.
const UserContextProvider = ({children}) => {
    const [user , setUser] = useState(null)
    // Data diya
    // value basically props hai
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
         
        </UserContext.Provider>
    )

}

export default  UserContextProvider;