function todoUserInterface() {
  // const todosDiv = document.getElementById('todos')

  function showTodoItem(newId, newDescription) {
    /*
     * ค้นหา element ด้วย id 'listTodo' และเก็บค่าไว้ในตัวแปร listTodoDiv
     */
    const listTodoDiv = document.getElementById('listTodo');

    /*
     * แสดงจำนวน child elements ของ listTodoDiv
     */
    console.log(listTodoDiv.children.length);

    // สร้าง element div ใหม่
    const newTodoDiv = document.createElement('div');

    // ตั้งค่า class attribute ของ newTodoDiv เป็น 'todoItem'
    newTodoDiv.className = 'todoItem';

    // ตั้งค่า id attribute ของ newTodoDiv เป็น newId
    newTodoDiv.setAttribute('id', newId);

    // สร้าง element p ใหม่
    const newTodoItem = document.createElement('p');

    // ตั้งค่า textContent ของ newTodoItem เป็น newDescription
    newTodoItem.textContent = newDescription;

    // เพิ่ม newTodoItem เป็น child ของ newTodoDiv
    newTodoDiv.appendChild(newTodoItem);

    // สร้าง element button ใหม่
    const newDoneButton = document.createElement('button');

    // ตั้งค่า textContent ของ newDoneButton เป็น 'Not done'
    newDoneButton.textContent = 'Not done';

    // เพิ่ม newDoneButton เป็น child ของ newTodoDiv
    newTodoDiv.appendChild(newDoneButton);

    // สร้าง element remove ใหม่
    const newRemoveButton = document.createElement('remove');

    // ตั้งค่า textContent ของ newRemoveButton เป็น 'remove'
    newRemoveButton.textContent = 'remove';

    // เพิ่ม newRemoveButton เป็น child ของ newTodoDiv
    newTodoDiv.appendChild(newRemoveButton);

    // เพิ่ม newTodoDiv เป็น child ของ listTodoDiv
    listTodoDiv.appendChild(newTodoDiv);
  }

  function showNumberOfDone(numberOfDone) {
    /*
     * ค้นหา element ด้วย id 'done' และเก็บค่าไว้ในตัวแปร doneInP
     */
    const doneInP = document.getElementById('done');

    // ตั้งค่า textContent ของ doneInP เป็น `Number of Done:${numberOfDone}`
    doneInP.textContent = `Number of Done:${numberOfDone}`;
  }

  function showNumberOfNotDone(numberOfNotDone) {
    /*
     * ค้นหา element ด้วย id 'notDone' และเก็บค่าไว้ในตัวแปร notDoneInP
     */
    const notDoneInP = document.getElementById('notDone');

    // ตั้งค่า textContent ของ notDoneInP เป็น `Number of Not Done:${numberOfNotDone}`
    notDoneInP.textContent = `Number of Not Done:${numberOfNotDone}`;
  }

  function removeTodoItem(removeId) {
    // ค้นหา element ด้วย id 'removeId' และเก็บค่าไว้ในตัวแปร removeTodo
    const removeTodo = document.getElementById(removeId);

    // ลบ removeTodo จาก parentElement ของมัน
    removeTodo.parentElement.removeChild(removeTodo);
  }

  return {
    showTodoItem,
    showNumberOfDone,
    showNumberOfNotDone,
    removeTodoItem,
  };
}

export { todoUserInterface };
