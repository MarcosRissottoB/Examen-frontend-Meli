import React from 'react';
import './Header.scss';

import Search from '../Search/Search';

// const Header = (props) => {
//     return (
//         <div>
//             <nav>
//                 <div className="nav-wrapper container-header">
//                     <a href="*">{props.titulo}</a>
//                     <Search />
//                 </div>
//             </nav>
//         </div>
//     );
// };

const Header = (props) => {
    return (
        <div>
            <nav className="container-header">
                {/* <img src="/img/logo.png" /> */}
                <a href="*">{props.titulo}</a>
                <Search />
            </nav>
        </div>
    )
}

export default Header;