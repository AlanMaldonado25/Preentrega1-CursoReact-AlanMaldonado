import React from 'react'
import "./NavBar.css"
import imagen from '../../assets/pierina.png'
import CardWidget from '../CardWidget/CardWidget'
const NavBar = () => {
    return (
        <>
            <nav className='Navbar'>
                <img src={imagen} alt="Logotipo Pierina" className='img-navbar' />
                <div>
                    <a href="#" className='nav-link'>Home</a>
                    <a href="#" className='nav-link'>Best sellers</a>
                    <a href="#" className='nav-link'>Category</a>
                    <a href="#" className='nav-link'>About Us</a>
                </div>
                <div>
                <CardWidget cart='../../assets/cart.svg'/>
                </div>
            </nav>

        </>
    )
}

export default NavBar
