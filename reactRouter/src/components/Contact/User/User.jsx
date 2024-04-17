import React from 'react'
import {useParams} from 'react-router-dom'

function User() {
  const {id} = useParams();

  return (
    <div className='bg-gray-600 text-orange-400 p-4 text-5xl'>
      User: {id}
    </div>
  )
}

export default User
