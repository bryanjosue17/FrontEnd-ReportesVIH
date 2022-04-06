import {
  RETRIEVE_REPORTE,
  RETRIEVE_REPORTES,
  CHANGUE_KEY,
  CLEAN_DETALLE,
  CREATE_REPORTE,
  UPDATE_REPORTE,
  DELETE_REPORTE,
  CLEAN_REPORTES,
  SEARCH_REPORTES,
} from "./types";

import ReporteDataService from "../../services/reportes.service";

export const createReportes =
  (
    responsable,
    tipo_cargo,
    tipo_servicio,
    no_hoja,
    date,
    no_orden,
    dia_consulta,
    primer_nombre,
    segundo_nombre,
    primer_apellido,
    segundo_apellido,
    cui,
    nacionalidad,
    departamento_nac,
    municipio_nac,
    fecha_nac,
    lugar_poblado,
    sexo,
    orientacion_sexual,
    identidad_genero,
    estado_civil,
    escolaridad,
    pueblo,
    comunidad_len,
    condicion_riesgo,
    motivo_orientacion,
    control_prenatal,
    semana_gestacion,
    orientacion_preprueba,
    resultados_tamizaje,
    resultados_prueba_vih,
    prueba_treponemica,
    prueba_no_treponemica,
    resultado_difucion,
    referencia,
    uai_ref,
    observaciones,
    datetime
  ) =>
  async (dispatch) => {
    try {
      const res = await ReporteDataService.create({
        responsable,
        tipo_cargo,
        tipo_servicio,
        no_hoja,
        date,
        no_orden,
        dia_consulta,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        segundo_apellido,
        cui,
        nacionalidad,
        departamento_nac,
        municipio_nac,
        fecha_nac,
        lugar_poblado,
        sexo,
        orientacion_sexual,
        identidad_genero,
        estado_civil,
        escolaridad,
        pueblo,
        comunidad_len,
        condicion_riesgo,
        motivo_orientacion,
        control_prenatal,
        semana_gestacion,
        orientacion_preprueba,
        resultados_tamizaje,
        resultados_prueba_vih,
        prueba_treponemica,
        prueba_no_treponemica,
        resultado_difucion,
        referencia,
        uai_ref,
        observaciones,
        datetime,
      });
      dispatch({
        type: CREATE_REPORTE,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const retrieveReportes = () => async (dispatch) => {
  try {
    const res = await ReporteDataService.getAll();

    dispatch({
      type: RETRIEVE_REPORTES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveReporte = (id) => async (dispatch) => {
  try {
    const res = await ReporteDataService.get(id);
    dispatch({
      type: RETRIEVE_REPORTE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateReporte = (id, data) => async (dispatch) => {
  try {
    const res = await ReporteDataService.update(id, data);
    dispatch({
      type: UPDATE_REPORTE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteReporte = (id) => async (dispatch) => {
  try {
    const res = await ReporteDataService.delete(id);
    dispatch({
      type: DELETE_REPORTE,
      payload: id,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findReportesByDate= (date) => async (dispatch) => {
  try {
    const res = await ReporteDataService.findByDate(date);
    dispatch({
      type: SEARCH_REPORTES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const changeKeyReportes = (data) => {
  return {
    type: CHANGUE_KEY,
    payload: data,
  };
};

export const cleanReportes = () => {
  return {
    type: CLEAN_REPORTES,
  };
};

export const cleanDetalleReportes = () => {
  return {
    type: CLEAN_DETALLE,
  };
};
