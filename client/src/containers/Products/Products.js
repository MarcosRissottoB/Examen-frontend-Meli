import React, { Component } from 'react';

// Components
import Product from './../Product/Product';
import Search from './../Search/Search';

class Products extends Component {
    render () {
        return (
            <div className="product-container">
                <h2>Nuestros productos:</h2>
                <Search
                    search ={this.props.productSearch}
                
                />
                <ul className="products">
                    {Object.keys(this.props.products).map(
                        product => (
                        <Product 
                            information={this.props.products[product]}
                            key={product}
                        />
                        )
                    )}
                </ul>
            </div>
        )
    }
}

export default Products;