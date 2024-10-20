/**
 * 문제: Todo 리스트 만들기
문제 설명:
간단한 Todo 리스트 애플리케이션을 만들고, 사용자가 할 일을 추가하고 삭제할 수 있는 기능을 구현하세요.

요구 사항:
할 일 추가하기:

사용자가 텍스트를 입력할 수 있는 입력 필드와 "추가" 버튼을 제공합니다.
입력된 텍스트가 없으면 아무 작업도 하지 않고, 텍스트가 입력된 경우에만 할 일을 추가합니다.
추가된 할 일은 화면에 목록으로 표시됩니다.
할 일 삭제하기:

각 할 일 옆에 "삭제" 버튼을 추가하여, 사용자가 해당 할 일을 삭제할 수 있어야 합니다.
할 일이 삭제되면 화면에서 해당 항목을 즉시 제거합니다.
할 일 완료 표시:

사용자가 할 일을 클릭하면 해당 할 일에 취소선이 그어져서 완료되었음을 표시합니다. 다시 클릭하면 취소선이 제거되어 완료 상태가 취소됩니다.
 */

const elTodoList = document.getElementById("todoList");

// Todo 리스트를 관리하는 함수
function addTodo() {
  // 여기에 코드를 작성하세요
  const value = document.getElementById("todoInput").value;

  const newTodo = `<li id="todo"> ${value} <button id="btnDelete">삭제</button></li>`;
  elTodoList.insertAdjacentHTML("beforeend", newTodo);

  document.getElementById("btnDelete").addEventListener("click", deleteTodo);

  document.getElementById("todoInput").value = "";
}

function deleteTodo(event) {
  // 여기에 코드를 작성하세요
  event.preventDefault();
  event.target.parentElement.remove();
}

function toggleComplete(event) {
  // 여기에 코드를 작성하세요
  let textStyle = event.target.style.textDecoration;

  event.target.style.textDecoration =
    textStyle === "line-through" ? "" : "line-through";
}

// 이벤트 리스너 설정
document.getElementById("addTodoBtn").addEventListener("click", addTodo);
elTodoList.addEventListener("click", toggleComplete);
