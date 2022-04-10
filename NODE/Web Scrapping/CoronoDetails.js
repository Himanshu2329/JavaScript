const request=require("request")
//  Cherio
// Cherio parese HTML and is traverse the html so that data can be manipulted according to user's needs
request("https://www.worldometers.info/coronavirus/", cb)

function cb(err,res,body){
    console.log("error",err);
    // console.log(res);
    console.log(body);
    // extract krle data html se
}