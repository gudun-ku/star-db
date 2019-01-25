export default class SwapiService {

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