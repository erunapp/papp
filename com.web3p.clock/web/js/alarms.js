
bind([
    {
        no: 1,
        eventon: "2020-06-25",
        alarmat: "09:00",
        period: "y",
        sound: "melody.mp3",
        alarmfor: 3,
        alarmunit: "m",
        countgap: 10,
        countunit: "m",
        count: 5,
        volume: 9,
        vibrate: true,
        message: "일어나세요."
    },
    {
        no: 2,
        eventon: "2020-06-25",
        alarmat: "09:00",
        period: "y",
        sound: "melody.mp3",
        alarmfor: 3,
        alarmunit: "m",
        countgap: 10,
        countunit: "m",
        count: 5,
        volume: 9,
        vibrate: true,
        message: "일어나세요."
    },
    {
        no: 3,
        eventon: "2020-06-25",
        alarmat: "09:00",
        period: "y",
        sound: "melody.mp3",
        alarmfor: 3,
        alarmunit: "m",
        countgap: 10,
        countunit: "m",
        count: 5,
        volume: 9,
        vibrate: true,
        message: "일어나세요."
    },
    {
        no: 4,
        eventon: "2020-06-25",
        alarmat: "09:00",
        period: "y",
        sound: "melody.mp3",
        alarmfor: 3,
        alarmunit: "m",
        countgap: 10,
        countunit: "m",
        count: 5,
        volume: 9,
        vibrate: true,
        message: "일어나세요."
    },
    {
        no: 5,
        eventon: "2020-06-25",
        alarmat: "09:00",
        period: "y",
        sound: "melody.mp3",
        alarmfor: 3,
        alarmunit: "m",
        countgap: 10,
        countunit: "m",
        count: 5,
        volume: 9,
        vibrate: true,
        message: "일어나세요."
    },
    {
        no: 6,
        eventon: "2020-06-25",
        alarmat: "09:00",
        period: "y",
        sound: "melody.mp3",
        alarmfor: 3,
        alarmunit: "m",
        countgap: 10,
        countunit: "m",
        count: 5,
        volume: 9,
        vibrate: true,
        message: "일어나세요."
    },
    {
        no: 7,
        eventon: "2020-06-25",
        alarmat: "09:00",
        period: "y",
        sound: "melody.mp3",
        alarmfor: 3,
        alarmunit: "m",
        countgap: 10,
        countunit: "m",
        count: 5,
        volume: 9,
        vibrate: true,
        message: "일어나세요."
    },
    {
        no: 8,
        eventon: "2020-06-25",
        alarmat: "09:00",
        period: "y",
        sound: "melody.mp3",
        alarmfor: 3,
        alarmunit: "m",
        countgap: 10,
        countunit: "m",
        count: 5,
        volume: 9,
        vibrate: true,
        message: "일어나세요."
    },
    {
        no: 9,
        eventon: "2020-06-25",
        alarmat: "09:00",
        period: "y",
        sound: "melody.mp3",
        alarmfor: 3,
        alarmunit: "m",
        countgap: 10,
        countunit: "m",
        count: 5,
        volume: 9,
        vibrate: true,
        message: "일어나세요."
    },
]);

function bind(rows) {
    let list = document.getElementById("list"),
        html = "";

    rows.forEach(row => {
        html += `<tr><td>
                 ${no(row.no,2)}: ${row.eventon} ${row.alarmat} ${period(row.period)} ${row.sound}<br>
                 ${row.alarmfor}${unit(row.alarmunit)} 동안, ${row.countgap}${unit(row.countunit)} 간격, ${row.count}회 반복, 볼륨:${row.volume}, 진동:${check(row.vibrate)}<br>
                 ${row.message}
                 </td></tr>`;
    });
    if (list.tBodies.length < 1) list.createTBody();
    list.tBodies[0].innerHTML = html;
}

function no (val, len, filler = "0") {
    let arr = new Array(len).fill(filler);
    arr[len - 1] = val;
    return arr.join("").slice(-len);
}

function period (val) {
    switch (val) {
        case "o": return "한번";
        case "d": return "매일";
        case "w": return "매주";
        case "m": return "매월";
        case "y": return "매년";
    }
    return "    ";
}

function unit (val) {
    switch (val) {
        case "s": return "초";
        case "m": return "분";
        case "h": return "시간";
        case "d": return "일";
    }
    return "  ";
}

function check (val) {
    return val ? "O" : "X";
}
