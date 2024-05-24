"use strict";

console.log("where am i");

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
        })
        .catch((err) => {
            console.log(`${err} 🤬🤬🤬`);
        });
};

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/*
token
pk.c2e2b844c5a3c042b77eaf3eecb73964
*/
