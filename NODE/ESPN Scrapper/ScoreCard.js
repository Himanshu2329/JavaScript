const request=require("request")
const cheerio=require("cheerio");
const { get } = require("request");
const { find } = require("cheerio/lib/api/traversing");


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
    // console.log(TeamNames.text()); 
    let team1=selecTool(TeamNames[0]).text()
    let team2=selecTool(TeamNames[1]).text()

    console.log(team1);
    console.log(team2);

    // 5. get innings
    // let BattingRows=selecTool(`.ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table>tbody>tr`)
    let BattingRows=selecTool(`.ds-w-full.ds-table.ds-table-xs.ds-table-fixed.ci-scorecard-table>tbody`)
    console.log(BattingRows.length);
    // console.log(BattingRows.text());
    let bathtml="";
    
    // console.log(BattingRows.html());

    for(let i=0;i<BattingRows.length;i++){
        bathtml+=selecTool(BattingRows[i]).html();

        // {
            
            // find("") ye decsendent lekr aata h  mtlb table ke rows ke niche td hota h to all td will print
            // let AllCol=selecTool(BattingRows[i]).find("td");
            // Shikhar Dhawan  b J Yadav1513-30115.38 (this is the output of the above line)
            // console.log(AllCol.text());
            // break;
            
            // it checks whehter the gives class is present or not
            // let hasdata=selecTool(AllCol[0]).hasClass("")
            
        // }
        // console.log(bathtml);
        let allRows=selecTool(BattingRows[i]).find(".ds-border-b.ds-border-line.ds-text-tight-s");
        let count=0;
        for(let i=0;i<allRows.length;i++){
            let row = selecTool(allRows[i]);
            let firstColmnOfRow = row.find("td")[0];
            if(selecTool(selecTool(firstColmnOfRow)).hasClass(`ds-min-w-max`)){
                count++;
                console.log("inside "+count);
            }
        }
        // for(let allRows=0;allRows<BattingRows[i].length;allRows++){

    }

}
module.exports={
    gifs:getInfoFromScoreCard 
}