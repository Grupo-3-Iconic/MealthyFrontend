import http from '../core/http-common';

export class RecipeApiService {
    getAll() {
        return http.get('/recipes');
    }
    getById(id) {
        return http.get(`/recipes/${id}`);
    }
    create(data) {
        return http.post('/recipes', data);
    }
    update(id, data) {
        return http.put(`/recipes/${id}`, data);
    }
    delete(id) {
        return http.delete(`/recipes/${id}`);
    }
    findByTitle(title) {
        return http.get(`/recipes?title=${title}`);
    }
}
