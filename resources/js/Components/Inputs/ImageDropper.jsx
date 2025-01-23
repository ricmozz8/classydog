import { useDropzone } from "react-dropzone";
import { useState } from "react";

export default function ImageDropper({ centerText, caption, subtitle, ...params }) {

    const [files, setFiles] = useState([]); // State to manage accepted files

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject
    } = useDropzone({
        accept: {
            'image/jpeg': ['.jpeg'],
            'image/png': ['.png'],
            'image/jpg': ['.jpg']
        },
        onDrop: (acceptedFiles) => {
            updateDropper(acceptedFiles);
        },
        maxFiles: 5,
        multiple: true,
        maxSize: 8 * 1024 * 1024 // this is 8MB
    });

    const updateDropper = (newFiles) => {

        if (newFiles === files)
            return;

        // filter out duplicate files
        const uniqueFiles = newFiles.filter(newFile =>
            !files.some(existingFile => existingFile.name === newFile.name)
        );


        setFiles(Array.prototype.concat(files, uniqueFiles));
    };


    const removeFile = (file) => {
        let currentFiles = files;
        currentFiles = currentFiles.filter(f => f.name !== file.name);
        setFiles(currentFiles);
    };

    return (
        <div {...params} className="my-3">
            <p className="text-sm my-2 text-classydog-text font-medium">{caption}</p>

            <div
                {...getRootProps()}
                className={`rounded-md ${isDragActive ? ' border-classydog-main bg:gray-200' : ' border-gray-300'} border-dashed
                            p-12 bg-gray-100 border-2 hover:bg-gray-200 cursor-pointer transition-all ease-linear`}>

                <div className="text-center text-gray-400 m-auto w-full">
                    <i className="las la-cloud-upload-alt text-4xl"></i>
                    <p className="text-sm">{centerText}</p>
                </div>
                <input {...getInputProps()} required />

            </div>

            {isDragReject && (
                <p className="text-xs text-red-500 my-2">No se pueden subir archivos con ese formato</p>
            )}

            {files.length > 0 && (
                <div className="flex items-center gap-3 my-1 max-w-full overflow-x-scroll">
                    {files.map(file => (
                        <div key={file.name} className="flex-col">

                            <span
                                onClick={() => removeFile(file)}
                                className={`
                                    text-xs px-2 py-1 rounded-md bg-red-500
                                    text-white block w-fit hover:bg-red-600 cursor-pointer
                                    transition-colors translate-y-5 translate-x-10`}>
                                <i className="las la-times"></i>
                            </span>
                            <img src={URL.createObjectURL(file)} alt={file.name} className="w-16 h-16 rounded-md object-cover border border-gray-200" />
                        </div>
                    ))}
                </div>
            )}

            <p className="text-xs text-gray-500 my-3">{subtitle}</p>
        </div>
    );
}
