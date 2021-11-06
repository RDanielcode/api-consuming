const API = 'https://rickandmortyapi.com/api/character/';
import { fetchData } from './fetchData.js';
import { cardBuilder } from './cardBuild.js';
const promiseContainer = document.getElementById('promise');

// fetchData(API)
// .then(data =>{
//     data.results.map(character =>{
//         const cards = cardBuilder(character);
//         promiseContainer.appendChild(cards);
//     })
// })
// .catch (error => {
//     return error;
// })

const requestApi = async (url) =>{
    try{
        const data = await fetchData(url)
        fetchData(data.results.map(character =>{
                    const cards = cardBuilder(character);
                    promiseContainer.appendChild(cards);
                }))
    }
    catch (error){
        console.error(error);
    }
}

requestApi(API);