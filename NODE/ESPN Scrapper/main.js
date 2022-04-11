let url="https://www.espncricinfo.com/series/ipl-2020-21-1210595"
const request=require("request")
const cheerio=require("cheerio")

request(url,cb)
function cb(err,res,body) {
    if(err){
        console.log("Error",err);
    }else{
        handelHtml(body)
    }
}

function handelHtml(html){
    let selecTool=cheerio.load(html)
    let anchorEle=selecTool(".ds-block.ds-text-center.ds-uppercase.ds-text-ui-typo-primary.ds-underline-offset-4 ")
    // console.log(anchorEle);
    console.log(anchorEle.text());

    let relative=anchorEle.attr("href");
    console.log(relative);
    let FullLink="https://www.espncricinfo.com"+relative;
    console.log(FullLink);


    // let total=selecTool(anchorEle[0]).html();
    // console.log(total);

    // console.log(selecTool);
}


