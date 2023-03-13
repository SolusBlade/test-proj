import base from "./base-url";
import axios from 'axios';

const searfchFormRef = document.querySelector('.header__search');
const searchInputRef = document.querySelector('.header__input');

async function searchFetch(name) {
    const url = `${base}search.php?s=${name}`;
    // const url = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    // console.log("url:", url)
    // return fetch(url)
    // .then(response => response.json());
    try {
        const {data} = await axios.get(`${url}`);
        // this.incrementPage();
        return data;
      } catch ({response:{status}}) {
        return status;
      }
}

searfchFormRef.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();
    
    const drinks = await searchFetch(searchInputRef.value.trim());
    console.log("searchInputRef.value:", searchInputRef.value)
    console.log(drinks);
    
    // buildCard();
}

// function buildCard(){

// }