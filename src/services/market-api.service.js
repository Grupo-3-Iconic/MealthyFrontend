import http from "../core/http-common";

export class MarketApiService{
    getAll() {
        return http.get('/markets');
    }
    getById(id) {
        return http.get(`/markets/${id}`);
    }
    create(data) {
        return http.post('/markets', data);
    }
    update(id, data) {
        return http.put(`/markets/${id}`, data);
    }
    delete(id) {
        return http.delete(`/markets/${id}`);
    }
    findByTitle(title) {
        return http.get(`/markets?title=${title}`);
    }
}