import React from 'react';
import NavLink from './navLink';


function NavLinks() {
    return (
        <div className='container'>
            <nav className="nav nav-pills nav-justified flex-column flex-sm-row">
                <NavLink to="/" header="A propos de Antalya" />
                <NavLink to="/us" header="A propos de Nous" />
                <NavLink to="/invest" header="A propos d'Investissement" />
            </nav>
        </div>
      );
}

export default NavLinks;