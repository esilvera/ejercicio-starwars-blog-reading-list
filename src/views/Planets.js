import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const Planets = () => {

    const { store: { planets, path, extension } } = useContext(Context);
    const [selected, setSelected] = useState(null);

    /* const path = "./pictures/";
    const extension = ".jpg"; */


    useEffect(() => {
        //getApiPlanets();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 py-3">
                    {
                        !!selected && (
                            <div className="card detail bg-black">
                                <img src={`${path}${selected.name}${extension}`} className="planet-detail" alt="..." />
                                <div className="card-body">
                                    <h2 className="card-title d-flex justify-content-center mb-3">{selected.name}</h2>
                                    <p className="card-text">
                                        <p className="card-text">Población: {selected.population}</p>
                                        <p className="card-text">Periodo Orbital: {selected.orbital_period}</p>
                                        <p className="card-text">Periodo Rotación: {selected.rotation_period}</p>
                                        <p className="card-text">Diametro: {selected.diameter}</p>
                                        <p className="card-text">Clima: {selected.climate}</p>
                                        <p className="card-text">Terreno: {selected.terrain}</p>
                                        <p className="card-text">Gravedad: {selected.gravity}</p>
                                        <p className="card-text">Gravedad: {selected.gravity}</p>
                                        <button className="btn btn-danger btn-sm float-end" onClick={() => setSelected(null)}>Close</button>
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="row">
                {
                    planets === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) :
                        !!planets &&
                        planets.results.map((planet, index) => {
                            const { name } = planet;

                            return (
                                <div className="col-md-6" key={index}>
                                    <div className="card mb-3 info">
                                        <div className="row g-0">
                                            <div className="col-md-8">
                                                <img src={`${path}${name}${extension}`} className="card-planet" />
                                            </div>
                                            <div className="col-md-4 bg-black">
                                                <div className="card-body">
                                                    <h4 className="card-title d-flex justify-content-center">{name}</h4>
                                                    <button className="btn btn-outline-info btn-space" onClick={() => {
                                                        setSelected(planet)
                                                        window.scroll(0, 0)
                                                    }}>
                                                        Show Detail
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Planets;

{/* "results": [
        {
            "name": "Tatooine",
            "rotation_period": "23",
            "orbital_period": "304",
            "diameter": "10465",
            "climate": "arid",
            "gravity": "1 standard",
            "terrain": "desert",
            "surface_water": "1",
            "population": "200000", */}

