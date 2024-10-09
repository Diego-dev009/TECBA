import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to= "/Inicio">Inicio</Link>
            </li>
            <li>
                <Link to = "/Contacto">Contacto</Link>
            </li>
            <li>
                <Link to = "/About">About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar