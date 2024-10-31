const addButton = document.getElementById("add_button");
const list = document.getElementById("list");

addButton.addEventListener("click", () => {
  let info = prompt("ინფორმაცია");

  if (info) {
    const li = document.createElement("li");
    li.textContent = info;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "წაშლა";
    deleteButton.addEventListener("click", () => {
      list.removeChild(li);
    });
    li.appendChild(deleteButton);
    list.appendChild(li);
  } else {
    alert("შევსება სავალდებულოა");
  }
});
