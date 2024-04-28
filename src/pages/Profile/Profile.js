import './Profile.css'
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className='profile'>
                <Sidebar />
                <div className='profile-right'>

                    <div className='profile-rightTop'>
                        <div className='profile-cover'>
                            <img className='profile-coverImg' src='assets/post/3.jpeg' alt='' />
                            <img className='profile-userImg' src='assets/person/1.jpeg' alt='' />
                        </div>
                        <div className='profile-info'>
                            <h4 className='profile-infoName'>John Martin</h4>
                            <span className='profile-infoDesc'>Hey! Its my profile</span>
                        </div>
                    </div>

                    <div className='profile-rightBottom'>
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>

    )
}
