'use client';
import { pdfjs, Document, Page as PDFPage } from 'react-pdf'; //'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useEffect, useMemo, useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

interface Props {
    fileUrl: string;
  }
  export default function PDF({ fileUrl }: Props) {
    const [numPages, setNumPages] = useState<number>();
    const [pdfLoadFailed, setPdfLoadFailed] = useState<boolean>(false);
  
    useEffect(() => {
      setPdfLoadFailed(false);
    }, [fileUrl]);
  
    const pdfPages = useMemo(
      () =>
        numPages
          ? Array.from({ length: numPages }).map((_, i) => (
              <PDFPage
                pageNumber={i + 1}
                key={i}
                loading={<div>Loading</div>}
              />
            ))
          : [],
      [numPages]
    );
  
    const onDocumentLoadSuccess = ({ numPages }: any) => {
      setNumPages(numPages);
      setPdfLoadFailed(false);
    };
  
    return pdfLoadFailed ? (
      <div>failed to load pdf</div>
    ) : (
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={err => {
          console.error('PDFViewer::onLoadError', err);
          setPdfLoadFailed(true);
        }}
        loading={PdfLoader}
      >
        {pdfPages}
      </Document>
    );
  }
  
  const PdfLoader = <div>Loading</div>;
