import React, { useState } from 'react'
import './styles/ActionModal.scss'
import { Close } from '../../shared/imgs/assets';
import FileExecutor from '../../processes/FileExecutor/FileExecutor';
import File from '../../processes/File/File';
import Toast from '../../widgets/ToastWrapper/api/Toast/Toast';

export default function ActionModal({type, show, setShow, setType, setStorage, folder, index, setToast }) {
    const [name, setName] = useState("");
    const [uploadFile, setUploadFile] = useState({});
    const fe = new FileExecutor();
    const toast = new Toast();
    function reset(){
        setShow(false); 
        setType("");
    }
    function create(){
        const result = fe.createFolder(name); 
        if(result){
            setToast(toast.setSuccess("Папка успешно создана"));
            reset(); 
            setStorage(fe.readDir());
        }else{
            setToast(toast.setFail("Папка не была создана"));
        }
    }
    function generateFile(e){
        const fr = new FileReader();
        const fileData=e.target.files[0];
        fr.readAsDataURL(fileData)
        fr.addEventListener('load', () => {
            console.log(fileData.type.indexOf("php") < 0)
            if(fileData.size > 530000 || fileData.type.indexOf("php") > 0 || fileData.type.indexOf("js") > 0 || fileData.type.indexOf("ts") > 0 || fileData.type.indexOf("json") > 0){
                setUploadFile(null);
            }else{
                setUploadFile(new File(fileData.type, fr.result, fileData.size, fileData.name))
            }
        })
    
    }
    function upload(file){
        let result;
        if(index === -2){
            result = fe.uploadFile(file);
            reset();
            setStorage(fe.readDir());
        }else{
            result = fe.uploadFile(file, folder);
            reset();
            setStorage(fe.readDir(folder));
        }
        if(result){
            setToast(toast.setSuccess("Файл успешно загружен"));
        }else{
            setToast(toast.setFail("Файл не был загружен"));
        }
    }
    function rename(){
        let result;
        if(folder === -1){
            result = fe.renameFile(index, name);
            reset();
            setStorage(fe.readDir());
        }else{
            result = fe.renameFile(index, name, folder);
            reset();
            setStorage(fe.readDir(folder));
        }
        if(result){
            setToast(toast.setSuccess("Файл успешно переименован"));
        }else{
            setToast(toast.setFail("Файл не был переименован"));
        }
    }
    const inputLabel = 
        type === "folder" ? "Наименование:" : 
        type === "upload" ? "Для загрузки запрещены файлы размером более 500 кб и расширениями: .js, .ts, .php, .json" :
        "Новое наименование:";
    const inputType = 
        type === "folder" ? <input type="text" placeholder='Новая папка' value={name} onChange={(e) => {setName(e.target.value)}} /> : 
        type === "upload" ? <input type="file" placeholder='Выбрать файл' onChange={(e) => {generateFile(e)}} /> :
        <input type="text" placeholder='Новый файл' value={name} onChange={(e) => {setName(e.target.value)}} />;
        
  return (
    <div data-testid="modalAction" className={`modalWrapper ${show ? "show" : ""}`}>
        <div className="inputWrapper">
            <div className="inputLabel">{inputLabel}</div>
            {inputType}
        </div>
        <div className={`confirmBtn ${uploadFile ? "" : "disable"}`} onClick={type === "folder" ? () => {create()} : type === "upload" ? () => {if(uploadFile){upload(uploadFile)}} : () => {rename()}}>
            <span className="btnText">{type === "folder" ? "Создать папку" : type === "upload" ? "Загрузить файл" : "Переименовать файл"}</span>
        </div>
        <div className="closeBtn" onClick={() => {reset()}}>
            <img src={Close} alt="Close Icon" />
        </div>
    </div>
  )
}
