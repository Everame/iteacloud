import React from 'react'
import { FileUnknown, FolderEmpty, FolderNotEmpty, TxtFile } from '../../imgs/assets'
import './styles/FileButton.scss'

export default function FileButton({type, name, size, url}) {
  return (
    <div className="fileWrapper">
        <div className="typeIcon">
            <img src={type == "folder" && size > 0 ? FolderNotEmpty : type == "folder" ? FolderEmpty : type == "txt" ? TxtFile : type == "image" ? url : FileUnknown} alt="File Icon" />
        </div>
        <div className="nameBlock">
            <h4 className="title">{name}</h4>
        </div>
    </div>
  )
}
