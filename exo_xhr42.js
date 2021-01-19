// appelle des todo du user 42
// from scratch



var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

get =  (url) => {
    //console.log(`url:${url}`);
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4){
                if (xhr.status === 200){
                    resolve(xhr.responseText);
                } else {
                    reject(`Erreur http: ${xhr.readyState}`);
                }
            }
        }
        xhr.open("GET", url);
        xhr.send();
    });
};


getJsonObject = async (url, id = null) => {
    url = id === null ? url : url += id;
    return JSON.parse( await get(url));
};

getTodos = async ()=>{
    //url_users
    //url_user_info
    //user

    const users = await getJsonObject(url_users);
    const _user = users.filter(e=>e.id == user.id);
    console.log(`User#${user.id}`);
    console.log(_user);
    const _userTodos = await getJsonObject(url_user_info, user.id);
    //console.log(_userTodos);
    const _todo = _userTodos.filter(e=>e.id == user.todo);
    console.log(`User#:${user.id}, Todo#${user.todo}`);
    console.log(_todo);
};

function main() {
    getTodos();
}

const url_users = "https://jsonplaceholder.typicode.com/users",
    url_user_info = "https://jsonplaceholder.typicode.com/todos?userId=",
    user = {id:10, todo:182};

main();