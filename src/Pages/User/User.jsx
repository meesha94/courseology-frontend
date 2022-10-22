import React from 'react'
import UserProfile from '../../components/UserProfile/UserPorfile'
import CreateCourse from'../../containers/CreateCourse/CreateCourse.jsx'
const User = ({users}) => {
  return (
    <div>
        <UserProfile
        image={users.profileImg}
        name={users.name}
        role ={users.role}
        />
        <CreateCourse />
    </div>
  )
}

export default User