const API_URL = 'https://jsonplaceholder.typicode.com';

class BlogApi {

  constructor() {
    this.api = axios.create({
      baseURL: API_URL
    });
  }

  getUsers() {
    return this.api.get('/users')
      .then(response => {
        return Promise.resolve(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  getUserPosts(id) {
    return this.api.get(`/posts?userId=${id}`)
      .then(response => {
        return Promise.resolve(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  deletePost(id) {
    return this.api.delete(`/posts/${id}`)
      .then(response => {
        return Promise.resolve(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
}