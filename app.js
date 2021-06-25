const rp = require('request-promise');
const cheerio = require('cheerio')
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';


rp(url)
  .then(function(html){
    let presidentsQuantity = []
    const $ = cheerio.load(html)    
    let tabRow = $('tbody > tr > th', html).text().split(' ')  
    tabRow = tabRow[4].split('\n')
    console.log(tabRow)      
    
  })
  .catch(function(err){
    console.log(err)
  });