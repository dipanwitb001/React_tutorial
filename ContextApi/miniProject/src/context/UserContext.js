import React from "react";

// a context is created but no default value is provided
const UserContext = React.createContext()

export default UserContext;

// along with this, userContextProvider is also req, which will provide the access of global data to the components wrapped within this UserContext
// UserContext is used as a wrapper
{/* <UserContext>
    <Login />
    <Card>
        <Data />
    </Card>
</UserContext> */}

// here, the components like Login. Card , Data will get the access to the data in the UserContext