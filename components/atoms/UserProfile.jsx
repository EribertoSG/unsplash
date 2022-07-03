import Image from 'next/image'
const UserProfile = ({ userPhoto }) => {
    return (
        <div className="user-profile">
            <Image src={userPhoto} alt='photo-user' className='photo-user' width={40} height={40} />
        </div>
    )
}

export default UserProfile

