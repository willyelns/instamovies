/// Creating a service exclusive for Http, in case to make easier to change in the future
const HttpClient = {
  // TODO: Add here all the rest functions: POST, PUT, PATCH, DELETE
  get: async url => {
    const response = await fetch(url);
    return await response.json();
  }
};

Object.freeze(HttpClient);
export default HttpClient;
