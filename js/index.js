import { $, addItemToContainer, removeItemFromContainer } from "./utils.js";

const container = $(".container");
const dropContainer = $(".drop-container");
dropContainer.ondragover = allowDrop;
dropContainer.ondrop = drop;
dropContainer.ondragleave = dragLeave;
let changeOnce = false;
let itemBeingDragged;

const dragStart = (e) => {
  dropContainer.classList.add("drop-container-active");
  changeOnce = true;
  itemBeingDragged = e.target;
  //   e.target.classList.add("drop-item-active");
};

const dragEnd = (e) => {
  dropContainer.classList.remove("drop-container-active");
  dropContainer.classList.remove("drop-container-hover");
};

function dragLeave(e) {
  changeOnce = true;
  dropContainer.classList.remove("drop-container-hover");
}

function allowDrop(e) {
  e.preventDefault();
  if (changeOnce) {
    changeOnce = false;
    e.target.classList.add("drop-container-hover");
  }
}

function drop(e) {
  addItemToContainer(itemBeingDragged, dropContainer);
  itemBeingDragged = null;
}

const createDraggableItem = (id) => {
  const div = document.createElement("div");
  div.className = "drop-item";
  div.textContent = "Item " + id;
  div.draggable = true;
  div.ondragstart = dragStart;
  div.ondragend = dragEnd;
  return div;
};

const createDraggableItems = () => {
  for (let i = 0; i < 5; i++) {
    const item = createDraggableItem(i + 1);
    container.appendChild(item);
  }
};

createDraggableItems();
