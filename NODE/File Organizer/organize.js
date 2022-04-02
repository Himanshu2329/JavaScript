const fs = require("fs"); //fs module

const path = require("path"); //path module
let getFold=require("./Function")


let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'iso', 'xz', 'ar'],
    document: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'bat', 'dmg', 'pkg', 'deb', 'dll'],
    images: ['jpeg', 'gif', 'jpg', 'png']
}

organize = (srcPath) => {
    if (srcPath == undefined) {
        console.log(srcPath);
        // The process.cwd() method returns the CWD(current working directory) of the Node.js process.
        srcPath = process.cwd();
        console.log("source path is ", srcPath);
    }

    //  2. create a directory->organized_files
    let organizedPath = path.join(srcPath, "Organized_Files");
    console.log("organized files ke folder ka path", organizedPath);
    if (fs.existsSync(organizedPath) == false) {
        // exist nhi krta to folder bna do vrna rehnedo
        // fs.mkdirSync(organizedPath)
    }
    else console.log("already exist");

    //3. Scan the entire srcPath(Download folder in this case)

    // only reads the content of the file(only names)
    let allFiles = fs.readdirSync(srcPath);
    // console.log(allFiles);


    //4.  traverse over the files and classify them on the basis of their extension
    for (let i = 0; i < allFiles.length; i++) {
        // let extenFile= allFiles[i].split(".")[1]
        // console.log(extenFile);

        let fullPathofFile = path.join(srcPath, allFiles[i]);
        // console.log(fullPathofFile);

        // 1. check if it is a file or a folder
        //  lstatsync gives the information regarding the link provided
        let isFile = fs.lstatSync(fullPathofFile).isFile();
        console.log(allFiles[i]+" is "+isFile);

        if (isFile) {


            // 1.1 get ext name
            let extenFile = path.extname(allFiles[i]).split(".")[1]
            // let extenFile=allFiles[i].split(".")[1];
            console.log(extenFile);


            // 1.2 get folder name from extension
            let folder_name = getFolderName(extenFile); //archive aayega
            
            
            // 1.3 copy from src folder(srcPath) and paste in dest folder(folder_name eg:-document,media etc)

                 
            copyFileToDest(srcPath, fullPathofFile, folder_name);
        }
    }


}
getFolderName=(srcPath)=>{

    return folder_name;
}

copyFileToDest=(srcPath, fullPathofFile, folder_name)=>{
    
    // magic will happen bro
}

let srcPath = "E:/Pepcoding/WebDevelopment/JS/NODE/File Organizer/Downloads"
// organize("./wcat/wcat.js");
organize(srcPath);
