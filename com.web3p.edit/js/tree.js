
document.getElementById("head").innerText = location.search.substr(5);
var container = document.getElementById("container");

function tree(node) {
	let folder = document.getElementById('folder').innerHTML,
		file = document.getElementById('file').innerHTML;
	let html = [];

	for (key in node) {
		if (typeof node[key] === 'number') {
			html.push(file.replace('{name}', key).replace('{path}', node[key]));
		} else {
			html.push(folder.replace('{name}', key).replace('{children}', tree(node[key])));
		}
	}
	return html.join('');
}

function download() {
	container.innerHTML = tree(JSON.parse(wdp.down(location.search.substr(5))));
}

container.innerHTML = (history.state == null) ? tree(JSON.parse(wdp.tree(location.search.substr(5)))) : history.state;

container.addEventListener('click', event => {
	if (event.target.tagName == "BUTTON") {
		history.replaceState(container.innerHTML,'');
		
		let val = event.target.value;
		location.href=`edit.html?file=${val}`;
	}
});
