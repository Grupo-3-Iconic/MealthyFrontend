import http from "../core/http-common";

export class ProductApiService{
    getAll(){
        return http.get('/products');
    }
    getById(id){
        return http.get(`/products/${id}`);
    }
    findByName(name) {
        return http.get('/products', {
            params: {
                name: name
            }
        });
    }
}