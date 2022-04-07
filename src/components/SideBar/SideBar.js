import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./SideBar.module.css"

export const SideBar = () => {
    return (
        <ul className={`${styles.sideContainer} sideNav`}>
            <li>
                <NavLink to="/" className= {({ isActive }) => `listItems ${isActive ? "active" : undefined}` } title="Home" >
                    <i className="material-icons">home</i>
                    <h3>Home</h3>
                </NavLink>
            </li>
            <li>
                <NavLink to="/trending" className= {({ isActive }) => `listItems ${isActive ? "active" : undefined}` } title="Trending" >
                    <i className="material-icons">trending_up</i>
                    <h3>Trending</h3>
                </NavLink>
            </li>
            <li>
                <NavLink to="/explore" className={({ isActive }) => `listItems ${isActive ? "active" : undefined}` }     title="Explore" >
                    <i className="material-icons">explore</i>
                    <h3>Explore</h3>
                </NavLink>
            </li>
            <li>
                <NavLink to="/playlists" className={({ isActive }) => `listItems ${isActive ? "active" : undefined}` }   title="Playlists" >
                    <i className="material-icons">playlist_add</i>
                    <h3>Playlists</h3>
                </NavLink>
            </li>
            <li>
                <NavLink to="/liked-videos" className={({ isActive }) => `listItems ${isActive ? "active" : undefined}` }    title="Liked Videos" >
                    <i className="material-icons">thumb_up</i>
                    <h3>Liked Videos</h3>
                </NavLink>
            </li>
            <li>
                <NavLink to="/watch-later" className={({ isActive }) => `listItems ${isActive ? "active" : undefined}` }     title="Watch Later" >
                    <i className="material-icons">watch_later</i>
                    <h3>Watch Later</h3>
                </NavLink>
            </li>
            <li>
                <NavLink to="/history" className={({ isActive }) => `listItems ${isActive ? "active" : undefined}` }     title="History" >
                    <i className="material-icons">history</i>
                    <h3>History</h3>
                </NavLink>
            </li>
        </ul>
    )
}
