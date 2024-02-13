import React from 'react'
import "./styles/ToastWrapper.scss"

export default function ToastWrapper({toast, setToast}) {
    setTimeout(() => {
        setToast(null);
    }, 4000)
  return (
    <div className={`toastWrapper ${toast ? "show" : ""}`}>
        {toast}
    </div>
  )
}
