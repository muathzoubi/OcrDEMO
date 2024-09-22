import { Uploader } from 'uploader'; // Installed by "react-uploader".
import { UploadDropzone } from 'react-uploader';

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: 'public_12a1z7Q5VSPk6GXsgRR9aE1Kpjvm', // Get production API keys from Bytescale
});

// Configuration options: https://www.bytescale.com/docs/upload-widget/frameworks/react#customize
const options = { multi: false };

const FileUploader = (props: { setFile: any }) => (
  <UploadDropzone
    onComplete={() => {}}
    className="btn"
    uploader={uploader}
    options={options}
    onUpdate={(files) => props.setFile(files.map((x) => x.fileUrl).join('\n'))}
    height="50vh"
    width="40vw"
  />
);
export default FileUploader;
