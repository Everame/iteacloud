import React, { createContext, useCallback, useState } from 'react'
import FileExecutor from '../../../entities/FileExecutor/FileExecutor'

const StorageContext = createContext(undefined)
const StorageDispatchContext = createContext(undefined)

function StorageProvider({ children }) {
    const FileExec = new FileExecutor()
    const [storage, setStorage] = useState({
        folderIndex: -1,
        currentIndex: -2,
        storage: FileExec.readDir(),
        isFolder: false,
        isShow: false,
        toast: null,
    })

    const updateState = useCallback(
        (data) => {
            setStorage({ ...storage, ...data })
        },
        [storage]
    )

    return (
        <StorageContext.Provider value={storage}>
            <StorageDispatchContext.Provider value={updateState}>
                {children}
            </StorageDispatchContext.Provider>
        </StorageContext.Provider>
    )
}

export { StorageProvider, StorageContext, StorageDispatchContext }
