import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()

    return (
        //use the same variable that we use in the main.jsx line:43
        <div className='bg-gray-100  text-3xl p-4'>user: {userid}</div>
    )
}

export default User
