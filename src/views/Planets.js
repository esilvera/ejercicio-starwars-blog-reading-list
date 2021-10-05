import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const Planets = () => {

    const { store: { planets } } = useContext(Context);
    
    useEffect(() => {
        //getApiPlanets();
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 offset-md-4 my-3">
                    <h3>Planets STAR WARS</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-4 my-3">
                    <ul className="list-group">
                        {planets !== null && planets.results.length > 0 &&
                            planets.results.map((newTask, index) => {
                                return (
                                    <li
                                        key={index} // Elemento unico para React
                                        className="list-group-item d-flex justify-content-between"
                                        id={index}>
                                        {newTask.name}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Planets;

/*     "results": [
        {
            "name": "Tatooine", 
            "rotation_period": "23", 
            "orbital_period": "304", 
            "diameter": "10465", 
            "climate": "arid", 
            "gravity": "1 standard", 
            "terrain": "desert", 
            "surface_water": "1", 
            "population": "200000",  */