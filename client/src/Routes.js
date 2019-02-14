import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componentes
import Header from './componentes/Header/Header';
import Inicio from './componentes/Inicio/Inicio';
import Products from './containers/Products/Products';
// import Product from './containers/Product/Product';
import SingleProduct from './componentes/SingleProduct/SingleProduct';

//Datos mocks
import productInformation from '../datos/datos';

class Routes extends Component {
    // State inicial.
    state = {
        products: [],
        termSearch : ''
    }

    // componentWillMount
    componentDidMount() {
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
                        <Route exact path="/items?search=”" render={() => (
                                <Products 
                                    products={result}
                                    productSearch = {this.productSearch}
                                />
                        )}/>
                        <Route exact path="/items/:id" render={(props) => {
                            let productId = props.location.pathname.replace('/items/', '');
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