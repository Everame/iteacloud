import React, { useEffect, useState } from 'react'
import { FileUnknown, FolderEmpty, FolderNotEmpty, TxtFile } from '../../../../shared/imgs/assets'
import './styles/FileButton.scss'

export default function FileButton({type, name, size, url, dataIndex, setIndex, openFolder, curIndex, setIsShow, setIsFolder}) {
  const [clicks, setClicks] = useState(0);
  useEffect(() => {
    if(clicks === 1){
      setIndex(dataIndex);
      type === "folder" ? setIsFolder(true) : setIsFolder(false);
    }else if(clicks > 1 && type === "folder"){
      setIsShow(true);
      openFolder();
    }

    setTimeout(() => {
      setClicks(0);
    }, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicks])
  return (
    <div data-testid="fileButton" className={`fileWrapper ${curIndex === dataIndex ? "select" : ""}`} key={dataIndex} onClick={() => {setClicks(clicks + 1)}}>
        <div className="typeIcon">
            <img src={type === "folder" && size > 0 ? FolderNotEmpty : type === "folder" ? FolderEmpty : type.indexOf("text") >= 0 ? TxtFile : type.indexOf("image") >= 0 ? url : FileUnknown} alt="File Icon" />
        </div>
        <div className="nameBlock">
            <h4 className="title">{name}</h4>
        </div>
    </div>
  )
}
