import {
  RETRIEVE_REPORTE,
  RETRIEVE_REPORTES,
  CHANGUE_KEY,
  CLEAN_DETALLE,
  CREATE_REPORTE,
  UPDATE_REPORTE,
  DELETE_REPORTE,
  CLEAN_REPORTES,
  SEARCH_REPORTES
} from "../actions/types";
import { reportesInterface } from "../models/reportesInterface";

const initialState = {
  detalleReporte: new reportesInterface(),
  reportes: [],
};

const reportesReducer = function (state = initialState, { payload, type }) {
  switch (type) {
    case CREATE_REPORTE: {
      return {
        ...state,
        reportes: [...state.reportes, payload],
      };
    }
    case SEARCH_REPORTES:
    case RETRIEVE_REPORTES: {
      return {
        ...state,
        reportes: payload,
      };
    }

    case RETRIEVE_REPORTE: {
      return {
        ...state,
        detalleReporte: new reportesInterface(payload),
      };
    }
    case UPDATE_REPORTE: {
      return {
        ...state,
        reportes: state.reportes.map((item) =>
          item.id_reporte === payload.id_reporte ? payload : item
        ),
      };
    }

    case DELETE_REPORTE: {
      return {
        ...state,
        reportes: state.reportes.filter(
          (item) => item.id_reporte !== payload
        ),
      };
    }
    case CLEAN_REPORTES: {
      return {
        ...state,
        reportes: [],
      };
    }

    case CHANGUE_KEY: {
      return {
        ...state,
        detalleReporte: {
          ...state.detalleReporte,
          ...payload,
        },
      };
    }

    case CLEAN_DETALLE: {
      return {
        ...state,
        detalleReporte: new reportesInterface(),
      };
    }

    default:
      return state;
  }
};
export default reportesReducer;
