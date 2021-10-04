import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const Characters = () => {

    //const [apiCharacters, setApiCharacters] = useState(null);

    const { store: { url, characters }, actions: { getApiCharacters } } = useContext(Context);
    
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
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 offset-md-4 my-3">
                    <h3>Ejercicio STAR WARS</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 offset-md-4 my-3">
                    <ul className="list-group">
                        {characters !== null && characters.results.length > 0 &&
                            characters.results.map((newTask, index) => {
                                // newtask tiene: {name: "", uid: 1, url: ""} || index tiene: un indice de recorrido del array
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

export default Characters;