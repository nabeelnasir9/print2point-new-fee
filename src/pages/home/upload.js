// FileUpload.js
import React from "react";
import { useDropzone } from "react-dropzone";
import "./FileUpload.css"; // Import custom styles
import { Upload } from "./../../svg";
const FileUpload = ({ files, setfiles }) => {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      accept: {
        "image/*": [".jpeg", ".jpg", ".png"], // Accept image files
        "application/pdf": [".pdf"], // Accept PDF files
      },
      multiple: false,
      onDrop: (acceptedFiles) => {
        setfiles(acceptedFiles);
      },
    });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className="file-drag-main">
          <p>Drop the files here ...</p>
          {isDragReject && (
            <p className="text-base mt-1">This file type is not supported 😕</p>
          )}
        </div>
      ) : (
        <div className="file-drag-main">
          <img src={Upload} alt="" />
          <p className="upload-button-title">
            Drag and drop or <span>choose file</span> to upload
          </p>
          <p className="upload-button-format">
            Format Supports: Jpeg, PNG, and PDF
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
