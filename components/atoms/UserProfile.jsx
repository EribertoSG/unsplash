const UserProfile = ({ userPhoto }) => {
    return (
        <div className="user-profile">
            <img src={userPhoto} alt="user" className="photo-user" />
        </div>
    )
}

export default UserProfile

