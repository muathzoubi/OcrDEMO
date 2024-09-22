import { useState } from 'react';
import { createWorker } from 'tesseract.js';
import FileUploader from './FileUploader';

function Left(props: { ref: any; setRes: any }) {
  const [file, setFile] = useState();

  const runOcr = async () => {
    props.setRes('');
    const worker = await createWorker('eng');

    (async () => {
      const {
        data: { text },
      } = await worker.recognize(file);
      console.log(text);
      props.setRes(text);
      await worker.terminate();
    })();
  };
  return (
    <>
      <div className="left-side">
        <FileUploader setFile={setFile} />
        <p className="read-the-docs">
          A powerful Optical Character Recognition (OCR) feature that allows
          users to easily extract and convert text from images or scanned
          documents into editable, searchable, and digital formats. This tool
          simplifies document management, enhances accessibility, and supports
          multiple languages, making it ideal for personal, academic, and
          business use.
        </p>
      </div>
      <div className="ocr-btn-continaer btn">
        <button onClick={runOcr} className="ocr-btn " disabled={file === ''}>
          <img
            width="35"
            height="35"
            src="https://img.icons8.com/3d-fluency/50/refresh.png"
            alt="refresh"
          />
        </button>
      </div>
    </>
  );
}

export default Left;
