import React, { useContext, useEffect, useState } from 'react'
import {
    FileUnknown,
    FolderEmpty,
    FolderNotEmpty,
    TxtFile,
} from '../../../../shared/imgs/assets'
import './styles/FileButton.scss'
import {
    StorageContext,
    StorageDispatchContext,
} from '../../../../widgets/FileManager/model/StorageProvider.jsx'
import FileExecutor from '../../../../entities/FileExecutor/FileExecutor'

export default function FileButton({ type, name, size, url, dataIndex }) {
    const [clicks, setClicks] = useState(0)
    const FileExec = new FileExecutor()
    const storage = useContext(StorageContext)
    const setStorage = useContext(StorageDispatchContext)
    useEffect(() => {
        if (clicks === 1) {
            setStorage({
                currentIndex: dataIndex,
                isFolder: type === 'folder' ? true : false,
            })
        } else if (clicks > 1 && type === 'folder') {
            setStorage({
                currentIndex: -1,
                folderIndex: storage.currentIndex,
                storage: FileExec.readDir(storage.currentIndex),
                isShow: true,
            })
        }

        setTimeout(() => {
            setClicks(0)
        }, 1000)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [clicks])

    return (
        <div
            data-testid="fileButton"
            className={`fileWrapper ${storage.currentIndex === dataIndex ? 'select' : ''}`}
            onClick={() => {
                setClicks(clicks + 1)
            }}
        >
            <div className="typeIcon">
                <img
                    src={
                        type === 'folder' && size > 0
                            ? FolderNotEmpty
                            : type === 'folder'
                              ? FolderEmpty
                              : type.indexOf('text') >= 0
                                ? TxtFile
                                : type.indexOf('image') >= 0
                                  ? url
                                  : FileUnknown
                    }
                    alt="File Icon"
                />
            </div>
            <div className="nameBlock">
                <h4 className="title">{name}</h4>
            </div>
        </div>
    )
}
