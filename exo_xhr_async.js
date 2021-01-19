// Async/await : gestion de l'asynchronisme
// XmlHttpRequest
// version Glorian Bikoumou

const url_users = "https://jsonplaceholder.typicode.com/users",
    url_user_info = "https://jsonplaceholder.typicode.com/todos?userId=";

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const get = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) 
                if (xhr.status === 200) 
                    resolve(xhr.responseText);
             else
                reject("Ceci est un message d'erreur");
        };
        xhr.open("GET", url);
        xhr.send();
    });
};
const getTodos = async () => {
    const response = await get("https://jsonplaceholder.typicode.com/users");
    const users = JSON.parse(response);
    const user = users[3];
    const id = user.id;
    const responseTodos = await get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
    const todos = JSON.parse(responseTodos);
    console.log(todos);
};

getTodos();
