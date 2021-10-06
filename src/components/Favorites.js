import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';

const Favorites = () => {

    const { store: { list }, actions: {deleteFavorite}} = useContext(Context);
    //const [list, setList] = useState([]);
    //const [favorite, setFavorite] = useState("");


    return (
        <>
            {list.length > 0 &&
                list.map((newFavorite, index) => {
                    // newFavorite tiene: {id: 1, favorite: "Personaje X"} || index tiene: un indice de recorrido del array
                    return (
                        <li
                            key={index} // Elemento unico para React
                            className="dropdown-item d-flex justify-content-between"
                            id={index}>
                            {newFavorite.favorite}
                            <button
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                                onClick={() =>
                                    deleteFavorite(index)
                                    //alert("boton eliminar")
                                }></button>
                        </li>
                    );
                })}

        </>
    );
};

export default Favorites;

/* const handleKeypress = evento => {
    // Verifica si se pulso la tecla enter
    if (evento.keyCode === 13) {
        handleSubmit(evento);
    }
}; */
/* if (task.trim() === "") {
//alert("Debe ingresar una Tarea");
return;
} */