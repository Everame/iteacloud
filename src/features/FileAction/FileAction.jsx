import React, {  useMemo, useState } from 'react'
import { Delete, Donwload, FolderAdd, Rename, Upload } from '../../shared/imgs/assets'
import Action from './ui/Action'
import "./styles/FileAction.scss"
import ActionModal from '../ActionModal/ActionModal'
import FileExecutor from './../../processes/FileExecutor/FileExecutor'
import Toast from '../../widgets/ToastWrapper/api/Toast/Toast'

export default function FileAction({index, setStorage, folder, isFolder, setToast}) {
    const [type, setType] = useState("");
    const [isShow, setIsShow] = useState(false);
    const FileExec = new FileExecutor();
    const toast = new Toast(); 

    function download(){
      const elem = document.querySelector('#download');
      const fileData = folder === -1 ? 
      FileExec.getFileData(index) : 
      FileExec.getFileData(index, folder);
      if(fileData){
        elem.setAttribute('download', fileData.name); 
        elem.setAttribute('href', fileData.url);
        setToast(toast.setSuccess("Файл успешно скачан"));
      }else{
        setToast(toast.setFail("Файл не был скачан"));
      }
    }

    function remove(){
      let result;
      if(folder === -1){
          result = FileExec.removeFile(index);
          setStorage(FileExec.readDir());
      }else{
          result = FileExec.removeFile(index, folder);
          setStorage(FileExec.readDir(folder));
      }
      if(result){
        setToast(toast.setSuccess("Файл успешно удалён"));
      }else{
        setToast(toast.setSuccess("Файл не был удалён"));
      }
    }

    useMemo(() => {
        if(type === 'folder' || type === 'upload' || type === 'rename'){
            setIsShow(true);
        }
    }, [type])
  return (
    <div className="actionWrapper">
        <Action icon={FolderAdd} name="Создать папку" show={folder === -1 ? true : false} download={false} action={() => {setType("folder")}} />
        <Action icon={Upload} name="Загрузить файл" show={true} download={false} action={() => {setType("upload")}} />
        <Action icon={Donwload} name="Скачать файл" show={index >= 0 && !isFolder ? true : false} download={true} action={() => {download()}} />
        <Action icon={Rename} name="Переименовать файл" show={index >= 0 ? true : false} action={() => {setType("rename")}} />
        <Action icon={Delete} name="Удалить файл" show={index >= 0 ? true : false} download={false} action={() => {remove()}} />
        <ActionModal type={type} show={isShow} setShow={setIsShow} setType={setType} setStorage={setStorage} folder={folder} index={index} setToast={setToast} />
        <div className={`darkLayout ${isShow ? "show" : ""}`}></div>
    </div>
  )
}
