import Display from './Display/Display';
import Title from './Title/Title';

/**
 * Initializes the app
 * @param {HTMLElement} root element that should host the app
 */
export const init = (root) => {
  Title(root);
  Display(root);
}
