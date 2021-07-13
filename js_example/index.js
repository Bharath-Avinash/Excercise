"use strict"
let totalTodos = [];
class Todo {
  static nextId = 0;
  constructor(title) {
    Todo.nextId++;
    this.id = Todo.nextId;
    this.title = title;
    this.completed = false;
  }
}

// ---------------------------------------
// Service
// ---------------------------------------

class TodoService {
  addTodo(title) {

    let todo = new Todo(title);
    totalTodos.push(todo);


  }
  editTodo(id, newTitle) {

    let todo = totalTodos.find(p => p.id === id);

    todo.title = newTitle;

    // totalTodos.push(todo);
  }
  completeTodo(id) {
    let todo = totalTodos.find(p => p.id === id)

    todo.completed = true;

    // totalTodos.push(todo);


  }
  completeAll() {

    //totalTodos.forEach(p=>if(p.completed = true){return p.completed = false})
    const areAllCompleted = totalTodos.every((todo) => todo.isCompleted);
     totalTodos.forEach((todo) => {
       todo.isCompleted = !areAllCompleted;
     });






  }
  deleteTodo(id) {
    let ind = totalTodos.findIndex(p => p.id === id);
    totalTodos.splice(ind, 1);
  }
  clearCompleted() {
          const newArr = totalTodos.filter(p => p.completed);
    newArr.forEach(
      p => {
      
          let ind = totalTodos.findIndex(p); 
          totalTodos.splice(ind,1);
      }
    )
  }
  viewTodos(flag) {
    if (flag === "ALL") {

      totalTodos.forEach(p => console.log(p));
    }
    if (flag === " ACTIVE") {

      totalTodos.forEach(
        P => { if (P.completed === false) {

          console.log(p);  }
        }

      );
    }

    if (flag === " COMPLETED") {

      totalTodos.forEach(
        P => { if(P.completed === true) {

          console.log(p);
        }});
    }


  }
}
// ---------------------------------------

const todoService = new TodoService();

todoService.addTodo("item-1");
todoService.addTodo("item-2");
todoService.editTodo(2, "item-two");
//todoService.viewTodos("ALL")
todoService.completeAll()
todoService.viewTodos("ALL")
