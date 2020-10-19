;
var container = document.getElementById("container");

if (container.childElementCount == 0) {
	void (function (data) {
		let folder = document.getElementById('folder').innerHTML,
			file = document.getElementById('file').innerHTML;
		
		function tree(node) {
			let html = [];
			
			for (key in node) {
				if (typeof node[key] === 'number') {
					html.push(file.replace('${name}', key).replace('${path}', node[key]));
				} else {
					html.push(folder.replace('${name}', key).replace('${children}', tree(node[key])));
				}
			}
			return html.join('');
		}
		container.innerHTML = tree(data);
	} (JSON.parse(wdp.getFiles())));

	container.addEventListener('click', event => {
		if (event.target.tagName == "BUTTON") {
			let val = event.target.value;
			location.href=`edit.html?file=${val}`;
		}
	});
}
