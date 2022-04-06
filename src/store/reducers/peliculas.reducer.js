import {
  RETRIEVE_PELICULAS,
  RETRIEVE_PELICULA,
  CHANGUE_KEY,
  CLEAN_DETALLE,
  CREATE_PELICULA,
  UPDATE_PELICULA,
  DELETE_PELICULA,
  DELETE_PELICULAS,
  CLEAN_PELICULAS,
  SEARCH_PELICULAS,
} from "../actions/types";
import { peliculasInterface } from "../model/peliculasInterface";

const initialState = {
  detallePeliculas: new peliculasInterface(),
  peliculas: [],
};

const peliculasReducer = function (state = initialState, { payload, type }) {
  switch (type) {
    case CREATE_PELICULA: {
      return {
        ...state,
        peliculas: [...state.peliculas, payload],
      };
    }
    case SEARCH_PELICULAS:
    case RETRIEVE_PELICULAS: {
      return {
        ...state,
        peliculas: payload,
      };
    }

    case RETRIEVE_PELICULA: {
      return {
        ...state,
        detallePeliculas: new peliculasInterface(payload),
      };
    }
    case UPDATE_PELICULA: {
      return {
        ...state,
        peliculas: state.peliculas.map((item) =>
          item.id_pelicula === payload.id_pelicula ? payload : item
        ),
      };
    }

    case DELETE_PELICULA: {
      console.log(payload);
      return {
        ...state,
        peliculas: state.peliculas.filter(
          (item) => item.id_pelicula !== payload
        ),
      };
    }
    case CLEAN_PELICULAS:
    case DELETE_PELICULAS: {
      return {
        ...state,
        peliculas: [],
      };
    }

    case CHANGUE_KEY: {
      return {
        ...state,
        detallePeliculas: {
          ...state.detallePeliculas,
          ...payload,
        },
      };
    }

    case CLEAN_DETALLE: {
      return {
        ...state,
        detallePeliculas: new peliculasInterface(),
      };
    }

    default:
      return state;
  }
};
export default peliculasReducer;
