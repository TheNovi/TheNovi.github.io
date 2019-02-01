(function() {
var data =  getData();
var p = document.getElementsByTagName('p');
for (var i = 0; i < p.length; i++) {
	if (p[i].innerHTML.search("<strong>Object Class:</strong>") == 0){
		if (p[i].innerText.search(data["name"]) > -1) break; // todo script element self remove
		p[i].innerHTML += "<br><strong>" + data["name"] + "</strong>" + getNC(document.getElementById("page-title").innerText.trim().toLowerCase().replace("scp-", ""));
		break;
	}
}

function getNC(number){
	for (var i = 0; i < data["db"].length; i++) {
		if (data["db"][i]["number"] == number){ 
			var c = data["db"][i]["class"];
			return data["types"][c]?data["types"][c]:c;
		}
	}
	return data["default"];
}

function getData(){
	return {
	"name":"NC: ",
	"default":"yet to be classified",
	"types": {
		"s":"Safe",
		"e":"Euclid",
		"k":"Keter",
		"t":"Thaumiel",
		"n":"Neutralized",
		"x":"Unclear",
		"d":"yet to be classified"
	},
	"db":[
		{
			"number": "002",
			"class": "x",
			"comment":"uwh Safe/Euclid"
		},
		{
			"number": "003",
			"class": "e",
			"comment":""
		},
		{
			"number": "004",
			"class": "d",
			"comment":""
		},
		{
			"number": "005",
			"class": "s",
			"comment":"wnd"
		},
		{
			"number": "006",
			"class": "s",
			"comment":"wnd"
		},
		{
			"number": "007",
			"class": "e",
			"comment":""
		},
		{
			"number": "008",
			"class": "e",
			"comment":""
		},
		{
			"number": "009",
			"class": "e",
			"comment":"Depends on 'contaminate' problem"
		},
		{
			"number": "010",
			"class": "s",
			"comment":"wnd"
		},
		{
			"number": "011",
			"class": "e",
			"comment":"Maybe Sentient. How we can be sure it can't just walk away"
		}
	]};
}
})();
