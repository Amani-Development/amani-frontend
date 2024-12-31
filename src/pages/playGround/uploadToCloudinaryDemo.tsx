import { uploadToCloudinary } from 'api/UploadCloudinary';
import React, {useState} from 'react';

const CloudinaryDemo: React.FC = () => {
    const [uploadStatus, setUploadStatus] = useState<string | null>(null);
    const [uploadedURL, setUploadedURL] = useState<string | null>(null);

// you can always pass these as props
    let LocalURLName = 'uploaded_file';
    let LocalFileName = 'uploaded_file_name';
    let FinalCloudinaryURL = 'uploaded_file_cloudinary_url';


    const getUploadURL = (fileURL: string | null, fileName: string, urlKeyname: string): void => {
    if (fileURL) {
        setUploadStatus('Uploading...');
        uploadToCloudinary(fileURL, fileName)
            .then((url: string) => {
                localStorage.setItem(urlKeyname, url); // Update with the uploaded URL
                setUploadedURL(url);
                setUploadStatus('Upload successful');
            })
            .catch((error: unknown) => {
                console.error('Error uploading file:', error);
                setUploadStatus('Upload failed');
            });
    } else {
        console.log('File undefined');
    }
};

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) {
            setUploadStatus('No file selected');
            return;
        }

        setUploadStatus('Reading file...');
        const reader = new FileReader();

        reader.onload = () => {
            const fileDataURI = reader.result as string;
            const fileName = file.name;
             // Dynamic localStorage key
            // Save file data URI to localStorage
            localStorage.setItem(LocalURLName, fileDataURI);

            localStorage.setItem(LocalFileName, fileName);


            // Upload to Cloudinary
            getUploadURL(LocalURLName, LocalFileName, FinalCloudinaryURL);
        };

        reader.onerror = () => {
            setUploadStatus('Failed to read file');
        };

        reader.readAsDataURL(file);
    };

    return (
        <div style={{padding: '20px', maxWidth: '400px', margin: '0 auto'}}>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>File Upload to Cloudinary</h1>
            <input type="file" onChange={handleFileChange}/>
            {uploadStatus && <p>{uploadStatus}</p>}
            {uploadedURL && (
                <div>
                    <p>Uploaded File URL:</p>
                    <a href={uploadedURL} target="_blank" rel="noopener noreferrer">
                        {uploadedURL}
                    </a>
                </div>
            )}
        </div>
    );
};

export default CloudinaryDemo;
