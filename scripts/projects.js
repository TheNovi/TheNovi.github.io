function getAll() {
	function parseAPI(html) {
		s = html.search("github.com/") + 11;
		return 'https://api.github.com/repos/{}/releases/latest'.replace('{}', html.substring(s, html.indexOf('"', s)));
	}
	
	o = []
	a = document.getElementById('content').children;
	for(i = 0; i < a.length; i++)
		if (a[i].innerHTML.match(/release/i))
			o.push({html: a[i], url: parseAPI(a[i].innerHTML)});
	return o
}

function getLatestVer(el) {
	var request = new XMLHttpRequest()
	request.open('GET', el.url, true)

	request.onload = function() {
		var data = JSON.parse(this.response);
		if (request.status >= 200 && request.status < 400)
			addRelease(el.html, data);
		else 
			console.log('error: ' + request.status);
	}

	request.send()
}

function addRelease(html, data){
	function parseDate(date) {
		date = new Date(date)
		ma = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		d = date.getDate();
		m = ma[date.getMonth()];
		y = date.getFullYear();
		return m + ' ' + d + ' ' + y
	}
	//console.log(data);
	h = "Latest ver: <a target='_blank' href='" + data.html_url + "'>" + data.tag_name + '</a> (' + parseDate(data.published_at) + ')'
	html.children[html.children.length-1].innerHTML += '\n<br>' + h
}

(function() {
	l = getAll()
	l.forEach(e => {
		getLatestVer(e)
	});
})();