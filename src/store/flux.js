const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            urlCharacters: "https://swapi.dev/api/people",     // "https://www.swapi.tech/api/people"
            characters: null,
            urlPlanets: "https://swapi.dev/api/planets",
            planets: null,
            urlStarShips: "https://swapi.dev/api/starships",
            starships: null
        },
        actions: {
            getApiCharacters: () => {
                const {urlCharacters} = getStore();
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
                const {urlPlanets} = getStore();
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
                const {urlStarShips} = getStore();
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
            }
        }
    }
}
export default getState;