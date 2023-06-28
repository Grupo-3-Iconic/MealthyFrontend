import axios from 'axios';
const http= axios.create({baseURL:"https://localhost:7205/api/v1"})

export class RecipeApiService {
    getAll() {
        return http.get('/recipe');
    }
    getById(id) {
        return http.get(`/recipe/${id}`);
    }
    create(data) {
        return http.post('/recipe', data);
    }
    update(id, data) {
        return http.put(`/recipe/${id}`, data);
    }
    delete(id) {
        return http.delete(`/recipe/${id}`);
    }
    getStepByRecipeId(id) {
        return http.get(`/recipes/${id}/steps`);
    }
    getIngredientByRecipeId(id) {
        return http.get(`/recipes/${id}/ingredients`);
    }
    findByTitle(title) {
        return http.get(`/recipes?title=${title}`);
    }
}
