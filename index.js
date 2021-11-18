/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", window.users);

console.log("todos: ", window.todos);

let message='';
for(const person of users){
    message+=`  ID: ${ person['id']}   |   Name:  ${person['name']}     |  City:  ${person['address']['city']}  \n`;
}
alert(message);

let chooseAction;
let todoMessage=" ";
let actionCommand;
let inputId = Number(prompt(`Enter the user id from the following: \n 1, 2, 3, 4, 5, 6, 7, 8, 9, 10`));

if( checkValidityOfID(inputId) === -1){
    alert("Enter an id number from the list!");
}
else{
    chooseAction = prompt(`What do you want to do? Choose from below:\n Delete, Update, Show, Add`);
    if(checkValidityOfAction(chooseAction) === -1){
        alert("Wrong action input.Choose only from the list!");
    }
   else if(checkValidityOfAction(chooseAction) === "SHOW"){
       //Shows all todos for the specific id
         todoMessage = `Name: ${users[inputId-1].name} \n`;
        for(const item of todos){
        if(item['userId']===inputId){
            todoMessage+=`To do:  ${item['title']}\n`;
        }
        
     }
        alert(todoMessage);
    }
    else if(checkValidityOfAction(chooseAction) === "ADD"){
        //Adds a todo object at the end of the todos array
        actionCommand = prompt("Enter new todo title: ");
        todos.push({userId:inputId,id:todos.length+1,title:actionCommand,completed:false});
        console.log(todos[todos.length-1]);
    }
    else if(checkValidityOfAction(chooseAction) === "UPDATE"){
        //Updates the last todo for a specific person
        actionCommand = prompt("Enter your updated title: ");
        todoMessage = `Name: ${users[inputId-1].name} \n`;
        todos[inputId*20-1].title=actionCommand;
        for(const item of todos){
            if(item['userId']===inputId){
                todoMessage+=`To do:  ${item['title']}\n`;
            }
            
         }
         alert(todoMessage);
    }
    else if(checkValidityOfAction(chooseAction) === "DELETE"){
        //Deletes the last todo for a specific person
        todoMessage = `Name: ${users[inputId-1].name} \n`;
       delete  todos[inputId*20-1].title;
        for(const item of todos){
            if(item['userId']===inputId){
                todoMessage+=`To do:  ${item['title']}\n`;
            }
            
         }
         alert(todoMessage);
    }
    
}
//Checks if the input id is from the list given
function checkValidityOfID(inputId){
    switch(inputId){
        case 1:
             return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
        case 5:
            return 5;
        case 6:
            return 6;
        case 7:
            return 7;
        case 8:
            return 8;
        case 9:
            return 9;
        case 10:
            return 10;
        default:
            return -1;
    }
}
//Checks if the action inputed from the user  is from the list given
function checkValidityOfAction(chooseAction){
    chooseAction=chooseAction.toUpperCase();
    switch(chooseAction){
        case "ADD":
            return "ADD";
        case "UPDATE":
            return "UPDATE";
        case "DELETE":
            return "DELETE";
        case "SHOW":
            return "SHOW";
        default:
            return -1;
    }
}
console.log("todos: ", window.todos);