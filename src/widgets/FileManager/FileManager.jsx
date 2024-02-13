import React, {useState } from 'react'
import FileView from '../../features/FileView/FileView'
import './style/FileManager.scss'
import FileAction from '../../features/FileAction/FileAction'
import FileExecutor from '../../processes/FileExecutor/FileExecutor';
import ToastWrapper from '../ToastWrapper/ToastWrapper';

export default function FileManager() {
  const [folderIndex, setFolderIndex] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(-2);
  const [toast, setToast] = useState();
  const [isFolder, setIsFolder] = useState(false);
  const FileExec = new FileExecutor();
  FileExec.init();
  const [storage, setStorage] = useState(FileExec.readDir());

  function openFolder(){
    setFolderIndex(currentIndex);
    setCurrentIndex(-1);
    setStorage(FileExec.readDir(currentIndex));
  }
  function returnToRoot(){
    setFolderIndex(-1);
    setStorage(FileExec.readDir());
  }
  return (
    <section className="fileManagerWrapper">
        <FileAction index={currentIndex} setStorage={setStorage} folder={folderIndex} isFolder={isFolder} setToast={setToast} />
        <FileView storage={storage} setIndex={setCurrentIndex} openFolder={openFolder} returnToRoot={returnToRoot} currentIndex={currentIndex} setIsFolder={setIsFolder} folder={folderIndex} />
        <ToastWrapper toast={toast} setToast={setToast} />
    </section>
  )
}
