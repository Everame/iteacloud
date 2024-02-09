import React from "react";
import File from "../File/File";
import Folder from "../Folder/Folder";

export default class FileExecutor{

    init(){
        const file = new File("folder", "c://projects/", '1mb', "Empty Folder");
        const testArr = new Array({"type": file.type, "url": file.url, "size": file.size, "name": file.name}, {"type": file.type, "url": file.url, "size": file.size, "name": file.name});
        localStorage.setItem('storage', JSON.stringify(testArr));
    }

    readDir(){
        return JSON.parse(localStorage.getItem('storage'));
    }

    uploadFile(url){
        const storage = localStorage.getItem('storage');
        storage.push(File());
        return 0;
    }

    createFolder(name){
        const folder = new Folder(name);
        const storage = JSON.parse(localStorage.getItem('storage'));
        storage.push(folder);
        localStorage.setItem('storage', JSON.stringify(storage));
    }
}