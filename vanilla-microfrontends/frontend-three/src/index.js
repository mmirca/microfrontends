import MicrofrontendOne from '@vanilla-mfs/frontend-one';
import MicrofrontendTwo from '@vanilla-mfs/frontend-two';
/**
 * Initializes the app
 * @param {HTMLElement} root element that should host the app
 */
export const init = (root) => {
  MicrofrontendTwo.init(root);

  const display = MicrofrontendOne.init(root);

  document.addEventListener('mfs-input-keyup', (ev) => {
    display.setText(ev.detail);
  });
}
