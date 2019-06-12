function footer(){
	y = new Date().getFullYear();
	a = [ y, y-1, y + ' - until your death', '1997', 'NaN', 'Null', true, false, '42', '1337', '0x1a4'];
	d = document.getElementById("footer");
	d.innerHTML = d.innerHTML.replace('{}', a[Math.floor(Math.random()*a.length)]);
}

function age() {
	y = new Date().getFullYear() - 1997;
	if ((new Date().getMonth() - 5) < 0) y--;
	d = document.getElementById("age");
	d.innerHTML = d.innerHTML.replace('{}', "I am just an " + y + " years old programmer, gamer, geek and otaku from Czech Republic.");
}

(function() {
	footer();
	age();
})();