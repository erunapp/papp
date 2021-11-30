// MenuData Provider
export const storeMenu = (function() {
    const store = {
            "$": [
                {
                    "uid": "$A",
                    "name": "Theme1",
                    "host": "",
                    "page": "",
                    "tags": [],
                    "icon": "SVG<path d='M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z'/>",
                    "desc": "",
                    "star": "",
                    "user": ""
                },
                {
                    "uid": "$B",
                    "name": "Theme2-Theme",
                    "host": "",
                    "page": "",
                    "tags": [],
                    "icon": "SVG<path d='M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z'/>",
                    "desc": "",
                    "star": "",
                    "user": ""
                },
                {
                    "uid": "$C",
                    "name": "Theme3",
                    "host": "",
                    "page": "",
                    "tags": [],
                    "icon": "SVG<path d='M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z'/>",
                    "desc": "",
                    "star": "",
                    "user": ""
                },
                {
                    "uid": "$D",
                    "name": "Theme4",
                    "host": "",
                    "page": "",
                    "tags": [],
                    "icon": "SVG<path d='M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z'/>",
                    "desc": "",
                    "star": "",
                    "user": ""
                }
            ],
            "$A": [
                {
                    "uid": 1,
                    "name": "Clock",
                    "host": "https://erunapp.github.io/papp",
                    "page": "pid=com.web3p.clock&html=main",
                    "tags": ["clock", "Alarm", "timer"],
                    "icon": "SVG<path d='M32 112a80.09 80.09 0 0 1 80-80 79.23 79.23 0 0 1 50 18 253.22 253.22 0 0 1 34.44-10.8C175.89 15.42 145.86 0 112 0A112.14 112.14 0 0 0 0 112c0 25.86 9.17 49.41 24 68.39a255.93 255.93 0 0 1 17.4-31.64A78.94 78.94 0 0 1 32 112zM400 0c-33.86 0-63.89 15.42-84.44 39.25A253.22 253.22 0 0 1 350 50.05a79.23 79.23 0 0 1 50-18 80.09 80.09 0 0 1 80 80 78.94 78.94 0 0 1-9.36 36.75A255.93 255.93 0 0 1 488 180.39c14.79-19 24-42.53 24-68.39A112.14 112.14 0 0 0 400 0zM256 64C132.29 64 32 164.29 32 288a222.89 222.89 0 0 0 54.84 146.54L34.34 487a8 8 0 0 0 0 11.32l11.31 11.31a8 8 0 0 0 11.32 0l52.49-52.5a223.21 223.21 0 0 0 293.08 0L455 509.66a8 8 0 0 0 11.32 0l11.31-11.31a8 8 0 0 0 0-11.32l-52.5-52.49A222.89 222.89 0 0 0 480 288c0-123.71-100.29-224-224-224zm0 416c-105.87 0-192-86.13-192-192S150.13 96 256 96s192 86.13 192 192-86.13 192-192 192zm14.38-183.69V168a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v136a16 16 0 0 0 6 12.48l73.75 59a8 8 0 0 0 11.25-1.25l10-12.5a8 8 0 0 0-1.25-11.25z'/>",
                    "desc": "Show Clock; Alarm, Timer",
                    "star": "",
                    "user": ""
                },
                {
                    "uid": 2,
                    "name": "Page",
                    "host": "http://web3p.com/page",
                    "page": "com.web3p.page",
                    "tags": ["theme", "page"],
                    "icon": "SVG<path d='M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z'/>",
                    "desc": "Show Page: Code, Info",
                    "star": "",
                    "user": ""
                },
                {
                    "uid": 3,
                    "name": "Tool",
                    "host": "http://web3p.com/page",
                    "page": "com.web3p.tool",
                    "tags": ["theme", "tool"],
                    "icon": "SVG<path d='M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z'/><path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z'/>",
                    "desc": "Show Side: Tree, Task, Text",
                    "star": "",
                    "user": ""
                }
            ],
            "$B": [
                {
                    "uid": 1,
                    "name": "Menu",
                    "host": "http://web3p.com/page",
                    "page": "com.web3p.menu",
                    "tags": ["theme", "menu"],
                    "icon": "SVG<path d='M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z'/>",
                    "desc": "Show Menu: Grid, List, Card",
                    "star": "",
                    "user": ""
                },
                {
                    "uid": 2,
                    "name": "Page",
                    "host": "http://web3p.com/page",
                    "page": "com.web3p.page",
                    "tags": ["theme", "page"],
                    "icon": "SVG<path d='M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z'/>",
                    "desc": "Show Page: Code, Info",
                    "star": "",
                    "user": ""
                },
                {
                    "uid": 3,
                    "name": "Tool",
                    "host": "http://web3p.com/page",
                    "page": "com.web3p.tool",
                    "tags": ["theme", "tool"],
                    "icon": "SVG<path d='M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z'/><path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z'/>",
                    "desc": "Show Side: Tree, Task, Text",
                    "star": "",
                    "user": ""
                }
            ],
            "$C": [
                {
                    "uid": 1,
                    "name": "Menu",
                    "host": "http://web3p.com/page",
                    "page": "com.web3p.menu",
                    "tags": ["theme", "menu"],
                    "icon": "SVG<path d='M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z'/>",
                    "desc": "Show Menu: Grid, List, Card",
                    "star": "",
                    "user": ""
                },
                {
                    "uid": 2,
                    "name": "Page",
                    "host": "http://web3p.com/page",
                    "page": "com.web3p.page",
                    "tags": ["theme", "page"],
                    "icon": "SVG<path d='M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z'/>",
                    "desc": "Show Page: Code, Info",
                    "star": "",
                    "user": ""
                },
                {
                    "uid": 3,
                    "name": "Tool",
                    "host": "http://web3p.com/page",
                    "page": "com.web3p.tool",
                    "tags": ["theme", "tool"],
                    "icon": "SVG<path d='M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z'/><path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z'/>",
                    "desc": "Show Side: Tree, Task, Text",
                    "star": "",
                    "user": ""
                }
            ],
            "$D": [
                {
                    "uid": 1,
                    "name": "Menu",
                    "host": "http://web3p.com/page",
                    "page": "com.web3p.menu",
                    "tags": ["theme", "menu"],
                    "icon": "SVG<path d='M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-2zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z'/>",
                    "desc": "Show Menu: Grid, List, Card",
                    "star": "",
                    "user": ""
                },
                {
                    "uid": 2,
                    "name": "Page",
                    "host": "http://web3p.com/page",
                    "page": "com.web3p.page",
                    "tags": ["theme", "page"],
                    "icon": "SVG<path d='M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z'/>",
                    "desc": "Show Page: Code, Info",
                    "star": "",
                    "user": ""
                },
                {
                    "uid": 3,
                    "name": "Tool",
                    "host": "http://web3p.com/page",
                    "page": "com.web3p.tool",
                    "tags": ["theme", "tool"],
                    "icon": "SVG<path d='M3.5 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM3 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z'/><path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm12-1v14h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 0H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9V1z'/>",
                    "desc": "Show Side: Tree, Task, Text",
                    "star": "",
                    "user": ""
                }
            ]
        };

    let current = "$";

    return {
        select: function(key) {
            const path = key ?? current;
            let data = store[path];

            if (!!data) {
                current = path;
                return data;
            } else {
                return [];
            }
        },
        
        getPath: function(len) {
            if (len > 0 && len < current.length) {
                return current.substring(0, len);
            }
            return current;
        },

        current: () => current,
    };
})();