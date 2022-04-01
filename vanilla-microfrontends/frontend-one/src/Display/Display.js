/**
 * Renders the display
 * @param {HTMLElement} root element that should host the display
 */
 export const Display = (root) => {
  const $display = document.createElement('p');
  $display.innerText = 'Placeholder';

  root.appendChild($display);

  return {
    setText(value) {
      $display.innerText = value;
    }
  }
}

export default Display;
