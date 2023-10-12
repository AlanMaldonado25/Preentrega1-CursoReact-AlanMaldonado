import React from 'react'
import ProductCard from '../ItemListContainer/ProductCard/ProductCard'
import buzoCasual from '../../assets/BuzoCasual.jpeg'
import CamperonOscuro from '../../assets/CamperonOscuro.jpeg'
import buzoTejido from '../../assets/buzoTejido.jpeg'
import CamperonClaro from '../../assets/CamperonClaro.jpeg'
import remeraFormal from '../../assets/remeraFormal.jpeg'
import remeraTejida from '../../assets/remeraTejida.jpeg'
import '../ItemListContainer/ItemListContainer.css'
const ItemListContainer = () => {
    return (
        <div className='galeria-productos'>
            <ProductCard imagen={buzoCasual}titulo="Buzo Casual" precio={12000}/>
            <ProductCard imagen={buzoTejido}titulo="Buzo Tejido" precio={10000}/>
            <ProductCard imagen={CamperonClaro} titulo="Camperon Beige" precio={18000}/>
            <ProductCard imagen={CamperonOscuro} titulo="Camperon Negro" precio={18000}/>
            <ProductCard imagen={remeraFormal} titulo="Remera Formal" precio={6000}/>
            <ProductCard imagen={remeraTejida} titulo="Remera Tejida" precio={8000}/>
        </div>
    )
}

export default ItemListContainer
