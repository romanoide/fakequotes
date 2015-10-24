module.exports= function(jsonstring){
	var sanitized = jsonstring.replace("'", "");
	sanitized = sanitized.replace("\\","")
	return sanitized;
} 