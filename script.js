const addBtn = document.querySelector(".addButton");
addBtn.onclick = addtoList;

function addtoList() {
  const taskValue = document.querySelector(".textBox").value;

  const ul = document.querySelector(".list");
  const li = document.createElement("li");
  li.setAttribute("Class", "li");
  ul.append(li);

  const span = document.createElement("span");
  span.append(taskValue);
  li.append(span);

  const delBtn = document.createElement("button");
  delBtn.append("Delete");
  li.append(delBtn);

  delBtn.addEventListener("click", () => {
    ul.removeChild(li);
  });

  document.querySelector(".textBox").value = "";

  document.querySelector(".addButton").addEventListener("click", () => {
    document.querySelector(".textBox").focus();
  });
}
