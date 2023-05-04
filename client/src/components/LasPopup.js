import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';


const LasPopup = ({ questionId, show, onClose }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfId, setPdfId] = useState();

    useEffect(() => {
        if (questionId >= "11" && questionId <= "12") {
            setPdfId("/11_12.pdf");
        } else if (questionId >= "13" && questionId <= "16") {
            setPdfId("/13_16.pdf");
        } else if (questionId >= "17" && questionId <= "21") {
            setPdfId("/17_21.pdf");
        }
    }, [questionId]);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        console.log(numPages);
        setPageNumber(1);
    }

    const [scale, setScale] = useState(1);

    const getWindowWidth = () => window.innerWidth;

    const updateScale = () => {
        const windowWidth = getWindowWidth();

        if (windowWidth < 768) {
            setScale(0.6);
        } else if (windowWidth >= 768 && windowWidth < 1024) {
            setScale(0.8);
        } else {
            setScale(1);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            updateScale();
        };

        window.addEventListener('resize', handleResize);
        updateScale();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!show) return null



    return (
        <div onClick={() => { onClose(); }} className="bg-white position-fixed d-flex justify-content-center align-items-center w-100 h-100">
            <div onClick={(e) => { e.stopPropagation(); }} className="position-fixed mt-5 shadow d-flex align-items-center justify-content-center">
                <button onClick={() => { onClose(); }} className="btn-close position-absolute top-0 start-0 pt-1 px-1"></button>
                <div className="mt-5 d-flex justify-content-center align-items-center mx-auto">
                    <div className={`pb-3`} style={{ maxHeight: '80vh', overflowY: 'scroll' }}>
                        <Document file={pdfId} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page scale={scale} renderAnnotationLayer={false} renderTextLayer={false} pageNumber={1}></Page>
                            {numPages === 2 && <Page scale={scale} renderAnnotationLayer={false} renderTextLayer={false} pageNumber={2}></Page>}
                        </Document>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LasPopup

