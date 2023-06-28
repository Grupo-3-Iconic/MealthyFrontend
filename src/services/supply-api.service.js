import http from '../core/http-common';

export class SupplyApiService {
    getAll() {
        return http.get('/supplies');
    }
    getById(id) {
        return http.get(`/supplies/${id}`);
    }
    create(data) {
        return http.post('/supplies', data);
    }
    update(id, data) {
        return http.put(`/supplies/${id}`, data);
    }
    getByUserId(id)
    {
        return http.get(`/supplies?userId=${id}`);
    }
    delete(id) {
        return http.delete(`/supplies/${id}`);
    }
    findByName(name) {
        return http.get(`/supplies?name=${name}`);
    }
}
