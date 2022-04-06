import http from "./http.service";

class ReporteDataService {
  getAll() {
    return http.get("/reportes");
  }

  get(id) {
    return http.get(`/reportes/${id}`);
  }

  create(data) {
    return http.post("/reportes", data);
  }

  update(id, data) {
    return http.put(`/reportes/${id}`, data);
  }

  delete(id) {
    return http.delete(`/reportes/${id}`);
  }

  deleteAll() {
    return http.delete(`/reportes`);
  }

  findByDate(date) {
    return http.get(`/reportes?date=${date}`);
  }
}

export default new ReporteDataService();