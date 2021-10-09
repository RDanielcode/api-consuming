export const cardBuilder = (character) =>{
    const cards = document.createElement('card');
    cards.classList.add("single")

    cards.innerHTML = `
    <strong class="status">${character.status}</strong>
    <img src=${character.image} alt=${character.name} class="character">
    <h2>${character.name}</h2>
    <span> ${character.species}</p>`;

    return cards;
}

