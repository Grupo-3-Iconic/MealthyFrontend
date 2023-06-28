import axios from 'axios';

const https =axios.create({
    baseURL: 'https://localhost:7205/api/v1',
    headers: { 'Content-type': 'application/json' }
})
export class MarketApiService{
    getAll() {
        return http.get('/market');
    }
    getById(id) {
        return http.get(`/market/${id}`);
    }
    create(data) {
        return https.post('/market', data);
    }
    update(id, data) {
        return http.put(`/market/${id}`, data);
    }
    delete(id) {
        return http.delete(`/market/${id}`);
    }
    findByTitle(title) {
        return http.get(`/market?title=${title}`);
    }
}