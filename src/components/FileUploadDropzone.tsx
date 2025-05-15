// components/FileUploadDropzone.tsx
"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";

export function FileUploadDropzone({
  onFilesSelected,
}: {
  onFilesSelected: (files: File[]) => void;
}) {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    onFilesSelected(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "application/pdf": [], "application/msword": [], "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [] },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className="border border-dashed border-gray-400 p-6 text-center rounded-md cursor-pointer"
    >
      <input {...getInputProps()} />
      <p>Drag & drop CV files here, or click to select</p>
      {files.length > 0 && (
        <ul className="mt-4 text-left text-sm">
          {files.map((file) => (
            <li key={file.name}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
