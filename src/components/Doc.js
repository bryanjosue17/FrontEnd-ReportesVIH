import React from "react";
import {
  Page,
  Text,
  Font,
  Image,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

import logo from "../assets/logo.png";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 15,
    marginHorizontal: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Oswald",
    width: "300px"
  },
  paragraph: {
    fontSize: 16,
    margin: 12,
    fontFamily: "Oswald",
  },
  observaciones: {
    fontSize: 12,
    margin: 12,
    fontFamily: "Oswald",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const Doc = ({ reportes }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Image style={styles.image} src={logo} />

        <Text style={styles.title}>Hospital Nacional de Jutiapa</Text>

        <Text style={styles.paragraph}>Reporte sobre VIH</Text>

        {reportes.map((reporte, index) => {
          console.log(reporte);
          return (
            <View key={index}>
              <Text style={styles.title}>
                -----------------------------------------------------------------
              </Text>
              <Text style={styles.subtitle}>Datos generales del reporte</Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Responsable</Text>
                <Text style={styles.text}>Tipo Cargo</Text>
                <Text style={styles.text}>Tipo Servicio</Text>
                <Text style={styles.text}>No. de Hoja</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.responsable}</Text>
                <Text style={styles.text}>{reporte.tipo_cargo}</Text>
                <Text style={styles.text}>{reporte.tipo_servicio}</Text>
                <Text style={styles.text}>{reporte.no_hoja}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Fecha</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.date}</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
              </View>

              <Text style={styles.subtitle}>Datos de la persona a ingresar</Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Primer Nombre</Text>
                <Text style={styles.text}>Segundo Nombre</Text>
                <Text style={styles.text}>Primer Apellido</Text>
                <Text style={styles.text}>Segundo Apellido</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.primer_nombre}</Text>
                <Text style={styles.text}>{reporte.segundo_nombre}</Text>
                <Text style={styles.text}>{reporte.primer_apellido}</Text>
                <Text style={styles.text}>{reporte.segundo_apellido}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>DPI</Text>
                <Text style={styles.text}>No. Orden</Text>
                <Text style={styles.text}>Día de Consulta</Text>
                <Text style={styles.text}>Nacionalidad</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.cui}</Text>
                <Text style={styles.text}>{reporte.no_orden}</Text>
                <Text style={styles.text}>{reporte.dia_consulta}</Text>
                <Text style={styles.text}>{reporte.nacionalidad}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Departamento de Nacimiento</Text>
                <Text style={styles.text}>Municipio de Nacimiento</Text>
                <Text style={styles.text}>Fecha de Nacimiento</Text>
                <Text style={styles.text}>Lugar Poblado</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.departamento_nac}</Text>
                <Text style={styles.text}>{reporte.municipio_nac}</Text>
                <Text style={styles.text}>{reporte.fecha_nac}</Text>
                <Text style={styles.text}>{reporte.lugar_poblado}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Sexo</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.sexo}</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
              </View>

              <Text style={styles.subtitle}>Pruebas realizadas</Text>


              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Orientación Sexual</Text>
                <Text style={styles.text}>Identidad Género</Text>
                <Text style={styles.text}>Estado Civil</Text>
                <Text style={styles.text}>Escolaridad</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.orientacion_sexual}</Text>
                <Text style={styles.text}>{reporte.identidad_genero}</Text>
                <Text style={styles.text}>{reporte.estado_civil}</Text>
                <Text style={styles.text}>{reporte.escolaridad}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Pueblo</Text>
                <Text style={styles.text}>Comunidad Lingüística</Text>
                <Text style={styles.text}>Condición Riesgo</Text>
                <Text style={styles.text}>Motivo Orientación</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.pueblo}</Text>
                <Text style={styles.text}>{reporte.comunidad_len}</Text>
                <Text style={styles.text}>{reporte.condicion_riesgo}</Text>
                <Text style={styles.text}>{reporte.motivo_orientacion}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Control Prenatal</Text>
                <Text style={styles.text}>Semana Gestación</Text>
                <Text style={styles.text}>Orientación Preprueba</Text>
                <Text style={styles.text}>Resultados Tamizaje</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.control_prenatal}</Text>
                <Text style={styles.text}>{reporte.semana_gestacion}</Text>
                <Text style={styles.text}>{reporte.orientacion_preprueba}</Text>
                <Text style={styles.text}>{reporte.resultados_tamizaje}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Resultados Prueba VIH</Text>
                <Text style={styles.text}>Prueba Treponémica</Text>
                <Text style={styles.text}>Orientación Preprueba</Text>
                <Text style={styles.text}>Resultado Difución</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.resultados_prueba_vih}</Text>
                <Text style={styles.text}>{reporte.prueba_treponemica}</Text>
                <Text style={styles.text}>{reporte.prueba_no_treponemica}</Text>
                <Text style={styles.text}>{reporte.resultado_difucion}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Referencia</Text>
                <Text style={styles.text}>Uai Ref</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.referencia}</Text>
                <Text style={styles.text}>{reporte.uai_ref}</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Referencia</Text>
                <Text style={styles.text}>Uai Ref</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>{reporte.referencia}</Text>
                <Text style={styles.text}>{reporte.uai_ref}</Text>
                <Text style={styles.text}>{""}</Text>
                <Text style={styles.text}>{""}</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.text}>Observaciones</Text>
              
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.observaciones}>{reporte.observaciones}</Text>
               
              </View>

            </View>
          );
        })}
      </Page>
    </Document>
  );
};

export default Doc;