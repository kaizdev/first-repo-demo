export const createTextEl = (elType, textVal, parent, classes = []) => {
    const newEl = document.createElement(elType);
    const text = document.createTextNode(textVal);
    newEl.appendChild(text);
    classes.forEach((c) => newEl.classList.add(c)); //because this is an array, option to add one or more classes to classList
    parent.appendChild(newEl);
};
