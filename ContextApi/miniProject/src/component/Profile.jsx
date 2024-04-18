// to receive data

import React, {useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile() {

    // through the user variable, info regarding the current context is being retrieved through useContext hook
    const {user} = useContext(UserContext)
    
    if(!user) return <div> Please Login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
