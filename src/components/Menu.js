import React from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import Favorites from './Favorites';

const Menu = (/* { location } */) => {

    const location = useLocation();

    return (
        <div className="container-fluid">
            <div className="row">
                <img src="./pictures/Logo Starwars.jpg" className="logo-detail" />
                <ul className="nav nav-pills justify-content-center">
                    <li className="nav-item">
                        <Link className={"nav-link" + (location.pathname === '/' ? " active" : "")} aria-current="page" to="/">
                            Characters
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={"nav-link" + (location.pathname === '/planets' ? " active" : "")} to="/planets">
                            Planets
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className={"nav-link" + (location.pathname === '/starships' ? " active" : "")} to="/starships">
                            StarShips
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-expanded="false"
                        >
                            Favorites
                        </Link>
                        <ul className="dropdown-menu bg-secondary">
                            < Favorites />
                            {/*<li>
                                    <Link className="dropdown-item" href="#">
                                        Action
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        Another action
                                    </Link>
                                </li> */}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default withRouter(Menu);