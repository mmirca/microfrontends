/**
 * Renders the display
 * @param {HTMLElement} root element that should host the display
 */
export const Display = (root) => {
  const $input = document.createElement('input');
  $input.onkeyup = () => {
    const event = new CustomEvent('mfs-input-keyup', {
      detail: $input.value,
      bubbles: true,
      composed: true
    });
    $input.dispatchEvent(event);
  };

  root.appendChild($input);
}

export default Display;
