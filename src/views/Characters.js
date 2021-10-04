import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const Characters = () => {

    const { store: { characters } } = useContext(Context);
    const [selected, setSelected] = useState(null);

    const path = "./pictures/";
    const extension = ".jpg";

    //const [apiCharacters, setApiCharacters] = useState(null);

    useEffect(() => {
        //getApiCharacters();
    }, [])

    /* const getApiCharacters = () => {
        fetch("https://www.swapi.tech/api/people")  //https://swapi.dev/
            .then((response) => response.json())
            .then((data) => {
                console.log("data tiene:", data)
                setApiCharacters(data)
            });
    } */
    //console.log("characters tiene: ", apiCharacters)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3>Characters STARWARS</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 offset-md-2 py-5">
                    {
                        !!selected && (
                            <div className="card detail">
                                <img src={`${path}${selected.name}${extension}`} className="detail" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{selected.name}</h5>
                                    <p className="card-text">
                                        <p className="card-text">Color de Ojos: {selected.eye_color}</p>
                                        <p className="card-text">Color de Cabello: {selected.hair_color}</p>
                                        <p className="card-text">Sexo: {selected.gender}</p>
                                        <p className="card-text">Cumpleaños: {selected.birth_year}</p>
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger btn-sm float-end" onClick={() => setSelected(null)}>Close</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="row">
                {
                    characters === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) :
                        !!characters &&
                        //characters.data.results.map((character, index) => {
                        characters.results.map((character, index) => {
                            const { name } = character;

                            return (
                                <div className="col-md-6" key={index}>
                                    <div className="card mb-3 info">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={`${path}${name}${extension}`} className="rounded-start" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{name}</h5>
                                                    {/* <p className="card-text">
                                                        <small className="text-muted">Descripcion del personaje</small>
                                                    </p> */}
                                                    <button className="btn btn-outline-success" onClick={() => {
                                                        setSelected(character)
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

export default Characters;