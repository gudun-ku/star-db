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
/*
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
*/

// api client class

class SwapiService {

    _baseUrl = 'https://swapi.co/api'
    
    async getResource (url) {
        const resp = await fetch(`${this._baseUrl}${url}`);
        if (!resp.ok) {
            throw new Error(`Could not fetch ${url}, received status: ${resp.status}`);
        }
        const body = await resp.json();
        return body;
    };

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    async getPerson(id) {
        const res = await this.getResource(`/people/${id}`);
        return res;
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    async getPlanet(id) {
        const res = await this.getResource(`/planets/${id}`);
        return res;
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    async getStarship(id) {
        const res = await this.getResource(`/starships/${id}`);
        return res;
    }
}

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
    console.log(people);
    people.forEach(element => {
        console.log(element.name);
    });
})

swapi.getPerson(3).then((person) => {
    console.log(person.name);
})

swapi.getAllPlanets().then((planets) => {
    console.log(planets);
    planets.forEach(element => {
        console.log(element.name);
    });
})

swapi.getPlanet(3).then((planet) => {
    console.log(planet.name);
})

swapi.getAllStarships().then((starships) => {
    console.log(starships);
    starships.forEach(element => {
        console.log(element.name);
    });
})

swapi.getStarship(3).then((starship) => {
    console.log(starship.name);
})