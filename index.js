const addButton = document.querySelector(".addButton");

addButton.addEventListener("click", () => {
  const input = document.querySelector(".input");
  const container = document.querySelector(".container");
  if (input.value) {
    const item = document.createElement("div");
    item.classList.add("item");
    const item_input = document.createElement("input");
    item_input.value = input.value;
    item_input.disabled = true;
    item_input.classList.add("item_input");
    const button = document.createElement("div");
    const editButton = document.createElement("button");
    editButton.classList.add("editButton");
    const editButtonText = document.createTextNode("EDIT");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    const deleteButtonText = document.createTextNode("DELETE");

    button.style.float = "right";

    editButton.appendChild(editButtonText);
    button.appendChild(editButton);
    deleteButton.appendChild(deleteButtonText);
    button.appendChild(deleteButton);
    item.appendChild(item_input);
    item.appendChild(button);
    container.appendChild(item);

    deleteButton.addEventListener("click", (delButton) => {
      removeItem(delButton);
    });
    editButton.addEventListener("click", (edButton) => {
      editItem(edButton);
    });
    input.value = "";
  }
});

function removeItem(delButton) {
  const delEle = delButton.target;
  container = document.querySelector(".container");

  const delItem = delEle.parentNode.parentNode;
  container.removeChild(delItem);
}

function editItem(edButton) {
  const editEle = edButton.target.parentNode.previousSibling;
  if (editEle.classList.contains("item_input")) {
    editEle.classList.remove("item_input");
    editEle.classList.add("editAdd");
    editEle.disabled = false;
  } else {
    editEle.classList.remove("editAdd");
    editEle.classList.add("item_input");
    editEle.disabled = true;
  }
}
