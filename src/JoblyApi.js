import axios from 'axios';

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData._token = (JSON.parse(localStorage.getItem("_token")) || null);

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(data) {
    let res = await this.request(`companies`, data);
    return res.companies;
  }

  static async getJobs() {
    let res = await this.request('jobs');
    return res.jobs;
  }
  
  static async getUser(username) {
    let res = await this.request(`users/${username}`)
    return res;
  }

  static async login(data){
    let res = await this.request(
      'login',
      data ,
      "post"
      );
    localStorage.setItem("_token", JSON.stringify(res.token));
    return res;
  }

  static async register(data){
    let res = await this.request(
      'users',
      data,
      "post"
      );
    localStorage.setItem("_token", JSON.stringify(res.token));
    return res;
  }

  static async update(username, data){
    let res = await this.request(
      `users/${username}`,
      data.formData,
      "patch"
    )
    return res;
  };

  static async apply (id, username){
    console.log("username", username)
    let res = await this.request(
      `jobs/${id}/apply`,
      {username},
      'post'
    )
    return res;
  };
}

export default JoblyApi;