import React, { useContext } from 'react'
import { AngleLeft } from '../../../../shared/imgs/assets'
import {
    StorageContext,
    StorageDispatchContext,
} from '../../../../widgets/FileManager/model/StorageProvider.jsx'
import FileExecutor from '../../../../entities/FileExecutor/FileExecutor'

export default function BackBtn() {
    const storage = useContext(StorageContext)
    const setStorage = useContext(StorageDispatchContext)
    const FileExec = new FileExecutor()
    return (
        <div
            data-testid="backBtn"
            className={`btnWrapper ${storage.isShow ? 'show' : ''}`}
            onClick={() => {
                setStorage({
                    storage: FileExec.readDir(),
                    folderIndex: -1,
                    isShow: false,
                    currentIndex: -2,
                })
            }}
        >
            <img src={AngleLeft} alt="Back button" />
        </div>
    )
}
