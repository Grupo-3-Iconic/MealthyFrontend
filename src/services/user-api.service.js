import http from '../core/http-common';

export class UserApiService{
    getAll(){
        return http.get('users');
    }
    getById(id){
        return http.get(`/users/${id}`);
    }
    create(data)
    {
        return http.post('/users',data);
    }
    update(id, data){
        return http.put(`/users/${id}`,data);
    }
    delete(id){
        return http.delete(`/users/${id}`);
    }


}