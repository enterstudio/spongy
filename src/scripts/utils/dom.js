/**
 * Create an HTML element.
 *
 * @param {string} tagName The tag name of the element to be created.
 * @param {string} id The ID to be applied to the element
 * @param {...string} classNames The class names to be applied to the element.
 * @returns {HTMLElement} The newly created element.
 * @public
 */
 function createElement(tagName ='div', id = '', ...classNames) {
  const element = document.createElement(tagName);
  element.id = id || '';
  element.classList.add(...classNames);

  return element;
}


/**
 * Create a DIV HTML element.
 *
 * @param {string} id The ID to be applied to the DIV.
 * @param {...string} classNames The class names to be applied to the DIV.
 * @returns {HTMLElement} The newly created DIV.
 * @public
 */
function createDiv(id = '', ...classNames) {
  return createElement('div', id, ...classNames);
}


/**
 * Create a P HTML element.
 *
 * @param {string} id The ID to be applied to the P.
 * @param {...string} classNames The class names to be applied to the P.
 * @returns {HTMLElement} The newly created P.
 * @public
 */
function createParagraph(id = '', ...classNames) {
  return createElement('p', id, ...classNames);
}


/**
 * Create a SPAN HTML element.
 *
 * @param {string} id The ID to be applied to the SPAN.
 * @param {...string} classNames The class names to be applied to the SPAN.
 * @returns {HTMLElement} The newly created SPAN.
 * @public
 */
function createSpan(id = '', ...classNames) {
  return createElement('span', id, ...classNames);
}


/**
 * Create a text INPUT HTML element.
 *
 * @param {string} id The ID to be applied to the text INPUT.
 * @param {...string} classNames The class names to be applied to the text INPUT.
 * @returns {HTMLElement} The newly created text INPUT.
 * @public
 */
function createTextInput(id = '', ...classNames) {
  const input = createElement('input', id, ...classNames);
  input.type = 'text';

  return input;
}


/**
 * Append any number of elements to a container element.
 *
 * @param {HTMLElement} container Element to which append child elements to.
 * @param {...HTMLElement} children Elements to be appended to the container element.
 * @public
 */
function appendChildren(container, ...children) {
  [...children].forEach((child) => {
    container.appendChild(child);
  });
}

export {
  createElement,
  createDiv,
  createParagraph,
  createSpan,
  createTextInput,
  appendChildren,
};
