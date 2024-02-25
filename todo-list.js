/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos=[];
  }
  add(todo){
    this.todos.push(todo);
  }
  remove(indexOfTodo){
    this.todos.splice(indexOfTodo,1);
  }
  update(index, updatedTodo){
    this.todos[index]=updatedTodo;
  }
  getAll(){
    return this.todos;
  }
  get(indexOfTodo){
   return this.todos[indexOfTodo];
  }
  clear(){
    this.todos=[];
  }
  
}
/*test1 ('add and getAll', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		expect(todoList.getAll()).toEqual([
			'Task 1',
			'Task 2',
			'Task 3',
		]);
	}); */
let testList1=new Todo();
testList1.add("Task 1");
testList1.add("Task 2");
testList1.add("Task 3");
console.log(testList1.getAll());
  

/*test('remove', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.remove(1);
		expect(todoList.getAll()).toEqual(['Task 1', 'Task 3']);

		todoList.remove(0);
		expect(todoList.getAll()).toEqual(['Task 3']);

		todoList.remove(2);
		expect(todoList.getAll()).toEqual(['Task 3']);
	});
 */

  let testList2=new Todo();
  testList2.add("Task 1");
  testList2.add("Task 2");
  testList2.add("Task 3");
  testList2.remove(1);
  console.log(testList2);
  testList2.remove(0);
  console.log(testList2);
  testList2.remove(2);
  console.log(testList2);


  /*test('update', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.update(1, 'Updated Task 2');
		expect(todoList.get(1)).toBe('Updated Task 2');

		todoList.update(3, 'Invalid Task');
		expect(todoList.getAll()).toEqual([
			'Task 1',
			'Updated Task 2',
			'Task 3',
		]);
	}); */

  let testList3=new Todo();
  testList3.add("Task 1");
  testList3.add("Task 2");
  testList3.add("Task 3");
  testList3.update(1,"Updated Task 2");
  console.log(testList3);
  testList3.update(3,"Invalid Task");
  console.log(testList3);



  /*test('get', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		expect(todoList.get(0)).toBe('Task 1');
		expect(todoList.get(2)).toBe('Task 3');
		expect(todoList.get(3)).toBeNull();
	}); */

  let testList4=new Todo();
  testList4.add("Task 1");
  testList4.add("Task 2");
  testList4.add("Task 3");
  console.log(testList4.get(0));
  console.log(testList4.get(1));
  console.log(testList4.get(2));


  /*test('clear', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.clear();
		expect(todoList.getAll()).toEqual([]);
	}); */

  let testList5=new Todo();
  testList5.add("Task 1");
  testList5.add("Task 2");
  testList5.add("Task 3");
  testList5.clear();
  console.log(testList5.getAll());

  /*test('remove and update with invalid indexes', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');

		todoList.remove(5);
		expect(todoList.getAll()).toEqual(['Task 1', 'Task 2']);

		todoList.update(3, 'Updated Task');
		expect(todoList.getAll()).toEqual(['Task 1', 'Task 2']);
	});
 */

  let testList6=new Todo();
  testList6.add("Task 1");
  testList6.add("Task 2");
  testList6.remove(5);
  console.log(testList6);
  testList6.update(3,"Updated Task");
  console.log(testList6.getAll());


/*test('add duplicate tasks', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 1');
		todoList.add('Task 3');

		expect(todoList.getAll()).toEqual([
			'Task 1',
			'Task 2',
			'Task 1',
			'Task 3',
		]);
	}); */

  let testList7=new Todo();
  testList7.add("Task 1");
  testList7.add("Task 2");
  testList7.add("Task 1");
  testList7.add("Task 3");
  console.log(testList7.getAll());
module.exports = Todo;
