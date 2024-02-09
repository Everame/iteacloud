import React from 'react'
import FileExecutor from '../../processes/FileExecutor/FileExecutor'
import { Delete, Donwload, FolderAdd, Rename, Upload } from '../../shared/imgs/assets'
import Action from './ui/Action'
import "./styles/FileAction.scss"

export default function FileAction({index}) {
    const fe = new FileExecutor();
  return (
    <div className="actionWrapper">
        <Action icon={FolderAdd} name="Создать папку" show={true} action={fe.createFolder()} />
        <Action icon={Upload} name="Загрузить файл" show={true} action={fe.createFolder()} />
        <Action icon={Donwload} name="Скачать файл" show={true} action={fe.createFolder()} />
        <Action icon={Rename} name="Переименовать файл" show={true} action={fe.createFolder()} />
        <Action icon={Delete} name="Удалить файл" show={true} action={fe.createFolder()} />
    </div>
  )
}
