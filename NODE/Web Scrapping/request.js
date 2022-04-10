const request=require("request")
request("https://www.worldometers.info/coronavirus/", cb)
console.log("before");
function cb(err,res,body){
    console.log("error",err);
    // console.log(res);
    // console.log(body);
    console.log(typeof body);
}
console.log("After");
