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
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
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

// Create Document Component
const MyDocument = ({ reportes }) => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title}>Hospital Nacional de Jutiapa</Text>

        <Image style={styles.image} src={logo} />

        <Text style={styles.subtitle}>Reporte sobre VIH</Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>Texto 1</Text>
          <Text style={styles.text}>Texto 2</Text>
          <Text style={styles.text}>Texto 3</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
