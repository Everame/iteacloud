import React from 'react'
import FileView from '../../features/FileView/FileView'
import './style/FileManager.scss'
import FileAction from '../../features/FileAction/FileAction'

export default function FileManager() {
  return (
    <section className="fileManagerWrapper">
        <FileAction index={0}/>
        <FileView />
    </section>
  )
}
