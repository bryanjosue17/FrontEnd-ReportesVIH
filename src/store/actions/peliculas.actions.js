import {
  RETRIEVE_PELICULA,
  RETRIEVE_PELICULAS,
  CHANGUE_KEY,
  CLEAN_DETALLE,
  CREATE_PELICULA,
  UPDATE_PELICULA,
  DELETE_PELICULA,
  DELETE_PELICULAS,
  CLEAN_PELICULAS,
  SEARCH_PELICULAS
} from "./types";
import PeliculaDataService from "../../services/pelicula.service";

export const createPelicula =
  (nombre, autor, genero, anio, datetime) => async (dispatch) => {
    try {
      const res = await PeliculaDataService.create({
        nombre,
        genero,
        anio,
        autor,
        datetime,
      });
      dispatch({
        type: CREATE_PELICULA,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const retrievePeliculas = () => async (dispatch) => {
  try {
    const res = await PeliculaDataService.getAll();

    dispatch({
      type: RETRIEVE_PELICULAS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrievePelicula = (id) => async (dispatch) => {
  try {
    const res = await PeliculaDataService.get(id);
    dispatch({
      type: RETRIEVE_PELICULA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updatePelicula = (id, data) => async (dispatch) => {
  try {
    const res = await PeliculaDataService.update(id, data);
    dispatch({
      type: UPDATE_PELICULA,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletePelicula = (id) => async (dispatch) => {
  try {
    const res = await PeliculaDataService.delete(id);
    dispatch({
      type: DELETE_PELICULA,
      payload: id,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deletePeliculas = () => async (dispatch) => {
  try {
    const res = await PeliculaDataService.deleteAll();
    dispatch({
      type: DELETE_PELICULAS,
  
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findPeliculasByNombre = (nombre) => async (dispatch) => {
  try {
    const res = await PeliculaDataService.findByNombre(nombre);
    dispatch({
      type: SEARCH_PELICULAS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const changeKeyPeliculas = (data) => {
  return {
    type: CHANGUE_KEY,
    payload: data,
  };
};

export const cleanPeliculas = () => {
  return {
    type: CLEAN_PELICULAS,
  };
};


export const cleanDetallePelicula = () => {
  return {
    type: CLEAN_DETALLE,
  };
};
