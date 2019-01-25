console.log('stardb');

// https://swapi.co
// fetch api
/*
fetch('https://swapi.co/api/people/1')
    .then((resp) => {
        console.log('Got response', resp.status);
        return resp.json();        
    })
    .then((body) => {
        console.log(body);
    });
*/

// async -await code
const getResource = async (url) => {
    const resp = await fetch(url);
    if (!resp.ok) {
        throw new Error(`Could not fetch ${url}, received status: ${resp.status}`);
    }
    const body = await resp.json();
    return body;
};

// with errors
getResource('https://swapi.co/api/people/2342341')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.log('Could not fetch', err);
    });

