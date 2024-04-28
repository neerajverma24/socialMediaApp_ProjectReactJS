import './CloseFriend.css'


// this file is used in the Sidebar Folder -> Sidebar.js
export default function CloseFriend({ user }) {
    return (
        <div>
            <li className="sidebar-friend">
                <img className="sidebar-friend-img" src={user.profilePicture} alt="" />
                <span className="sidebar-friend-name">{user.username}</span>
            </li>
        </div>
    )
}
