// DOM function to create new elements
const createEl = (el, textVal, parent) => {
    const newEl = document.createElement(el);
    const textNode = document.createTextNode(textVal);
    newEl.appendChild(textNode);
    parent.appendChild(newEl);
};

// default export -- only one default export per file

export default createEl;
