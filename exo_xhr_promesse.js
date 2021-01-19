

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
                reject("Une erreur est survenue");
        };
        xhr.open("GET", url);
        xhr.send();
    });
};
const getTodos = () => {
    const response = get(url_users).then((responseText) => {
        const users = JSON.parse(responseText);
        const user4 = users[3];
        const id = user4.id;
        return id;
    }).then((id) => {
        const responseTodos = get(url_user_info + id).then((responseText) => {
            const result = JSON.parse(responseText);
            console.log(result);
        });
    }).catch((errorMessage) => {
        console.log("DANS LE .CATCH");
        console.error(errorMessage);
    });
};

getTodos();