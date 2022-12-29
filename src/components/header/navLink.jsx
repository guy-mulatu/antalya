import React from 'react';
import { Link , useMatch, useResolvedPath } from "react-router-dom";

function NavLink({ to, header}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true});

    return ( 
        <Link to={to} className={isActive ? "nav-link active" : "nav-link"}>
             {header} 
        </Link>
     );
}

export default NavLink;