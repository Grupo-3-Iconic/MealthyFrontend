import axios from 'axios';
const https= axios.create({baseURL:"https://localhost:7205/api/v1/user"})

export class AuthUserService{
    //getUser(username,password,role){
       // return https.get(`/users?username=${username}&password=${password}&role=${role}`)
      //      .then(response=>response.data);


    //}
    getUser(username, password, role) {
        const url = `/users?username=${username}&password=${password}&role=${role}`;

        return https.get(url)
            .then(response => {
                if (response.data && response.data.length > 0) {
                    const user = response.data.find(user => user.username === username && user.password === password);
                    if (user) {
                        const userId = user.id;
                        localStorage.setItem('userId', userId);

                        return user;
                    } else {
                        throw new Error('Credenciales de usuario incorrectas');
                    }
                } else {
                    throw new Error('No se encontraron datos');
                }
            })
            .catch(error => {
                console.error('Error al obtener el usuario:', error);
                throw error;
            });
    }

    signUpUser(body){
        return https.post('/sign-up',body);
    }
    loginUser(body){
        return https.post('/sign-in',body);
    }
    getUserById(id){
        return https.get(`/${id}`);
    }




}