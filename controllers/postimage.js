var request = require('request');
var fs = require('fs');
var cloudinary = require('cloudinary');
var cloudinaryconfig = require('../utils/imgconfig')
var tumblrconfig = require('../utils/tumblrconfig')
var Tumblr = require('tumblrwks');
var FB = require('fb');
var fbconfig= require('../utils/fbconfig');

FB.setAccessToken(

);

var tumblr = new Tumblr(tumblrconfig,'everydayquoteseverydaylies.tumblr.com');

cloudinary.config(cloudinaryconfig);

module.exports= function (req,res,next){
	var filename=Math.floor(Date.now() / 1000);
	request('http://localhost:8891/?url=localhost%3A3000&delay=1000&clipRect=0%2C0%2C800%2C400&force=true').pipe(fs.createWriteStream('quotes/quote'+filename+'.png')).on('close',function(){
		cloudinary.uploader.upload('quotes/quote'+filename+'.png', function(result) { 
		  	//console.log(result.url) 
		  	tumblr.post('/post', {caption:"Everyday Quotes", type: 'photo',source:result.url, tags:"quote, inspiration, meaning, life, lies"}, function(err,json){
			  if(!err){
				  //console.log(json);
				  res.render('result',{imageurl:result.url})
			  }
			  else{
			  	console.log(err);
			  }
			});
		});
		
	})
}





// post photo to facebook 
// =============================================
//   FB.api(
//     "/me/photos",
//     "post",
//     {
//         "url": result.url
//     },
//     function (response) {
//       if (response && !response.error) {
//         /* handle the result */
//         res.send(result)
//       }
//       else{
//       	console.log("error "+response);
//       }
//     }
// );