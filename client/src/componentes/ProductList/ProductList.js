import React, { Component } from 'react';

import ProductDetail from '../ProductDetail/ProductDetail';

class ProductList extends Component {
    render () {
        return (
            <div className="product-container">
                <h2>Nuestros productos:</h2>
                <ul className="product-list">
                    {Object.keys(this.props.productList).map(
                        product => (
                        <ProductDetail 
                            information={this.props.productList[product]}
                            key={product}
                        />
                        )
                    )}
                </ul>
            </div>
        )
    }
}

export default ProductList;