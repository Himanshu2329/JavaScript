const fs=require("fs"); //fs module

const path=require("path"); //path module


let types={
    media:["mp4","mkv","mp3"],
    archives:['zip','7z','rar','tar','gz','iso','xz','ar'],
    document:['docx','doc','pdf','xlsx','xls','odt','ods','odp','odg','odf','txt','ps','tex'],
    app:['exe','bat','dmg','pkg','deb','dll'],
    images:['jpeg','gif','jpg','png']
}

organize=(srcPath)=>{
    if (srcPath==undefined) {
        console.log(srcPath);
        // The process.cwd() method returns the CWD(current working directory) of the Node.js process.
        srcPath=process.cwd();
        console.log("source path is ",srcPath);
    }

    let organizedPath= path.join(srcPath,"Organized_Files");
    console.log("organized files ke folder ka path",organizedPath);
    if(fs.existsSync(organizedPath)==false){
        // exist nhi krta to folder bna do vrna rehnedo
        fs.mkdirSync(organizedPath)
    }     
    else console.log("already exist");
}
// organize("./wcat/wcat.js");
organize();
