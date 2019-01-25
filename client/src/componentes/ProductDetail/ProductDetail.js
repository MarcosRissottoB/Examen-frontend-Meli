import React from 'react';

const ProductDetail = (props) => {
    const {imagen, nombre, precio, id} = props.information;
    return (
        <li>
            <img src={`img/${imagen}.png`} alt={nombre} />
            <p>{nombre} <span> $ {precio} </span></p>
            <a href="#">Más información</a>
        </li>
    )
}

export default ProductDetail;