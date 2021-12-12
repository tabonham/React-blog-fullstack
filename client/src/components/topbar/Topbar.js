import React from 'react';
import { Link } from 'react-router-dom';
import './topbar.css'

export default function Topbar() {
    const user = true;
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/">WRITE</Link></li>
                    <li className="topListItem"><Link className="link" to="/">LOGOUT</Link></li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" 
                        src="https://picsum.photos/id/1005/200/300" 
                        alt="a person's back" />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="toplistItem">
                            <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
