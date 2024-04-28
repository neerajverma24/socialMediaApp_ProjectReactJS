import "./Rightbar.css"
import { Users } from '../../dummyData'
import OnlineFriend from "../OnlineFriends/OnlineFriend"
import { Home } from "@mui/icons-material"

export default function Rightbar({ profile }) {
  //  Home Rightbar (when we are exist from profile)
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthday-container">
          <img className="birthday-img" src='assets/gift.png' alt="" />
          <span className="birthday-text">
            <b>Pola Poster</b> and <b>3 other friends</b> have their birthday today
          </span>
        </div>
        <img className="rightbar-ad" src="assets/ad.png" alt="" />
        <h4 className="rightbar-title">Online Friends</h4>
        <ul className="rightbar-friendList">
          {Users.map(u =>
            <OnlineFriend key={u.id} user={u} />
          )}
        </ul>
      </>
    )
  }

  // Profile Rightbar
  const ProfileRightbar = () => {
    return (
      <>
        <h2 className="profile-rightbar-title">User Information</h2>
        <div className="profile-rightbar-info">
          <div className="profile-rightbar-infoItem">
            <span className="profile-rightbar-infoKey">City:</span>
            <span className="profile-rightbar-infoValue">New Delhi</span>
          </div>
          <div className="profile-rightbar-infoItem">
            <span className="profile-rightbar-infoKey">Nation:</span>
            <span className="profile-rightbar-infoValue">India</span>
          </div>
          <div className="profile-rightbar-infoItem">
            <span className="profile-rightbar-infoKey">Relationship:</span>
            <span className="profile-rightbar-infoValue">Single</span>
          </div>
        </div>
        <h2 className="profile-rightbar-title">User Friends</h2>
        <div className="profile-rightbar-followings">
          <div className="profile-rightbar-following">
            <img className="profile-rightbar-followingImg" src="assets/person/2.jpeg" alt="" />
            <span className="profile-rightbar-followingName">Maxx Well</span>
          </div>
          <div className="profile-rightbar-following">
            <img className="profile-rightbar-followingImg" src="assets/person/3.jpeg" alt="" />
            <span className="profile-rightbar-followingName">Maxx Well</span>
          </div>
          <div className="profile-rightbar-following">
            <img className="profile-rightbar-followingImg" src="assets/person/4.jpeg" alt="" />
            <span className="profile-rightbar-followingName">Maxx Well</span>
          </div>
          <div className="profile-rightbar-following">
            <img className="profile-rightbar-followingImg" src="assets/person/5.jpeg" alt="" />
            <span className="profile-rightbar-followingName">Maxx Well</span>
          </div>
          <div className="profile-rightbar-following">
            <img className="profile-rightbar-followingImg" src="assets/person/6.jpeg" alt="" />
            <span className="profile-rightbar-followingName">Maxx Well</span>
          </div>
          <div className="profile-rightbar-following">
            <img className="profile-rightbar-followingImg" src="assets/person/7.jpeg" alt="" />
            <span className="profile-rightbar-followingName">Maxx Well</span>
          </div>
          <div className="profile-rightbar-following">
            <img className="profile-rightbar-followingImg" src="assets/person/8.jpeg" alt="" />
            <span className="profile-rightbar-followingName">Maxx Well</span>
          </div>
          <div className="profile-rightbar-following">
            <img className="profile-rightbar-followingImg" src="assets/person/9.jpeg" alt="" />
            <span className="profile-rightbar-followingName">Maxx Well</span>
          </div>
        </div>
      </>
    )
  }

  // this right is for the original Rightbar, which is going to be implement
  return (
    <div className="rightbar">
      <div className="rightbar-wrapper">
        {/* <ProfileRightbar /> */}
        {/* <HomeRightbar /> */}
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
