import React from 'react'
import UserProfile from '../../components/UserProfile/UserProfile'
import CreateCourse from'../../containers/CreateCourse/CreateCourse.jsx'
const User = ({}) => {
  return (
    <div>
        <UserProfile
        // image={users.profileImg}
         name={"Professor Dumbledore"}
         role={"Headmaster"}
        />
        <CreateCourse />
    </div>
  )
}

export default User