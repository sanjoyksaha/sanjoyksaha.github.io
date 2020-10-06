import React, { useState, Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Pdf from './sanjoy-kumar-saha.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
 
class Resume extends Component {
    state = {
      numPages: null,
      pageNumber: 1,
    }
    error(error) {
      console.log(error);
    }
    onDocumentLoad = ({ numPages, pageNumber }) =>
      this.setState({
      numPages, pageNumber
    })
    onItemClick = ({ pageNumber }) =>
      this.setState({ pageNumber
    })
    previousPage = () => this.changePage(-1)
    nextPage = () => this.changePage(1)
    changePage = offset =>
      this.setState(prevState => ({
        pageNumber: (prevState.pageNumber || 1) + offset,
    }))
    render() {
      const { pageNumber, numPages } = this.state;
      return (
        <div>
          <Document
            file = {Pdf}
            onLoadSuccess={this.onDocumentLoad}
            onItemClick={this.onItemClick}
          >
          </Document>
                 <div>
                  <button
                    disabled={pageNumber <= 1}
                    onClick={this.previousPage}
                  >
                    Précedante
                  </button>
                  <span>Page {pageNumber || (numPages ? 1 : '--')} sur {numPages || '--'}</span>
                  <button
                    disabled={pageNumber >= numPages}
                    onClick={this.nextPage}
                  >
                    Suivante
                  </button>
                </div>
        </div>
      );
    }
}

export default Resume;