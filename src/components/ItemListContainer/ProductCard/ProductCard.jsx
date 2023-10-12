import React from 'react'
import './ProductCard.css'
const ProductCard = (props) => {
    return (
        <div className='card'>
            <img src={props.imagen} alt="Remera" className='imagen-card'/>
            <h2 className='titulo-card'>{props.titulo}</h2>
            <p className='desc-card'>{props.description}</p>
            <p className='precio-card'>$ {props.precio}</p>
            <button className='btn-card'>Ver mas</button>
        </div>
    )
}

export default ProductCard
