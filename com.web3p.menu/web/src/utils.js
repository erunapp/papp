
export const mediator = (function() {
    const topics = {};  // PageRequest, PathReturn, PathAppend

    return {
        notify: function(topic, data) {
            topics[topic]?.forEach(listener => listener(data));
        },

        listen: function(topic, listener) {
            let listeners = topics[topic];

            if (!listeners) {
                topics[topic] = [listener];
            } else {
                listeners.push(listener);
            }
        },

        remove: function(topic, listener) {
            let listeners = topics[topic] ?? [];

            let pos = listeners.indexOf(listener);
            if (pos >= 0)
                listeners.splice(pos, 1);
        },
    };
})();

export const activateScript = function iterator(parent) {
    if (parent.tagName === "TEMPLATE") {
        activateTemplateScripts(parent.content);
    } else
    for (const child of parent.children) {
        if (child.tagName === "SCRIPT") {
            new Function(child.textContent).call(parent);
        }
        else iterator(child);
    };
}

const refreshScript = function(parent, child) {
    const script = document.createElement('script');
    for (const attr of child.attributes) {
        script.setAttribute(attr.name, attr.value)
    };
    script.textContent = child.textContent;
    parent.replaceChild(script, child);
}

const activateTemplateScripts = function iterator(parent) {
    for (const child of parent.children) {
        if (child.tagName === "TEMPLATE") {
            iterator(child.content);
        } else
        if (child.tagName === "SCRIPT") {
            refreshScript(parent, child);
        }
        else iterator(child);
    };
};

export const toIconHtml = function (data) {
    if ("string" === typeof data && data.length > 3) {
        const type = data.substring(0,3).toUpperCase();
        const icon = data.substring(3);
        switch (type) {
            case "SVG": {
                return `<svg width="16" height="16">${icon}</svg>`;
            }
        }
    }
    return "icon";
};
