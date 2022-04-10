const cheerio=require("cheerio")
let html = `<ul id="fruits">
<li class="apple">Apple</li>
<li class="orange">Orange</li>
<li class="pear">Pear</li>
</ul>`
//  Cherio
// Cherio parese HTML and is traverse the html so that data can be manipulted according to user's needs


// cheerio stores data in form of object
let selecTool=cheerio.load(html);

let fruitname=selecTool('.pear')
let fruitnamearr=selecTool('#fruits')
// console.log(fruitnamearr);
console.log(fruitnamearr.length);
console.log(fruitnamearr.text());
// console.log(fruitname);
console.log(typeof fruitname);
console.log(fruitname.text());