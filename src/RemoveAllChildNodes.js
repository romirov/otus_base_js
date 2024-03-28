/**
 * Функция удаляет все дочерние элементы родителя
 * @param {dom element} parent
 */
export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
