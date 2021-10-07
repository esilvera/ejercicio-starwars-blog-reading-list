import React, { useContext } from 'react';
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
                            className="dropdown-item d-flex justify-content-between text-white s-text bg-black"
                            id={index}>
                            {newFavorite.favorite}
                            <button
                                type="button"
                                className="d-flex float-end"
                                onClick={() =>
                                    deleteFavorite(index)
                                }><i class="far fa-trash-alt"></i></button>
                        </li>
                    );
                })}

        </>
    );
};

export default Favorites;
