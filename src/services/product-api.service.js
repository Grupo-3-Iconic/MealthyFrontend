import http from '../core/http-common';

export class ProductApiService {
    getAll() {
        return http.get('/products');
    }

    getByStoreId(id){
        return http.get(`/product/store/${id}`);
    }
    getById(id){
        return http.get(`/product/${id}`);
    }
    create(data) {
        return http.post('/product', data);
    }
    update(id, data) {
        return http.put(`/product/${id}`, data);
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


