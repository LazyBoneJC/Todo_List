// 要把 todo-item data 存在瀏覽器裡 要用到 local storage -> 後來沒用到
// 先 e.preventDefault()
// 可以新增 todo, 可以刪除 todo, 可以標記 todo 為完成/未完成

const body = document.querySelector(".todo-list__body");
const todo_items = document.querySelectorAll(".todo-item");
// const squares = body.querySelectorAll(".todo-item__square");
// const delete_btns = body.querySelectorAll(".todo-item__delete-btn");
// const input = document.querySelector(".create-item");

addEventListenerToAll(todo_items);

// 切記：要用 eventListener 監聽 form 上面的 submit，而不是加在 input 上
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // 若輸入為空白，不新增 todo item
  const input = document.querySelector(".create-item");
  if (!input.value) return;

  const todo_item = document.createElement("div");
  todo_item.classList.add("todo-item");

  const square = document.createElement("i");
  square.classList.add("bi");
  square.classList.add("bi-square");
  square.classList.add("todo-item__square");

  const delete_btn = document.createElement("i");
  delete_btn.classList.add("bi");
  delete_btn.classList.add("bi-x-lg");
  delete_btn.classList.add("todo-item__delete-btn");

  const input_text = document.createElement("span");
  input_text.classList.add("item-name");
  input_text.innerText = input.value;
  input.value = "";

  // 下方這段是原本把 todo_item 新增在清單的最下方
  // body.appendChild(todo_item);
  // const todo_items = document.querySelectorAll(".todo-item");
  // todo_items[todo_items.length - 1].appendChild(square);
  // todo_items[todo_items.length - 1].appendChild(input_text);
  // todo_items[todo_items.length - 1].appendChild(delete_btn);
  // addEventListenerToLast(todo_items);

  // 利用 insertAdjacentElement 將 todo_item 新增在清單的最上方
  body.insertAdjacentElement("afterbegin", todo_item);

  const todo_items = document.querySelectorAll(".todo-item");
  todo_items[0].appendChild(square);
  todo_items[0].appendChild(input_text);
  todo_items[0].appendChild(delete_btn);

  addEventListenerToNewItem(todo_items);
});

function addEventListenerToAll(todo_items) {
  for (let todo_item of todo_items) {
    let square = todo_item.querySelector(".todo-item__square");
    let delete_btn = todo_item.querySelector(".todo-item__delete-btn");

    square.addEventListener("click", function () {
      square.classList.toggle("bi-square");
      square.classList.toggle("bi-check2-square");
      todo_item.classList.toggle("checked");
    });

    delete_btn.addEventListener("click", function () {
      todo_item.remove();
    });
  }
}

function addEventListenerToLast(todo_items) {
  let last_todo = todo_items.length - 1;
  let square = todo_items[last_todo].querySelector(".todo-item__square");
  let delete_btn = todo_items[last_todo].querySelector(
    ".todo-item__delete-btn"
  );

  square.addEventListener("click", function () {
    square.classList.toggle("bi-square");
    square.classList.toggle("bi-check2-square");
    todo_items[last_todo].classList.toggle("checked");
  });

  delete_btn.addEventListener("click", function () {
    todo_items[last_todo].remove();
  });
}

function addEventListenerToNewItem(todo_items) {
  let square = todo_items[0].querySelector(".todo-item__square");
  let delete_btn = todo_items[0].querySelector(".todo-item__delete-btn");

  square.addEventListener("click", function () {
    square.classList.toggle("bi-square");
    square.classList.toggle("bi-check2-square");
    todo_items[0].classList.toggle("checked");
  });

  delete_btn.addEventListener("click", function () {
    todo_items[0].remove();
  });
}
