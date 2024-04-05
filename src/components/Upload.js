import React, { useState } from 'react';

function Upload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Validate file type here if needed
    setSelectedFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setErrorMessage('Please select a file.');
      return;
    }
    // You can handle the file upload logic here
    console.log('File uploaded:', selectedFile);
    // Reset selected file after upload
    setSelectedFile(null);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Document Upload Page</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="file"
          onChange={handleFileChange}
          className="py-2 px-4 rounded-lg border border-gray-300"
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      {selectedFile && (
        <div className="text-left">
          <h2 className="text-xl font-semibold">Selected File:</h2>
          <p><strong>Name:</strong> {selectedFile.name}</p>
          <p><strong>Type:</strong> {selectedFile.type}</p>
          <p><strong>Size:</strong> {selectedFile.size} bytes</p>
        </div>
      )}
    </div>
  );
}

export default Upload;
