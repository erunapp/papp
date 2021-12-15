export const Observer = (function () {
    const topics = {}; // PageRequest, PathReturn, PathAppend

    return {
        notify: function (topic, data) {
            topics[topic] ?.forEach(listener => listener(data));
        },
        listen: function (topic, listener) {
            let listeners = topics[topic];

            if (!listeners) {
                topics[topic] = [listener];
            } else {
                listeners.push(listener);
            }
        },
        remove: function (topic, listener) {
            let listeners = topics[topic] ?? [];

            let pos = listeners.indexOf(listener);
            if (pos >= 0)
                listeners.splice(pos, 1);
        },
    };
})();

export const Mediator = (function () {
    const topics = {}; // Store

    return {
        provide: function (topic, provider, force = false) {
            if (!topics[topic] || force)
                topics[topic] = provider;
        },
        request: function (topic, data) {
            let provider = topics[topic];
            return provider ? provider(data) : null;
        },
        remove: function (topic, provider) {
            if (provider == topics[topic])
                delete topics[topic];
        },
    };
})();

export const activateScript = function iterator(parent) {
    if (parent.tagName === "TEMPLATE") {
        activateTemplateScripts(parent.content);
    } else
        for (let child of parent.children) {
            if (child.tagName === "SCRIPT") {
                new Function(child.textContent).call(parent);
            } else iterator(child);
        };
};

const activateTemplateScripts = function iterator(parent) {
    for (let child of parent.children) {
        if (child.tagName === "TEMPLATE") {
            iterator(child.content);
        } else
        if (child.tagName === "SCRIPT") {
            refreshScript(parent, child);
        }
        else iterator(child);
    };
};

const refreshScript = function (parent, child) {
    let script = document.createElement('script');
    for (let attr of child.attributes) {
        script.setAttribute(attr.name, attr.value)
    };
    script.textContent = child.textContent;
    parent.replaceChild(script, child);
};

export const toIconHtml = function (data, size = 16) {
    if ("string" === typeof data && data.length > 3) {
        let type = data.substring(0, 3).toUpperCase();
        let icon = data.substring(3);
        switch (type) {
            case "SVG": {
                return `<svg width="${size}" height="${size}">${icon}</svg>`;
            }
        }
    }
    return "";
};