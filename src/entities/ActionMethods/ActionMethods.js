import Toast from '../../widgets/ToastWrapper/api/Toast/Toast.jsx'
import File from '../File/File'
import FileExecutor from '../FileExecutor/FileExecutor'

export default class ActionMethods {
    constructor(storage, setStorage) {
        this.state = {
            FileExec: new FileExecutor(),
            toast: new Toast(),
            storage: storage,
            setStorage: setStorage,
        }
    }

    create(name, reset) {
        const { FileExec, toast, setStorage } = this.state
        const result = FileExec.createFolder(name)
        if (result) {
            reset()
            setStorage({
                toast: toast.setSuccess('Папка успешно создана'),
                storage: FileExec.readDir(),
            })
        } else {
            setStorage({ toast: toast.setFail('Папка не была создана') })
        }
    }

    generateFile(e, setUploadFile) {
        const fr = new FileReader()
        const fileData = e.target.files[0]
        fr.readAsDataURL(fileData)
        fr.addEventListener('load', () => {
            if (
                fileData.size > 530000 ||
                fileData.type.indexOf('php') > 0 ||
                fileData.type.indexOf('js') > 0 ||
                fileData.type.indexOf('ts') > 0 ||
                fileData.type.indexOf('json') > 0
            ) {
                setUploadFile(null)
            } else {
                setUploadFile(
                    new File(
                        fileData.type,
                        fr.result,
                        fileData.size,
                        fileData.name
                    )
                )
            }
        })
    }

    upload(file, reset) {
        const { FileExec, toast, storage, setStorage } = this.state
        let result =
            storage.folderIndex === -1
                ? FileExec.uploadFile(file)
                : FileExec.uploadFile(file, storage.folderIndex)
        if (result) {
            setStorage({
                storage:
                    storage.folderIndex === -1
                        ? FileExec.readDir()
                        : FileExec.readDir(storage.folderIndex),
                toast: toast.setSuccess('Файл успешно загружен'),
            })
        } else {
            setStorage({ toast: toast.setFail('Файл не был загружен') })
        }
        reset()
    }

    rename(name, reset) {
        const { FileExec, toast, storage, setStorage } = this.state
        let result =
            storage.folderIndex === -1
                ? FileExec.renameFile(storage.currentIndex, name)
                : FileExec.renameFile(
                      storage.currentIndex,
                      name,
                      storage.folderIndex
                  )
        if (result) {
            setStorage({
                storage:
                    storage.folderIndex === -1
                        ? FileExec.readDir()
                        : FileExec.readDir(storage.folderIndex),
                toast: toast.setSuccess('Файл успешно переименован'),
            })
        } else {
            setStorage({ toast: toast.setFail('Файл не был переименован') })
        }
        reset()
    }

    download() {
        const { FileExec, toast, storage, setStorage } = this.state
        const elem = document.querySelector('#download')
        const fileData =
            storage.folderIndex === -1
                ? FileExec.getFileData(storage.currentIndex)
                : FileExec.getFileData(
                      storage.currentIndex,
                      storage.folderIndex
                  )
        if (fileData) {
            elem.setAttribute('download', fileData.name)
            elem.setAttribute('href', fileData.url)
            setStorage({ toast: toast.setSuccess('Файл успешно скачан') })
        } else {
            setStorage({ toast: toast.setFail('Файл не был скачан') })
        }
    }

    remove() {
        const { FileExec, toast, storage, setStorage } = this.state
        let result =
            storage.folderIndex === -1
                ? FileExec.removeFile(storage.currentIndex)
                : FileExec.removeFile(storage.currentIndex, storage.folderIndex)
        if (result) {
            setStorage({
                storage:
                    storage.folderIndex === -1
                        ? FileExec.readDir()
                        : FileExec.readDir(storage.folderIndex),
                toast: toast.setSuccess('Файл успешно удалён'),
            })
        } else {
            setStorage({ toast: toast.setFail('Файл не был удалён') })
        }
    }
}
