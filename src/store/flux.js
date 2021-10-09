import { findAllByLabelText } from "@testing-library/dom";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            urlCharacters: "https://swapi.dev/api/people",     // "https://www.swapi.tech/api/people"
            characters: null,
            urlPlanets: "https://swapi.dev/api/planets",
            planets: null,
            urlStarShips: "https://swapi.dev/api/starships",
            starships: null,
            path: "./pictures/",
            extension: ".jpg",
            list: [],
        },
        actions: {
            getApiCharacters: () => {
                const { urlCharacters } = getStore();
                fetch(urlCharacters, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("data characters tiene:", data)
                        setStore({
                            characters: data
                        })
                    })
            },
            getApiPlanets: () => {
                const { urlPlanets } = getStore();
                fetch(urlPlanets, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("data planets tiene:", data)
                        setStore({
                            planets: data
                        })
                    })
            },
            getApiStarShips: () => {
                const { urlStarShips } = getStore();
                fetch(urlStarShips, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("data StarShips tiene:", data)
                        setStore({
                            starships: data
                        })
                    })
            },
            addFavorite: (name) => {
                const { list } = getStore();
                console.log("name addFavorite tiene: ", name);
                
                const found = list.find(element => element.favorite === name);
                if (found) return;
                    let newFavorite = {
                        id: list.length > 0 ? list[list.length - 1].id + 1 : 1,
                        favorite: name
                    };
                    let newList = [...list]; //Copia del array original
                    newList.push(newFavorite);
                    //setList(newList);
                    //console.log("newList tiene: ", newList)

                    setStore({
                        list: newList,
                    })
            },
            foundFavorite: (name, list) => {
                console.log("name en fondFavorite tiene : ", name)
                console.log("list tiene: ", list)
                const found = list.find(element => element.favorite === name);
                console.log(found)
                if (!found) {
                   return true;
                }
                return false;
            },
            deleteFavorite: (evento) => {
                const { list } = getStore();
                let newList = [...list];
                newList.splice(evento, 1);
                //setList(newList);
                setStore({
                    list: newList
                })
            }
        }
    }
}

export default getState;