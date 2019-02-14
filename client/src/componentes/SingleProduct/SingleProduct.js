import React from 'react';

const SingleProduct = (props) => {

    if(!props) return null;
    const { imagen, nombre, precio, descripcion} = props.product;
    return (
        <div>
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre}/>
            </div>
            <div className="info">
                <h2>{nombre}</h2>
                <p className="precio">$ {precio}</p>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default SingleProduct;