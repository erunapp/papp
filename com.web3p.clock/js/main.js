var dialLines = document.getElementsByClassName('diallines');
var rotate = (o,d) => o.style.transform = 'rotate('+ 6*d +'deg)';

for (var i = 1; i < 60; i++) {
    var old = dialLines[i-1], cur = old.cloneNode(true);
    old.parentNode.insertBefore(cur, old.nextSibling);
    rotate(cur, i);
}

function tick() {
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    change('.sec-hand', seconds);
    change('.min-hand', minutes);
    change('.hour-hand', hours * 5 + Math.floor(minutes/12));
}
setInterval(tick, 200);

function change(cls, deg) {
    var node = document.querySelector(cls);
    rotate(node.nextElementSibling, deg);
    rotate(node, deg);
}

function showText(text) {
    var msg = document.getElementsByClassName('msg');
    msg[0].innerHTML = text;
}

function loaded() {
	var msg;
	try {
		msg = wcp.request(1,[]);
	} catch (ex) {
		if (ex instanceof ReferenceError)
			msg = "Reference Error!!!";
		else
			msg = "Failed to Web3p???";
	}
	showText(msg);
}
