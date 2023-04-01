import React, { useContext } from 'react'
import { UserContext } from '../../App'

function Profile() {

  const {state} = useContext(UserContext)

  return (
    <div style={{display:'flex'}}>
      {state && state.admin._id}
    </div>
  )
}

export default Profile