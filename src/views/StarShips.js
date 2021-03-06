import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const StarShips = () => {

    const { store: { starships, path, extension, list }, actions: { addFavorite, foundFavorite } } = useContext(Context);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        //getApiStarShips();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 py-3">
                    {
                        !!selected && (
                            <div className="card detail">
                                <img src={`${path}${selected.name}${extension}`} className="starship-detail" />
                                <div className="card-body">
                                    <h2 className="card-title d-flex justify-content-center mb-3">{selected.name}</h2>
                                    <p className="card-text">
                                        <p className="card-text">Fabricante: {selected.manufacturer}</p>
                                        <p className="card-text">Costo en Creditos: {selected.cost_in_credits}</p>
                                        <p className="card-text">Capacidad de Carga: {selected.cargo_capacity}</p>
                                        <p className="card-text">Velocidad Máxima: {selected.max_atmosphering_speed}</p>
                                        <p className="card-text">Tripulación: {selected.crew}</p>
                                    </p>
                                </div>
                                <div className="card-footer bg-black">
                                    <button className="btn btn-danger btn-sm float-end" onClick={() => setSelected(null)}>Close</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="row">
                {
                    starships === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) :
                        !!starships &&
                        starships.results.map((starships, index) => {
                            const { name } = starships;

                            return (
                                <div className="col-md-4 my-3" key={index}>
                                    <div className="card" >
                                        <img src={`${path}${name}${extension}`} className="card-starship" onClick={() => {
                                            setSelected(starships)
                                            window.scroll(0, 0)
                                        }} />
                                        <button
                                            type="button"
                                            className="btn-position"
                                            onClick={() =>
                                                addFavorite(name)
                                            }>
                                            {
                                                foundFavorite(name, list) ? <i class="far fa-heart"></i> : <i class="fas fa-heart"></i>
                                            }
                                            </button>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default StarShips;

/* "results": [
    {
        "name": "CR90 corvette",
        "model": "CR90 corvette",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "3500000",
        "length": "150",
        "max_atmosphering_speed": "950",
        "crew": "30-165",
        "passengers": "600",
        "cargo_capacity": "3000000",
        "consumables": "1 year",
        "hyperdrive_rating": "2.0",
        "MGLT": "60",
        "starship_class": "corvette", */