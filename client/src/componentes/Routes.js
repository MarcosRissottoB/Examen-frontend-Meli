import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Componentes
import Header from './Header/Header';
import Inicio from './Inicio/Inicio';
import ProductList from './ProductList/ProductList';
// import ProductDetail from './ProductDetail/ProductDetail';
import SingleProduct from './SingleProduct/SingleProduct';

//Datos mocks
import productInformation from '../datos/datos';

class Routes extends Component {
    
    state = {
        productList: []
    }

    componentWillMount() {
        this.setState({
            productList: productInformation
        })
    }

    render() {
        return (
            <Router>
                <div className="">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Inicio} />
                        <Route exact path="/product-list" render={() => (
                                <ProductList productList={this.state.productList} />
                        )}/>
                        <Route exact path="/product/:productId" render={(props) => {
                            let productId = props.location.pathname.replace('/product/', '');
                            return (
                                <SingleProduct 
                                    product={this.state.productList[productId]}
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