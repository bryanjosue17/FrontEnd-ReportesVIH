import moment from "moment";

export const reportesInterface = (data = {}) => {
  return {
    id_reporte: data?.id_reporte || null,
    responsable: data?.responsable ||null,
    tipo_cargo: data?.tipo_cargo || null,
    tipo_servicio: data?.tipo_servicio || null,
    no_hoja: data?.no_hoja || null,
    date: moment().format("YYYY-MM-DD") || null,
    no_orden: data?.no_orden || null,
    dia_consulta: data?.dia_consulta || null,
    primer_nombre: data?.primer_nombre || null,
    segundo_nombre: data?.segundo_nombre || null,
    primer_apellido: data?.primer_apellido || null,
    segundo_apellido: data?.segundo_apellido || null,
    cui: data?.cui || null,
    nacionalidad: data?.nacionalidad || null,
    departamento_nac: data?.departamento_nac || null,
    municipio_nac: data?.municipio_nac || null,
    fecha_nac:  moment().format("YYYY-MM-DD")  || null,
    lugar_poblado: data?.lugar_poblado || null,
    sexo: data?.sexo || null,
    orientacion_sexual: data?.orientacion_sexual || null,
    identidad_genero: data?.identidad_genero || null,
    estado_civil: data?.estado_civil || null,
    escolaridad: data?.escolaridad || null,
    pueblo: data?.pueblo || null,
    comunidad_len: data?.comunidad_len || null,
    condicion_riesgo: data?.condicion_riesgo || null,
    motivo_orientacion: data?.motivo_orientacion || null,
    control_prenatal: data?.control_prenatal || null,
    semana_gestacion: data?.semana_gestacion || null,
    orientacion_preprueba: data?.orientacion_preprueba || null,
    resultados_tamizaje: data?.resultados_tamizaje || null,
    resultados_prueba_vih: data?.resultados_prueba_vih || null,
    prueba_treponemica: data?.prueba_treponemica || null,
    prueba_no_treponemica: data?.prueba_no_treponemica || null,
    resultado_difucion: data?.resultado_difucion || null,
    referencia: data?.referencia || null,
    uai_ref: data?.uai_ref || null,
    observaciones: data?.observaciones || null,
    datetime: moment().format("YYYY-MM-DD") || null,
  };
};
