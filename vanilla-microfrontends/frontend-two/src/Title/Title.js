/**
 * Renders the title
 * @param {HTMLElement} root element that should host the title
 */
export const Title = (root) => {
  const $title = document.createElement('h2');
  $title.innerText = 'Microfrontend Two';

  root.appendChild($title);
}

export default Title;
