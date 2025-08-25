//To_Do Task
//feature
interface Todo{
    id : number;
    title : string;
    completed : boolean
}

let toDoArray : Todo[] = [];

function addInTodo(title : string):void
{
    const newTodo : Todo = {
        id : toDoArray.length +1,
        title :title,
        completed :false
    }
   toDoArray.push(newTodo);
   console.log("Task is added successfully in Todo");
}

function listAll():void
{
    for(let task of toDoArray)
    {
      console.log(`ID : ${task.id}\nTITLE : ${task.title}\nCompleted : ${task.completed}`);
      console.log();
    }
}
function markAsDone(id : number):void
{
    let todo = toDoArray.find(t => t.id === id);
    if (todo) {
        todo.completed = true;
        console.log(`Todo ${id} marked as complete.`);
    } else {
        console.log(`Todo with ID ${id} not found.`);
    }
    // for(let task of toDoArray)
    // {
    //    if(task.id === id)
    //    {
    //     task.completed = true;
    //     console.log(`${task.title} is mark as done`);
    //    }
    //    else{
    //     console.log(`${task.id} is not found`);
    //    }
    // }
}
addInTodo("Task1");
addInTodo("Task2");
listAll();
markAsDone(123);