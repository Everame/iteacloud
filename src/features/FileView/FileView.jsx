import React from 'react'
import "./styles/FileView.scss"
import FileExecutor from '../../processes/FileExecutor/FileExecutor';
import FileButton from '../../shared/ui/FileButton/FileButton';

export default function FileView() {
    const fileExec = new FileExecutor();
    fileExec.init();
    
    const filesTree = fileExec.readDir().map((file) => (
        <FileButton type={file.type}  name={file.name} size={file.size} url={file.url} />
      ));
  return (
    <div className="fileViewWrapper">
        {filesTree}
    </div>
  )
}
