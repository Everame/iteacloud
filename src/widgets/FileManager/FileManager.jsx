import React from 'react'
import FileView from '../../features/FileView/FileView.jsx'
import './style/FileManager.scss'
import FileAction from '../../features/FileAction/FileAction.jsx'
import FileExecutor from '../../entities/FileExecutor/FileExecutor'
import ToastWrapper from '../ToastWrapper/ToastWrapper.jsx'
import { StorageProvider } from './model/StorageProvider.jsx'

export default function FileManager() {
    const FileExec = new FileExecutor()
    FileExec.init()
    return (
        <section className="fileManagerWrapper">
            <StorageProvider>
                <FileAction />
                <FileView />
                <ToastWrapper />
            </StorageProvider>
        </section>
    )
}
