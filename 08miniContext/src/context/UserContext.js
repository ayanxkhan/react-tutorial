import React from "react";

// to create context
const UserContext=React.createContext()

export default UserContext;


// this is provider so here all the components in this have access to this global UserContext
// <UserContext>
// <Login/>
// <Card/>
// </UserContext>

