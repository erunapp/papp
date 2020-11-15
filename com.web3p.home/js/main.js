var items, state;

function init() {
    items = eval(wdp.getList());       state = true;
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
    let list = document.getElementById("container").innerHTML;
    if (history.state == null) history.pushState([items,list,state], ''); else history.replaceState([items,list,state], '');
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

if (history.state == null) {
    init();
} else {
    let list;
    [items,list,state] = history.state;
    document.getElementById("container").innerHTML = list;
}
setMode(state);
