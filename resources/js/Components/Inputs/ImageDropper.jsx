import { useDropzone } from "react-dropzone";
import { useState } from "react";

export default function ImageDropper({ caption, subtitle, ...params }) {

    const defaultCaption = "Arrastra tus imágenes aqui o haz clic para subirlas";

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        rootRef,
        inputRef,
        acceptedFiles,
        isDragAccept,
        isDragReject
    } = useDropzone(
        {
            accept: {
                'image/jpeg': ['.jpeg'],
                'image/png': ['.png'],
                'image/jpg': ['.jpg']
            },
            onDrop: (acceptedFiles) => {
                updateDropper(acceptedFiles);
            },
            maxFiles: 5,



        }
    );

    const [files, setFiles] = useState(acceptedFiles);
    const [dropperCaption, setDropperCaption] = useState(defaultCaption)


    const updateDropper = (files) => {

        if (files.length === 0 || !files) {
            setDropperCaption(defaultCaption);
            return;
        }
        setFiles(Array.from(files, acceptedFiles));

        setDropperCaption(`Subiendo ${files.length} archivos (puedes subir ${5 - files.length} fotos más)`);
    }

    const removeFile = (fileName) => {
        const newFiles = acceptedFiles.filter((file) => file.name !== fileName);
        setFiles(newFiles);
        updateDropper(newFiles);
    }

    return (
        <div ref={rootRef} {...getRootProps({ refKey: 'imageDrop' })} {...params} className="my-3">
            <p className="text-sm my-2 text-classydog-text font-medium">{caption}</p>


            <div
                className={`rounded-md ${isDragActive ? 'border-2 border-classydog-main bg:gray-200' : 'border border-gray-300'} border-dashed
                            p-12 hover:bg-gray-100 cursor-pointer transition-all ease-linear`}>

                <div className="text-center text-gray-400 m-auto w-full">
                    <i className="las la-cloud-upload-alt text-4xl"></i>
                    <p className="text-sm">{dropperCaption}</p>
                </div>
                <input ref={inputRef} {...getInputProps()} required />

            </div>

            {
                isDragReject &&
                <p className="text-xs text-red-500 my-2">Archivo no permitido</p>
            }


            <div className="flex items-center gap-3 py-3">
                {
                    acceptedFiles.length > 0 &&

                    acceptedFiles.map((file, index) => {
                        return (
                            <div key={index} className="flex-col">

                                <span onClick={() => { removeFile(file.name) }} className="text-xs px-2 py-1 rounded-md bg-red-500 text-white block w-fit hover:bg-red-600 cursor-pointer transition-colors translate-y-5 translate-x-10">
                                    <i className="las la-times"></i>
                                </span>

                                <img src={URL.createObjectURL(file)} alt={file.name} className="w-16 h-16 rounded-md object-cover" />

                            </div>
                        )
                    })
                }
            </div>

            <p className="text-xs text-gray-500 my-2">{subtitle}</p>
        </div>)
};
