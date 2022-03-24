const os=require("os");
const { uptime } = require("process");

//  retrun the underlying architecture
let mySystemArch=os.arch()
console.log(mySystemArch);

//  return info about your cpu info
let mycpu=os.cpus()
// console.log(mycpu);

//  return owner name
let hostname=os.hostname()
console.log(hostname);

// it contain network info
let net=os.networkInterfaces()
// console.log(net);

// return the latest release of the os version
console.log(os.release());

// return the total amount of memory of your system in byte
console.log(os.totalmem())
console.log(os.type())
console.log(os.platform())

// time batayaega in seconds 
console.log(os.uptime()/60);
// console.log(os.uptime()/60 );

// Returns information about the currently effective user.
console.log(os.userInfo());

// temp files ki location in string
console.log(os.tmpdir());