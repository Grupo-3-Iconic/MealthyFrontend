import http from "../core/http-common";

export class StoreApiService{
    getAll(){
        return http.get('/stores');
    }
    getById(id){
        return http.get(`/stores/${id}`);
    }
}