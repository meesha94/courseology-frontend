import "./UserProfile.scss";

const UserProfile = ({ profileImg, name, role }) => {
  return (
    <div className="user-profile">
      <div className="stars"></div>
        <div className="twinkling"></div> 
       <div className="clouds"></div>
      <img
        className="user-profile__image"
        src={profileImg}
        alt="user avatar"
      />
      <div className="user-profile__text">
        <h2 className="user-profile__name">{name}</h2>
        <p className="user-profile__role">{role}</p>
      </div>
      
    </div>
  );
};

export default UserProfile;
