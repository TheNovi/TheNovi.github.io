function footer(){
	y = new Date().getFullYear()
	a = [ y, y-1, y + ' - since your dead', '1997', 'NaN', 'Null', true, false]
	//console.log(a)
	document.getElementById("footer").innerHTML = document.getElementById("footer").innerHTML.replace('{}', a[Math.floor(Math.random()*a.length)]);
}

(function() {
	footer();
})();