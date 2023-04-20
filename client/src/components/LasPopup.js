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
        <div onClick={() => { onClose(); }} className="bg-gray-800 bg-opacity-30 fixed flex justify-center items-center w-full h-full">
            <div onClick={(e) => { e.stopPropagation(); }} className="border-2 border-blue-300 fixed top-14 shadow-2xl shadow-black bg-white flex items-center justify-center">
                <button onClick={() => { onClose(); }} className="absolute rounded-2xl top-0 left-0 pt-2 px-2 hover:bg-inherit  hover:shadow-inner">X</button>
                <div className="mt-8 flex justify-center items-center mx-auto">
                    <div className={`h-[22rem] md:h-[34rem] lg:h-[40rem] pb-10 overflow-scroll`}>
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

