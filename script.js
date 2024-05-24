"use strict";

const countriesContainer = document.querySelector(".countries");

console.log("where am i");

const renderCountry = function (data) {
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.subregion}</h4>
            <p class="country__row"><span>👫</span>${(
                data.population / 1000000
            ).toFixed(1)} mil. people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
                data.currencies[0].name
            }</p>
        </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML("beforeend", html);
};

const whereAmI = function (lat, long) {
    fetch(
        `https://us1.locationiq.com/v1/reverse?key=pk.c2e2b844c5a3c042b77eaf3eecb73964&lat=${lat}&lon=${long}&format=json`
    )
        .then((response) => {
            if (!response.ok) throw new Error(`${response.status}`);
            return response.json();
        })
        .then((data) => {
            console.log(
                `You are in ${data.address.city}, ${data.address.country}`
            );
            getCountryData(`${data.address.country}`);
        })
        .catch((err) => {
            console.log(`${err} 🤬🤬🤬`);
        });
};

const getCountryData = function (country) {
    fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
        .then((response) => {
            if (!response.ok)
                throw new Error(`Country not found (${response.status})`);

            return response.json();
        })
        .then((data) => {
            console.log(data[0]);
            renderCountry(data[0]);
        })
        .catch((err) => console.error(`${err} 🤬🤬🤬`))
        .finally(() => (countriesContainer.style.opacity = 1));
};

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);

/*
token
pk.c2e2b844c5a3c042b77eaf3eecb73964
*/
