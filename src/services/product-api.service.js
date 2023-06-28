import http from '../core/http-common';

export class ProductApiService {
    getAll() {
        return http.get('/products');
    }

    getById(id){
        return http.get(`/products/${id}`);
    }
    getByStoreId(id) {
        return http.get(`/products?storeId=${id}`);
    }
    create(data) {
        return http.post('/products', data);
    }
    update(id, data) {
        return http.put(`/products/${id}`, data);
    }

    delete(id) {
        return http.delete(`/products/${id}`);
    }
    findByName(name) {
        return http.get('/products', {
            params: {
                name: name
            }
        });
    }
}


