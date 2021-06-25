const rp = require('request-promise');
const cheerio = require('cheerio')
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';


rp(url)
  .then(function(html){
    let presidentsTotal; 
    let listOfPresidents = []   
    const $ = cheerio.load(html)    
    let tabRow = $('tbody > tr > th').text().split(' ')  
    tabRow = tabRow[4].split('\n')
    let presidents = $('td > b > a')    
    presidentsTotal = presidents.length

    for(let pres of presidents){
      listOfPresidents.push(pres.attribs.title)
    } 
    console.log(listOfPresidents) 
    
  })
  .catch(function(err){
    console.log(err)
  });