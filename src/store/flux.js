const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            url: "https://www.swapi.tech/api/people",
            characters: null
        },
        actions: {
            getApiCharacters: () => {
                const {url} = getStore();
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'aplication/json',
                    }
                })  
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("data tiene:", data)
                        setStore({
                            characters: data
                        })
                    })
            }
        }
    }
}
export default getState;