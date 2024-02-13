import Folder from "../Folder/Folder";

export default class FileExecutor{

    init(){
        if(!localStorage.getItem('storage')){
            localStorage.setItem('storage', JSON.stringify([]));
            return true;
        }
    }

    readDir(index){
        try{
            const storage = JSON.parse(localStorage.getItem('storage'));
            if(index === undefined){
                return storage;
            }else{
                return storage[index].body;
            }
        }catch(err){
            throw err.message;
        }
    }

    uploadFile(file, index){
        try {
            const storage = JSON.parse(localStorage.getItem('storage'));
            if(this.getRootSize() + file.size > 3932160) throw Object.assign(new Error("Maximum limit"), { code: 500 });
            if(index === undefined){
                storage.push(file);
                localStorage.setItem('storage', JSON.stringify(storage));
                return true;
            }else{
                storage[index].body.push(file);
                storage[index].size += file.size;
                localStorage.setItem('storage', JSON.stringify(storage));
                return true;
            }
        } catch (err){
            console.log(err)
            return false;
        }
        
    }

    renameFile(file, name, index){
        try {
            const storage = JSON.parse(localStorage.getItem('storage'));
            if(index === undefined){
                storage[file].name = name;
                localStorage.setItem('storage', JSON.stringify(storage));
                return true;
            }else{
                storage[index].body[file].name = name;
                localStorage.setItem('storage', JSON.stringify(storage));
                return true;
            }
        } catch{
            return false;
        }
    }

    removeFile(file, index){
        try {
            const storage = JSON.parse(localStorage.getItem('storage'));
            if(index === undefined){
                storage.splice(file, 1);
                localStorage.setItem('storage', JSON.stringify(storage));
                return true;
            }else{
                storage[index].size -= storage[index].body[file].size;
                storage[index].body.splice(file, 1);
                localStorage.setItem('storage', JSON.stringify(storage));
                return true;
            }
        } catch (er) {
            return false;
        }
    }

    getFileData(index, folderIndex){
        try {
            const storage = JSON.parse(localStorage.getItem('storage'));
            if(folderIndex === undefined){
                return storage[index];
            }else{
                return storage[folderIndex].body[index];
            }  
        } catch {
            return false;
        }
    }

    createFolder(name){
        try {
            const folder = new Folder(name);
            let storage = JSON.parse(localStorage.getItem('storage'));
            storage.push(folder);
            localStorage.setItem('storage', JSON.stringify(storage));
            return true;
        } catch {
            return false;
        }
        
    }

    getRootSize(){
        let storage = JSON.parse(localStorage.getItem('storage'));
        return storage.reduce(function (acc, file) { return acc + file.size; }, 0);
    }
}