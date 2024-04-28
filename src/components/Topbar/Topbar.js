import "./Topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";


export default function Topbar() {
    return (
        <div className="topbar-container">
            <div className="topbar-left">
                <span className="logo">
                    Neerajsocial
                </span>
            </div>
            <div className="topbar-center">
                <div className="search-bar">
                    <Search className="search-icon" />
                    <input className="search-input" placeholder="Search for friends, post or video" />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-links">Homepage</span>
                    <span className="topbar-links">Timeline</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icons-item">
                        <Person />
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icons-item">
                        <Chat />
                        <span className="topbar-icon-badge">2</span>
                    </div>
                    <div className="topbar-icons-item">
                        <Notifications />
                        <span className="topbar-icon-badge">3</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbar-img" />
            </div>
        </div>
    )
}
