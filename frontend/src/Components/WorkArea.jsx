import React from 'react'
import { useAuth } from '../Context/AuthContext'

const WorkArea = () => {
  const {authUser}=useAuth();
  // console.log(authUser)
  return (
    <div>WorkArea</div>
  )
}

export default WorkArea