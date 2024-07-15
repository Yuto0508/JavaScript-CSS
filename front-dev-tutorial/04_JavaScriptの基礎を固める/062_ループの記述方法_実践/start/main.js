const todos = [
    {
        id: 1,
        title: 'Go to school',
        completed: true
    },
    {
        id: 2,
        title: 'Go to museum',
        completed: true
    },
    {
        id: 3,
        title: 'Go to shopping',
        completed: false
    }
]

 //それぞれのオブジェクトがconsoleによって取得される。
 //todoという変数にtodosを格納。
 //if文を使ってtureの場合のみを取得する。
 // for(let i = 0; i < todos.length; i++){
 //     let todo = todos[i];
 //     if(todo.completed === true){
 //         console.log(i,todo.completed);
 //     }
 // }

 //for in文の場合
//   for(let i in todos){
//      let todo = todos[i];
//      if(todo.completed === true){
//          console.log(i,todo.completed);
//      }
//  }

 //for of文の場合
 for(let todo  of todos){
    // console.log(todo);

    if(todo.completed === true){
        console.log(todo.title);
    }
    // let todo = todos[i];
    // if(todo.completed === true){
    //     console.log(i,todo.completed);
    // }
}