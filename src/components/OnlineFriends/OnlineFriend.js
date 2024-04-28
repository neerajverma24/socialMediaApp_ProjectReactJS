import './OnlineFriend.css'

export default function OnlineFriend({ user }) {
    return (
        <div>
            <li className="rightbar-friend">
                <div className="rightbar-profileImgContainer">
                    <img className="rightbar-profileImg" src={user.profilePicture} alt="" />
                    <span className="rightbar-online"></span>
                </div>
                <span className="rightbar-username">{user.username}</span>
            </li>
        </div>
    )
}
