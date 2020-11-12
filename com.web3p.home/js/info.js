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
    for (let id in data) flds[id] = data[id];
};

function save() {	
	for (let id in data) data[id] = flds[id];
	wcp.save(JSON.stringify(data));
};

var form = window.eval(wdp.initForm());
var flds = form.flds;

load();
