import React from 'react'
import UserProfile from '../../components/UserProfile/UserProfile';
import CreateCourse from'../../containers/CreateCourse/CreateCourse.jsx';
import image from "../../assets/images/dumbledore.jpeg";

const User = ({users}) => {
  return (
    <div>
        <UserProfile className="user-header"
         profileImg={image} 
         name={"Professor Dumbledore"}
         role={"Headmaster"}
         />
        <CreateCourse />
    </div>
  )
}

export default User