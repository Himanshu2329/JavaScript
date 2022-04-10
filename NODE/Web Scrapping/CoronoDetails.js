const cheerio  = require("cheerio");
const request=require("request")

request("https://www.worldometers.info/coronavirus/", cb)



function cb(err,res,body){
    if(err){

        console.log("error",err);
    }
    else{
        handleHtml(body)
    }
    // console.log(res);
    // console.log(body);
    // extract krle data html se
}
function handleHtml(html) {
    let selecTool=cheerio.load(html)
    let coronaStat=selecTool(".maincounter-number")
    // console.log(coronaStat.text());
    let totalCases=selecTool(coronaStat[0]).text()
    console.log("total cases-> "+totalCases);
    let totalDeath=selecTool(coronaStat[1]).text()
    console.log("total Death-> "+totalDeath);
    let totalRec=selecTool(coronaStat[2]).text()
    console.log("total Recoveries-> "+totalRec);
}