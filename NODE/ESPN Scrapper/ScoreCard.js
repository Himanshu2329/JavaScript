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
    // 3) get Result
    let ResultOFmatch=selecTool(`[class="ds-text-tight-m ds-font-regular ds-truncate ds-text-typo-title"] span`)
    console.log(ResultOFmatch.text());
    // 4) get Team Name
    let TeamNames=selecTool(".ds-text-ui-typo.ds-block>.ds-text-tight-l.ds-font-bold")
    console.log(TeamNames.text());
    let team1=selecTool(TeamNames[0]).text()
    let team2=selecTool(TeamNames[1]).text()

    console.log(team1);
    console.log(team2);

}
module.exports={
    gifs:getInfoFromScoreCard 
}