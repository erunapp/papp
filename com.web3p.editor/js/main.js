;
var container = document.getElementById("container");

let folder = document.getElementById('folder').innerHTML,
	file = document.getElementById('file').innerHTML;

function tree(node) {
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

let state = wdp.loadState();
container.innerHTML = (state == "") ? tree(JSON.parse(wdp.getFiles())) : state;

container.addEventListener('click', event => {
	if (event.target.tagName == "BUTTON") {
		wdp.saveState(container.innerHTML);
		
		let val = event.target.value;
		location.href=`edit.html?file=${val}`;
	}
});
