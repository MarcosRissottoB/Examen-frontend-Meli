import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componentes
import Header from './Header/Header';
import Inicio from './Inicio/Inicio';
import Products from './Products/Products';
// import Product from './Product/Product';
import SingleProduct from './SingleProduct/SingleProduct';

//Datos mocks
import productInformation from '../datos/datos';

class Routes extends Component {
    // State inicial.
    state = {
        products: [],
        termSearch : ''
    }

    componentWillMount() {
        this.setState({
            products: productInformation
        })
    }

    productSearch = (search) => {
        if(search.length > 3) {
            this.setState({
                termSearch : search
            })
        } else {
            this.setState({
                termSearch : ''
            })
        }
    }

    render() {
        // Creamos una copia del state.
        let products =  [...this.state.products];
        let search = this.state.termSearch;
        let result;

        // Si busqueda no esta vacía, realizamos un filtrado de los productos.
        if(search !== '') {
            result = products.filter( product => (
                product.nombre.toLowerCase().indexOf( search.toLowerCase() ) !== -1
            ));
        } else {
            result = '';
        }

        return (
            <Router>
                <div className="">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Inicio} />
                        <Route exact path="/products" render={() => (
                                <Products 
                                    products={result}
                                    productSearch = {this.productSearch}
                                />
                        )}/>
                        <Route exact path="/product/:productId" render={(props) => {
                            let productId = props.location.pathname.replace('/product/', '');
                            return (
                                <SingleProduct 
                                    product={this.state.products[productId]}
                                />
                            )
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Routes;