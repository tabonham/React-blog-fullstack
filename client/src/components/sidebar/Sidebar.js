import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './sidebar.css';
import axios from 'axios';

//c = categories
export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async ()=> {
            const res = await axios.get("/categories")
            setCats(res.data)
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://picsum.photos/id/325/200/300" alt="girl standing at trees" />
                <p>Salvia yr vinyl, disrupt iceland letterpress meditation pop-up edison bulb shoreditch air plant chicharrones vaporware. 
                    Ethical franzen quinoa biodiesel flannel, cronut pickled celiac blog microdosing williamsburg roof party cred. 
                    Quinoa actually cred tousled flexitarian portland. Blog wolf pitchfork freegan, 
                    normcore activated charcoal iPhone keffiyeh gentrify listicle.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sideabrList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
