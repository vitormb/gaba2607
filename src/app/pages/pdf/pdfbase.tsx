import React from 'react';
import { PDFViewer, Document, Page, Text } from '@react-pdf/renderer';

const CriarPDF = () => {
  return (
    <PDFViewer>
      <Document>
        <Page>
          <Text>Hello, world!</Text>
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default CriarPDF;