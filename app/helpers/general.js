var Mailgun = require('mailgun-js');
var oembed = require("oembed-auto");
const url = require("url");
var fs = require("fs");

module.exports = {

  getOembed: function(url){
    oembed("http://www.youtube.com/watch?v=9bZkp7q19f0", function (err, data) {
      console.log(data);
    });
    return 'done';
  },
  parseURL: function(url){
    var parsedURL = url.parse("http://www.example.com/profile?name=barry");
    console.log(parsedURL.protocol);  // "http:"
    console.log(parsedURL.host);      // "www.example.com"
    console.log(parsedURL.query);     // "name=barry"
  },
  toTitleCase:  function (str)
  {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  },
  randomString: function (length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHUJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
  },
  randomInteger: function(max){
    //A function that returns a random integer between 0 and 100
    return Math.floor((Math.random() * max));
  },
getFile: function(filePath){
var options = { encoding: "utf-8" }
fs.readFile("myfile.txt", options, function(err, data) {
   if (err) {
console.error("Error reading the file");
return;
}
console.log(data.match(/x/gi).length + " letter X's");
});
},

}
