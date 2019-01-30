(function() {
	var p = document.getElementsByTagName('p');
	for (var i = 0; i < p.length; i++) {
		if (p[i].innerHTML.search("<strong>Object Class:</strong>") == 0){
 			p[i].innerHTML += '<br><strong>Novi Class:</strong> Definitely not "'+p[i].innerHTML.replace("<strong>Object Class:</strong>", "").trim()+'"'
		}
	}
})();
