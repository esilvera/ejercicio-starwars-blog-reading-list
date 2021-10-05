import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const Planets = () => {

    const { store: { planets } } = useContext(Context);
    const [selected, setSelected] = useState(null);

    const path = "./pictures/";
    const extension = ".jpg";


    useEffect(() => {
        //getApiPlanets();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 py-5">
                    {
                        !!selected && (
                            <div className="card mb-3 info bg-black">
                                <div className="row g-0">
                                    <div className="col-md-7">
                                        <img src={`${path}${selected.name}${extension}`} className="planet-detail" />
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body">
                                            <h4 className="card-title d-flex justify-content-center">{selected.name}</h4>
                                            {/* <p className="card-text my-3">
                                                <p className="card-text">Color de Ojos: {selected.eye_color}</p>
                                                <p className="card-text">Color de Cabello: {selected.hair_color}</p>
                                                <p className="card-text">Altura: {selected.height}</p>
                                                <p className="card-text">Peso: {selected.mass}</p>
                                                <p className="card-text">Sexo: {selected.gender}</p>
                                                <p className="card-text">Cumpleaños: {selected.birth_year}</p>
                                            </p> */}
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-danger btn-sm float-end" onClick={() => setSelected(null)}>Close</button>
                                        </div>
                                    </div>
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
                        //characters.data.results.map((character, index) => {
                        planets.results.map((planet, index) => {
                            const { name } = planet;

                            return (
                                <div className="card mb-3" style={{ maxWidth: 540 }} key={index}>
                                    <div className="row g-0">
                                        <div className="col-md-8">
                                            <img src={`${path}${name}${extension}`} class="img-fluid rounded-start" />
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card-body">
                                                <h5 className="card-title">{name}</h5>
                                                <button className="btn btn-outline-success" onClick={() => {
                                                    setSelected(planet)
                                                    window.scroll(0, 0)
                                                }}>
                                                    Show Detail
                                                </button>
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