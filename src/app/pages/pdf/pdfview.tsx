import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer, Document, Page, View, Text } from '@react-pdf/renderer';

const PDFembed = () => (
  <PDFViewer width="100%" height="100%">
    <Document>
      <Page>               
      <View style={{ color: 'black', textAlign: 'center', margin: 30 }}>
        <Text>RELATÓRIO DE AVALIAÇÃO NEUROPSICOLÓGICA</Text>
      </View>
        <Text>Hello, world!</Text>
        
      </Page>
    </Document>
  </PDFViewer>
);


export function PDFembedPage() {
  return (
    <div className='100vw 100vh'>
      <PDFembed/>   
    </div>
  );
}

export default PDFembedPage;