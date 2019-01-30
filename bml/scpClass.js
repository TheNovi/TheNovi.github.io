(function() {
	var data = {
	"name":"NC",
	"default":"undefined",
	"class": {
		"s":"Safe",
		"e":"Euclid",
		"k":"Keter",
		"t":"Thaumiel",
		"n":"Neutralized"
	},
	"db":[{
		"n": "002",
		"c": "s"
	},
	{
		"n": "503",
		"c": "k"
	},
	{
		"n": "650",
		"c": "k"
	},
	{
		"n": "999",
		"c": "e"
	}
]}; // JSON data

/*
,
	{
		"n": "",
		"c": ""
	}
*/

var p = document.getElementsByTagName('p');
for (var i = 0; i < p.length; i++) {
	if (p[i].innerHTML.search("<strong>Object Class:</strong>") == 0){
		if (p[i].innerText.search(data["name"] + ":") > -1) break;
		p[i].innerHTML += "<br><strong>" + data["name"] + ":</strong> " + getNC(document.getElementById("page-title").innerText.trim().toLowerCase().replace("scp-", ""));
		break;
	}
}

function getNC(number){
	for (var i = 0; i < data["db"].length; i++) {
		if (data["db"][i]["n"] == number){
			return data["class"][data["db"][i]["c"]];
		}
	}
	return data["default"];
}
})();
