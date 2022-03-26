// 1) node wcat.js filepath => display the content of a file in terminal
const fs=require("fs");

let input=process.argv.slice(2)
// console.log(input);


// let option=[]

let files=[]
for(let i=0;i<input.length;i++){
    files.push(input[i])
}
// console.log("files are "+files);

// check if all the files are present or not
for (let i = 0; i < files.length; i++) {
    let exist = fs.existsSync(files[i]);
    if (!exist) {
        console.log("nikal");
        // return;
    }
}

// content read and append
let content="";
for (let i = 0; i < files.length; i++) {
    let filecontent = fs.readFileSync(files[i])
    content+=filecontent;
}
console.log(content);