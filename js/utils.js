export const $ = (selector) => {
  return document.querySelector(selector);
};

export const addItemToContainer = (item, container) => {
  if (!container) return;
  container.appendChild(item);
};

export const removeItemFromContainer = (item, container) => {
  if (!container) return;
  container.removeChild(item);
};
