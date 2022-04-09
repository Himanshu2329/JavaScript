//  entry point of my command line
let helpfuntion=require("./help");
// const organize = require("./organize");
let organ =require("./organize");
let trs=require("./Tree")
// console.log(helpfuntion.hathi());
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
switch (command) {
    case "tree":
        trs.tree(path)
        // call tree function
        // console.log("Tree Function Called and Executed Successfully on  path "+path);

        
        break;
    case "organize":
        // call organize function
        organ.organize(path)
        // console.log("Organized Function Called and Executed Successfully"+path);

        break;
    case "help":
        // call help function
        helpfuntion.hathi();
        // console.log("Help Function Called and Executed Successfully"+path);

        break;

    default:
        console.log("command not recognized ");
        break;
}