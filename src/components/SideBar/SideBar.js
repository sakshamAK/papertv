import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./SideBar.module.css"

export const SideBar = () => {
    return (
        <ul className={`${styles.sideContainer} sideNav`}>
            <li>
                <Link to="/" className={`${styles.listItems} ${styles.active}`} title = "Home" >
                    <i className="material-icons">home</i>
                    <h3>Home</h3>
                </Link>
            </li>
            <li>
                <Link to="/trending" className={`${styles.listItems}`} title = "Trending" >
                    <i className="material-icons">trending_up</i>
                    <h3>Trending</h3>
                </Link>
            </li>
            <li>
                <Link to="/explore" className={`${styles.listItems}`} title = "Explore" >
                    <i className="material-icons">explore</i>
                    <h3>Explore</h3>
                </Link>
            </li>
            <li>
                <Link to="/playlists" className={`${styles.listItems}`} title = "Playlists" >
                    <i className="material-icons">playlist_add</i>
                    <h3>Playlists</h3>
                </Link>
            </li>
            <li>
                <Link to="/liked-videos" className={`${styles.listItems}`} title = "Liked Videos" >
                    <i className="material-icons">thumb_up</i>
                    <h3>Liked Videos</h3>
                </Link>
            </li>
            <li>
                <Link to="/watch-later" className={`${styles.listItems}`} title = "Watch Later" >
                    <i className="material-icons">watch_later</i>
                    <h3>Watch Later</h3>
                </Link>
            </li>
            <li>
                <Link to="/history" className={`${styles.listItems}`} title = "History" >
                    <i className="material-icons">history</i>
                    <h3>History</h3>
                </Link>
            </li>
        </ul>
    )
}
