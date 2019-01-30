import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {imagen, nombre, precio, id} = props.information;
    return (
        <li>
            <Link to={`/product/${id}`} className="btn">
                <img src={`img/${imagen}.png`} alt={nombre} />
                <p>{nombre} <span> $ {precio} </span></p>
            </Link>
            <Link to={`/product/${id}`} className="btn">Más información</Link>
        </li>
    )
}

export default Product;