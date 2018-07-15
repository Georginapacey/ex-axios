const API_URL = 'https://www.jetro.ovh';

class holidayApi {

  constructor() {
    this.api = axios.create({
      baseURL: API_URL
    });
  }

  getUsers() {
    return this.api.get('/usuarios')
      .then(response => {
        return Promise.resolve(response.data.data);
        /* var obj = JSON.parse(response);
        console.log(obj); */      
      })
      .catch(error => {
        console.error(error);
      });
  }
}