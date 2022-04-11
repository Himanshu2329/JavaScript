const request=require("request")
const cheerio=require("cheerio");
const {gifs}=require("./ScoreCard")

// const { children } = require("cheerio/lib/api/traversing");

function getMatch(url) {
    console.log("from all match"+url);
    request(url,cb)
    
}
function cb(err,res,body) {
    if(err){
        console.log("Error",err);
    }else{
        extractAllMatchScoreCardLink(body)
    }
}
function extractAllMatchScoreCardLink(html){
    let selecTool=cheerio.load(html)
    let ScoreEle=selecTool(`[class="ds-flex ds-mx-4 ds-pt-2 ds-pb-3 ds-space-x-4 ds-border-t ds-border-line-default-translucent"] span:nth-child(3) a`)
    // console.log(anchorEle);
    console.log(ScoreEle.text());
    console.log(ScoreEle.length);
    for (let i = 0; i < ScoreEle.length; i++) {
        let ScoreEleLink=selecTool(ScoreEle[i]).attr("href")
        // console.log(i+1+")"+ScoreEleLink);
        let fullLink="https://www.espncricinfo.com"+ScoreEleLink;
        gifs(fullLink);
        break;

        
    }

    // let relative=anchorEle.attr("href");
    // console.log(relative);
    // let FullLink="https://www.espncricinfo.com"+relative;
    // console.log(FullLink);


    // let total=selecTool(anchorEle[0]).html();
    // console.log(total);

    // console.log(selecTool);
}

module.exports={
    getMatch:getMatch
}



/* <div class="div d d
d
d
d
 
  d 
  d
  d 
  d 
  ddd 
  
   d
    d 
    
    ">

 <A></A>
 <A></A>
 <A></A>
 <A></A>

</div>

[class="div d d
d
d
d
 
  d 
  d
  d 
  d 
  ddd 
  
   d
    d 
    
    "] a:nth-child(5) */