import React from 'react'
import cart from '../../assets/cart.svg'
import './CardWidget.css'
const CardWidget = () => {
    return (
        <div>
            <button className='btn-carrito'><img src={cart} alt="carrito" className='carrito'/><span className='contador-carrito'>1</span></button>
        </div>
    )
}

export default CardWidget
