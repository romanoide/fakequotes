var sanitizejson= require("../utils/sanitizejson");
var http= require("http");
var authors = require('../authors');




module.exports= function(req,res,next){
	var number=Math.floor(Math.random() * (authors.length - 0)) + 0;
	var search = encodeURIComponent(authors[number]);
	// The google image get
	// ============================================================
	http.get("http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q="+search, function(response) {
		var urlstr = ''
		response.on('data', function (chunk) {
			urlstr += chunk;
		});

		response.on('end', function () {
			var urljson = JSON.parse(urlstr);

			// The forismatic get
			// ============================================================
			var quostr ='';
			http.get("http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json", function(response) {
				response.on('data', function (chunk) {
					quostr += chunk;
				});
				response.on('end', function () {	
					var quojson = JSON.parse(sanitizejson(quostr));	
					var url = urljson.responseData.results[0].url;
					var author = authors[number];
					var quote = quojson.quoteText;
					//console.log(quojson);
					res.render('home',{imgurl:url,author:author,quote:quote});
				});

			});			
		});
	}).on('error', function(e) {
	  console.log("Got error: " + e.message);
	});
}