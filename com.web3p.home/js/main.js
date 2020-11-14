var items = eval(wdp.getList());
var state = true;

(function () {
    let list = document.getElementById("container"),
		temp = document.getElementById("item_template").innerHTML,
        html = [];

    for (let i = 0; i < items.length; i++) {
		if (items[i].app === undefined) continue;
		let item = temp.replace("{no}", i).replace("{id}", items[i].id).replace("{uri}", items[i].uri);
        html.push(item);
    };
    list.innerHTML = html.join("");
}());

function fire(no) {
    location.href = (state ? "papp://" + items[no].url : "info.html") + "?app=" + items[no].app;
}

function setMode(mode) {
    if (mode) {
        document.getElementById("runnings").style.display = document.getElementById("editings").style.display;
        document.getElementById("editings").style.display = "none";
    } else {
        document.getElementById("editings").style.display = document.getElementById("runnings").style.display;
        document.getElementById("runnings").style.display = "none";
    }
    state = mode;
}

setMode(state);
