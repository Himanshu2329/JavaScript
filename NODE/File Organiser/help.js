help=()=>{
    console.log(`
    list of all the commands of help:
    1. node main.js tree <path>
    2. node main.js organize <path>
    3. mode main.js help
    `);
}

abc=()=>{
    console.log("is help.js");
}

module.exports={
    // key value pair 
    hathi:help,
    ghoda:abc
}