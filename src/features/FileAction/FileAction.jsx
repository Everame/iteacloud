import React, { useContext, useMemo, useState } from 'react'
import {
    Delete,
    Donwload,
    FolderAdd,
    Rename,
    Upload,
} from '../../shared/imgs/assets'
import Action from './ui/Action.jsx'
import './styles/FileAction.scss'
import ActionModal from '../ActionModal/ActionModal.jsx'
import {
    StorageContext,
    StorageDispatchContext,
} from '../../widgets/FileManager/model/StorageProvider.jsx'
import ActionMethods from '../../entities/ActionMethods/ActionMethods'

export default function FileAction() {
    const [type, setType] = useState('')
    const [isShow, setIsShow] = useState(false)
    const storage = useContext(StorageContext)
    const setStorage = useContext(StorageDispatchContext)
    const am = new ActionMethods(storage, setStorage)

    useMemo(() => {
        if (type === 'folder' || type === 'upload' || type === 'rename') {
            setIsShow(true)
        }
    }, [type])
    return (
        <div className="actionWrapper">
            <Action
                icon={FolderAdd}
                name="Создать папку"
                show={storage.folderIndex === -1 ? true : false}
                download={false}
                action={() => {
                    setType('folder')
                }}
            />
            <Action
                icon={Upload}
                name="Загрузить файл"
                show={true}
                download={false}
                action={() => {
                    setType('upload')
                }}
            />
            <Action
                icon={Donwload}
                name="Скачать файл"
                show={
                    storage.currentIndex >= 0 && !storage.isFolder
                        ? true
                        : false
                }
                download={true}
                action={() => {
                    am.download()
                }}
            />
            <Action
                icon={Rename}
                name="Переименовать файл"
                show={storage.currentIndex >= 0 ? true : false}
                action={() => {
                    setType('rename')
                }}
            />
            <Action
                icon={Delete}
                name="Удалить файл"
                show={storage.currentIndex >= 0 ? true : false}
                download={false}
                action={() => {
                    am.remove()
                }}
            />
            <ActionModal
                type={type}
                show={isShow}
                setShow={setIsShow}
                setType={setType}
            />
            <div className={`darkLayout ${isShow ? 'show' : ''}`}></div>
        </div>
    )
}
