import http from "./http.service";

class PeliculaDataService {
  getAll() {
    return http.get("/peliculas");
  }

  get(id) {
    return http.get(`/peliculas/${id}`);
  }

  create(data) {
    return http.post("/peliculas", data);
  }

  update(id, data) {
    return http.put(`/peliculas/${id}`, data);
  }

  delete(id) {
    return http.delete(`/peliculas/${id}`);
  }

  deleteAll() {
    return http.delete(`/peliculas`);
  }

  findByNombre(nombre) {
    return http.get(`/peliculas?nombre=${nombre}`);
  }
}

export default new PeliculaDataService();