import React, { useContext, useEffect, useState } from 'react'
import './styles/ToastWrapper.scss'
import { StorageContext } from '../FileManager/model/StorageProvider.jsx'

export default function ToastWrapper() {
    const [isShow, setIsShow] = useState(false)
    const storage = useContext(StorageContext)
    useEffect(() => {
        setIsShow(true)
        setTimeout(() => {
            setIsShow(false)
        }, 4000)
    }, [storage.toast])
    return (
        <div
            className={`toastWrapper ${storage.toast && isShow ? 'show' : ''}`}
        >
            {storage.toast}
        </div>
    )
}
