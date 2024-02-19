import { useState, useContext } from 'react'
import './styles/ActionModal.scss'
import { Close } from '../../shared/imgs/assets'
import {
    StorageContext,
    StorageDispatchContext,
} from '../../widgets/FileManager/model/StorageProvider.jsx'
import ActionMethods from '../../entities/ActionMethods/ActionMethods'

export default function ActionModal({ type, show, setShow, setType }) {
    const [name, setName] = useState('')
    const [uploadFile, setUploadFile] = useState({})
    const storage = useContext(StorageContext)
    const setStorage = useContext(StorageDispatchContext)
    const am = new ActionMethods(storage, setStorage)

    function reset() {
        setShow(false)
        setType('')
        setName('')
    }

    const inputLabel =
        type === 'folder'
            ? 'Наименование:'
            : type === 'upload'
              ? 'Для загрузки запрещены файлы размером более 500 кб и расширениями: .js, .ts, .php, .json'
              : 'Новое наименование:'
    const inputType =
        type === 'folder' ? (
            <input
                type="text"
                placeholder="Новая папка"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
        ) : type === 'upload' ? (
            <input
                type="file"
                placeholder="Выбрать файл"
                onChange={(e) => {
                    am.generateFile(e, setUploadFile)
                }}
            />
        ) : (
            <input
                type="text"
                placeholder="Новый файл"
                value={name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            />
        )

    return (
        <div
            data-testid="modalAction"
            className={`modalWrapper ${show ? 'show' : ''}`}
        >
            <div className="inputWrapper">
                <div className="inputLabel">{inputLabel}</div>
                {inputType}
            </div>
            <div
                className={`confirmBtn ${uploadFile ? '' : 'disable'}`}
                onClick={
                    type === 'folder'
                        ? () => {
                              am.create(name, reset)
                          }
                        : type === 'upload'
                          ? () => {
                                if (uploadFile) {
                                    am.upload(uploadFile, reset)
                                }
                            }
                          : () => {
                                am.rename(name, reset)
                            }
                }
            >
                <span className="btnText">
                    {type === 'folder'
                        ? 'Создать папку'
                        : type === 'upload'
                          ? 'Загрузить файл'
                          : 'Переименовать файл'}
                </span>
            </div>
            <div
                className="closeBtn"
                onClick={() => {
                    reset()
                }}
            >
                <img src={Close} alt="Close Icon" />
            </div>
        </div>
    )
}
