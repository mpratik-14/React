import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { use } from 'react';

function Profile() {
    console.log("Profile called");
    
    const { user } = useContext(UserContext)

    if (!user) return <div>Please login</div>

    return <div>Welcome {user.username + user.password} </div>
}

export default Profile