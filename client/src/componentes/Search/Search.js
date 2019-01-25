import React from 'react';
import './Search.scss';

const Search = () => {
    return (
        <div className="container container-search">
            <div className="row">
                <input type="text" placeholder="Nunca dejes de buscar"></input>
                <button>LUPA</button>
            </div>
        </div>
    );
};

export default Search;