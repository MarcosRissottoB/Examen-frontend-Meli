import React, { Component} from 'react';
import './Search.scss';

class Search extends Component {

    productSearch = (e) => {
        const term = e.target.value;
        this.props.search(term);
    }

    render() {
        return (
            <form className="search">
                <input type="text"
                 placeholder="Nunca dejes de buscar"
                 onChange={this.productSearch}
                 />
                <button>LUPA</button>
            </form>
        );
    }
}

export default Search;