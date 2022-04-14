import moment from "moment";

export const reportesInterface = (data = {}) => {
  return {
    id_reporte: data?.id_reporte || null,
    responsable: data?.responsable || "",
    tipo_cargo: data?.tipo_cargo || "",
    tipo_servicio: data?.tipo_servicio || "",
    no_hoja: data?.no_hoja || "",
    date: moment().format("lll") || "",
    no_orden: data?.no_orden || "",
    dia_consulta: data?.dia_consulta || "",
    primer_nombre: data?.primer_nombre || "",
    segundo_nombre: data?.segundo_nombre || "",
    primer_apellido: data?.primer_apellido || "",
    segundo_apellido: data?.segundo_apellido || "",
    cui: data?.cui || "",
    nacionalidad: data?.nacionalidad || "",
    departamento_nac: data?.departamento_nac || "",
    municipio_nac: data?.municipio_nac || "",
    fecha_nac: data?.fecha_nac || "",
    lugar_poblado: data?.lugar_poblado || "",
    sexo: data?.sexo || "",
    orientacion_sexual: data?.orientacion_sexual || "",
    identidad_genero: data?.identidad_genero || "",
    estado_civil: data?.estado_civil || "",
    escolaridad: data?.escolaridad || "",
    pueblo: data?.pueblo || "",
    comunidad_len: data?.comunidad_len || "",
    condicion_riesgo: data?.condicion_riesgo || "",
    motivo_orientacion: data?.motivo_orientacion || "",
    control_prenatal: data?.control_prenatal || "",
    semana_gestacion: data?.semana_gestacion || "",
    orientacion_preprueba: data?.orientacion_preprueba || "",
    resultados_tamizaje: data?.resultados_tamizaje || "",
    resultados_prueba_vih: data?.resultados_prueba_vih || "",
    prueba_treponemica: data?.prueba_treponemica || "",
    prueba_no_treponemica: data?.prueba_no_treponemica || "",
    resultado_difucion: data?.resultado_difucion || "",
    referencia: data?.referencia || "",
    uai_ref: data?.uai_ref || "",
    observaciones: data?.observaciones || "",
    datetime: moment().format("lll") || "",
  };
};
