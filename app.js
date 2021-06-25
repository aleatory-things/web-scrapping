const rp = require('request-promise');
const cheerio = require('cheerio')
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then(function(html){
    const $ = cheerio.load(html)
    
    const tabRow = $('tbody', html).find('tr').find('th').text().split(' ')
    
  })
  .catch(function(err){
    console.log(err)
  });