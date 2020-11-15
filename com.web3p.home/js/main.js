var items, mode;

function init() {
    items = eval(wdp.getList());       mode = true;
    let list = document.getElementById("container"),
		temp = document.getElementById("item_template").innerHTML,
        html = [];

    for (let i = 0; i < items.length; i++) {
		if (items[i].app === undefined) continue;
		let item = temp.replace("{no}", i).replace("{id}", items[i].id).replace("{uri}", items[i].uri);
        html.push(item);
    };
    list.innerHTML = html.join("");
};

function fire(no) {
    history.replaceState([items, document.getElementById("container").innerHTML, mode], '');
    location.href = (mode ? "papp://" + items[no].url : "info.html") + "?app=" + items[no].app;
}

function setMode(newMode) {
    if (newMode) {
        document.getElementById("runnings").style.display = document.getElementById("editings").style.display;
        document.getElementById("editings").style.display = "none";
    } else {
        document.getElementById("editings").style.display = document.getElementById("runnings").style.display;
        document.getElementById("runnings").style.display = "none";
    }
    mode = newMode;
}

if (history.state == null) {
    init();
} else {
    let list;
    [items,list,mode] = history.state;
    document.getElementById("container").innerHTML = list;
}
setMode(mode);
