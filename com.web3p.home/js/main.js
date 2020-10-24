var items = wdp.getList();

(function () {
    let list = document.getElementById("container"),
		temp = document.getElementById("item_template").innerHTML,
        html = [];

    for (let i = 0; i < items.length; i++) {
		if (itme[i].app === undefined) continue;
		let item = temp.replace("{no}", i).replace("{id}", items[i].id);
        html.push(item);
    };
    list.innerHTML = html.join("");
}());

function fire(no) {
    location.href = "papp://" + items[no].url + "?app=" + items[no].app;
}
