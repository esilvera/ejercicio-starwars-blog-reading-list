import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const Characters = () => {

    const { store: { characters, path, extension }, actions: {addFavorite}} = useContext(Context);
    const [selected, setSelected] = useState(null);

    /* const path = "./pictures/";
    const extension = ".jpg"; */

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
            {/*             <div className="row">
                <div className="col-md-12">
                    <h3>Characters STARWARS</h3>
                </div>
            </div> */}
            <div className="row">
                <div className="col-md-6 offset-md-3 py-5">
                    {
                        !!selected && (
                            <div className="card mb-3 info bg-black">
                                <div className="row g-0">
                                    <div className="col-md-7">
                                        <img src={`${path}${selected.name}${extension}`} className="character-detail" />
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body">
                                            <h4 className="card-title d-flex justify-content-center">{selected.name}</h4>
                                            <p className="card-text my-3">
                                                <p className="card-text">Color de Ojos: {selected.eye_color}</p>
                                                <p className="card-text">Color de Cabello: {selected.hair_color}</p>
                                                <p className="card-text">Altura: {selected.height}</p>
                                                <p className="card-text">Peso: {selected.mass}</p>
                                                <p className="card-text">Sexo: {selected.gender}</p>
                                                <p className="card-text">Cumpleaños: {selected.birth_year}</p>
                                            </p>
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
                    characters === null ? (
                        <div className="spinner-grow text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) :
                        !!characters &&
                        characters.results.map((character, index) => {
                            const { name } = character;

                            return (
                                <div className="col-md-3 my-2" key={index}>
                                    <div className="card" >
                                        <img src={`${path}${name}${extension}`} className="card-character" />
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                            <button className="btn btn-outline-success" onClick={() => {
                                                setSelected(character)
                                                window.scroll(0, 0)
                                            }}>
                                                Show Detail
                                            </button>
                                            <button
                                                type="button"
                                                className="btn-close bg-white float-end"
                                                //<i class="fal fa-heart-square"></i>
                                                aria-label="Close"
                                                onClick={() =>
                                                    addFavorite(name)
                                                }>
                                            </button>
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

/* "name": "Luke Skywalker",
"height": "172",
"mass": "77",
"hair_color": "blond",
"skin_color": "fair",
"eye_color": "blue",
"birth_year": "19BBY",
"gender": "male",  */