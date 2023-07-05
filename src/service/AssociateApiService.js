import ApiService from "./ApiService";

export default class  AssociateApiService extends ApiService {
  constructor() {
    super("/associate");
  }

  create(object) {
    return this.post("", object);
  }

  update(id, object) {
    return this.put(`/${id}`, object);
  }

  delete(id) {
    return super.delete(`/${id}`);
  }

  find(id) {
    return this.get(`/${id}`);
  }

 
}
