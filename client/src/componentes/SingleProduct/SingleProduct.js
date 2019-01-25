import React from 'react';

const SingleProduct = (props) => {

    const { imagen, nombre, precio, description} = props.product;
    if(!imagen) return null;
    return (
        <div>
            <div className="imagen">
                <img src={`/img/${imagen}.png`} alt={nombre}/>
            </div>
            <div className="info">

            </div>
        </div>
    )
}

export default SingleProduct;