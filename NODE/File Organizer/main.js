//  entry point of my command line
let helpfuntion=require("./help");
// console.log(helpfuntion.hathi());
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
switch (command) {
    case "tree":
        // call tree function
        console.log("Tree Function Called and Executed Successfully on  path "+path);

        
        break;
    case "organize":
        // call organize function
        console.log("Organized Function Called and Executed Successfully"+path);

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