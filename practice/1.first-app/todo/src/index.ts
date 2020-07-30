// declare dependencies on the TodoItem and TodoCollection classes
// http://dl.booktolearn.com/ebooks2/computer/javascript/9781484249789_Essential_TypeScript_ccb1.pdf
import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"), 
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), 
    new TodoItem(4, "Call Joe", true)
];

let collection : TodoCollection = new TodoCollection("nddong", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId: number = collection.addTodo("Go for run");
let todoItem: TodoItem = collection.getTodoById(newId);

collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());

// collection.addTodo(todoItem);
