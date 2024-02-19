import React, { useContext, useEffect, useState } from 'react'
import './styles/FileView.scss'
import FileButton from './ui/FileButton/FileButton.jsx'
import BackBtn from './ui/BackButton/BackBtn.jsx'
import StorageSize from '../../widgets/StorageSize/StorageSize.jsx'
import FileExecutor from '../../entities/FileExecutor/FileExecutor.js'
import { StorageContext } from '../../widgets/FileManager/model/StorageProvider.jsx'

export default function FileView() {
    const [size, setSize] = useState(0)
    const [maxSize, setMaxSize] = useState(3.75)
    const storage = useContext(StorageContext)
    const FileExec = new FileExecutor()
    const filesTree = storage.storage.map((file, index) => {
        return (
            <FileButton
                type={file.type}
                name={file.name}
                size={file.size}
                url={file.url}
                dataIndex={index}
                key={index}
            />
        )
    })

    useEffect(() => {
        const storageSize = storage.storage.reduce(function (acc, file) {
            return acc + file.size
        }, 0)
        const occupySize = (FileExec.getRootSize() - storageSize) / 1024 / 1024
        storage.folderIndex === -1
            ? setMaxSize(3.75)
            : setMaxSize(3.75 - occupySize.toFixed(3))
        setSize(storageSize)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filesTree])

    return (
        <div className="fileViewWrapper">
            <div data-testid="files" className="filesBlock">
                {filesTree}
            </div>
            <BackBtn />
            <StorageSize size={size / 1024} maxSize={maxSize} />
        </div>
    )
}
