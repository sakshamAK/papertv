import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import { useAuth } from '../../contexts'

export const Header = () => {
    const { isAuth } = useAuth()
    return (
        <nav className="nav-header">
            <h2 className="brand-name">KARIGARY</h2>
                <ul className="menu-list">
                <li className="menu-list-items" title = "Search" ><Link className = "Link-color" to = "/search"><i className = "material-icons">search</i></Link></li>
                <li className="menu-list-items" title = "Explore" ><Link className = "Link-color" to="/explore"><i className = "material-icons-outlined">explore</i></Link></li>
                <li className="menu-list-items" title = "Sign In" ><Link className = "Link-color" to={ isAuth ? "/" : "/signin" }><i className = "material-icons-outlined">person</i></Link></li>     
           </ul>
        </nav>
    )
}