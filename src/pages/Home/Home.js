import React from 'react'
import './Home.css';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';


const Home = () => {
    return (
        <>
            <Topbar />
            <div className='home-container'>
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}

export default Home
