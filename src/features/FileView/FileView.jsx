import React, { useEffect, useState } from 'react'
import "./styles/FileView.scss"
import FileButton from './ui/FileButton/FileButton.jsx';
import BackBtn from './ui/BackButton/BackBtn.jsx';
import StorageSize from '../../widgets/StorageSize/StorageSize.jsx';
import FileExecutor from '../../processes/FileExecutor/FileExecutor.js';

export default function FileView({storage, setIndex, openFolder, returnToRoot, currentIndex, setIsFolder, folder}) {
    const [isShow, setIsShow] = useState(false);
    const [size, setSize] = useState(0);
    const [maxSize, setMaxSize] = useState(3.75);
    const FileExec = new FileExecutor();
    function back(){
      setIsShow(false)
      returnToRoot();
    }
    const filesTree = storage.map((file, index) => {
      return <FileButton type={file.type} name={file.name} size={file.size} url={file.url} dataIndex={index} curIndex={currentIndex} setIndex={setIndex} openFolder={openFolder} setIsShow={setIsShow} setIsFolder={setIsFolder} />
    });
    
    useEffect(() => {
      const storageSize = storage.reduce(function (acc, file) { return acc + file.size; }, 0);
      const occupySize = (FileExec.getRootSize() - storageSize)/1024/1024;
      folder === -1 ? setMaxSize(3.75) : setMaxSize(3.75 - occupySize.toFixed(3));
      setSize(storageSize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filesTree])
    
  return (
    <div className="fileViewWrapper">
        <div data-testid="files" className="filesBlock">
          {filesTree}
        </div>
        <BackBtn isShow={isShow} setIndex={setIndex} back={back} />
        <StorageSize size={size/1024} maxSize={maxSize} />
    </div>
  )
}
