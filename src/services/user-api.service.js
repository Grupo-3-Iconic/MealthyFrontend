import http from "../core/http-common";
import axios from "axios";
export class UserApiService {
    getAll() {
        return http.get('/users');
    }

    getById(id) {
        return http.get(`/users/${id}`);
    }
    create(data) {
        return http.post('/users', data);
    }
    create1(data){
        return http.post('/sign-up',data);
    }
    update(id, data) {
        return http.put(`/users/${id}`, data);
    }

    delete(id) {
        return http.delete(`/users/${id}`);
    }
    findByName(name) {
        return http.get('/users', {
            params: {
                name: name
            }
        });
    }
}