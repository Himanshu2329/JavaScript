const request=require("request")
const cheerio=require("cheerio");
const { get } = require("request");


function getInfoFromScoreCard(url) {
    // console.log("from ScoreCard "+url);
    // we have a link of a scorecard, we want to get html of that scorecard
    request(url,cb)
    
}

function cb(err,res,body) {
    if(err){
        console.log("Error",err);
    }
    else{
        getMatchDetail(body)
    }
    
}

function getMatchDetail(html){
    // selecTool contains html of ith scorecard
    let selecTool=cheerio.load(html)
    // 1) get Venue
    let desc=selecTool(`[class="ds-px-4 ds-py-3 ds-border-b ds-border-line"]`)

    // console.log(desc.text());
    let DescArr=desc.text().split(",")
    // console.log(DescArr);
    let DateOfMatch=DescArr[2]
    let VenueOfMatch=DescArr[1]
    console.log(DateOfMatch);
    console.log(VenueOfMatch);
    
    // 2) get date
    // 3) get Team Name
    // 4) get Result
    let ResultOFmatch=selecTool(`[class="ds-text-tight-m ds-font-regular ds-truncate ds-text-typo-title"] span`)
    console.log(ResultOFmatch.text());
}
module.exports={
    gifs:getInfoFromScoreCard 
}