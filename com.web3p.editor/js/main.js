;
void (function (data) {
	function tree(node) {
		let files = [], folders = [];
		
		for (key in node) {
			if (typeof node[key] === 'number') {
				files.push(file.replace('${name}', key).replace('${path}', node[key]));
			} else {
				folders.push(folder.replace('${name}', key).replace('${children}', tree(node[key])));
			}
		}
		return folders.join('') + files.join('');
	}

	let folder = document.getElementById('folder').innerHTML,
		file = document.getElementById('file').innerHTML;
	
	document.getElementById('container').innerHTML = tree(data);
} (JSON.parse(wdp.getFiles())));

document.getElementById("container")
	.addEventListener('click', event => {
		if (event.target.tagName == "BUTTON") {
			let val = event.target.value;
			location.href=`edit.html?file=${val}`;
		}
	});
