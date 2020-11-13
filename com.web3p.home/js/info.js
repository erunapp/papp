;
var data = {
	    group: "",
	    id: "",
	    icon: "",
	    app: "",
	    url: "",
	    tag: "",
	    info: ""
	};

function load() {
	data = JSON.parse(wdp.load(location.search.substr(5)));
    for (let id in data) flds[id] = data[id];
	flds['iconimg'] = data['icon'];
};

function save() {	
	for (let id in data) data[id] = flds[id];
	wdp.save(JSON.stringify(data));
	history.back();
};

var flds = window.eval(wdp.initForm());

load();
