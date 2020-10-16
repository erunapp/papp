var items = [
	    {
	        id: "Clock 0",
	        url: "papp://erunapp.github.io/?app=com.web3p.clock&run=0",
	    },
	    {
	        id: "Clock 1",
	        url: "papp://erunapp.github.io/?app=com.web3p.clock&run=1",
	    },
	    {
	        id: "Source 0",
	        url: "papp://erunapp.github.io/?app=com.web3p.source&run=0",
	    },
	    {
	        id: "Source 1",
	        url: "papp://erunapp.github.io/?app=com.web3p.source&run=1",
	    },
	    {
	        id: "Alarm Clock",
	        url: "clock.html",
	    },
	    {
	        id: "Alarm Clock",
	        url: "clock.html",
	    },
	    {
	        id: "Alarm Clock",
	        url: "clock.html",
	    },
	    {
	        id: "Alarm Clock",
	        url: "clock.html",
	    },
	    {
	        id: "Alarm Clock",
	        url: "clock.html",
	    },
	];

(function () {
    let list = document.getElementById("container"),
		temp = document.getElementById("item_template").innerHTML,
        html = [];

    for (let i = 0; i < items.length; i++) {
		let item = temp.replace("$no$", i).replace("$id$", items[i].id);
        html.push(item);
    };
    list.innerHTML = html.join("");
}());

function fire(item) {
    location.href = items[item].url;
}
