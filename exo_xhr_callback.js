// Callback, promesses : gestion de l'asynchronisme
// XmlHttpRequest
// version Glorian Bikoumou

const url_users = "https://jsonplaceholder.typicode.com/users",
    url_user_info = "https://jsonplaceholder.typicode.com/todos?userId=";

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const get = (url, success, error)=>{
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        //console.log(`Message reçu readyState:${xhr.readyState}`);
        if (xhr.readyState === 4){
            if(xhr.status === 200){
                //console.log(xhr.responseText);
                success(xhr.responseText);
            } else {
                console.log(`Une erreur est survenue: code ${xhr.status}`);
            }
        }
    }
    xhr.open("GET", url);
    xhr.send();
};

const success_step2 = (responseText) => {
    const users = JSON.parse(responseText);
    const responseTodos = get(url_user_info + users[3].id, 
        (todosText) => {
            const todos = JSON.parse(todosText);
            for(todo of todos){
                console.log(`[${todo.id}] ${todo.title} - (${todo.completed?'complet':'incomplet'})`);
            }
            //Object.values(todos).slice(1).map(todo=>`[${todo.id}] ${todo.title} - (${todo.completed?'complet':'incomplet'})`);
        },
    _error);
}

const _error = (errorMessage) => {
    console.error(errorMessage);
}

get(url_users, success_step2, _error);

