;
var data = {
	    no: 1,
	    eventid: "Test Event",
	    eventon: "2020-06-25",
	    alarmat: "09:00",
	    period: "y",
	    alarmfor: 3,
	    alarmunit: "m",
	    countgap: 10,
	    countunit: "m",
	    count: 5,
	    volume: 9,
	    vibrate: true,
	    sound: "melody.mp3",
	    message: "일어나요."
	};

function load() {
    for (let id in data) flds[id] = data[id];
};

function save() {	
    for (let id in data) data[id] = flds[id];
};

var flds = window.eval(wdp.initForm());

load();
