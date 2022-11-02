const baseURL = "https://jsonplaceholder.typicode.com";

function getAllPosts(endPoint){
    fetch(baseURL + endPoint)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}
getAllPosts("/posts/");


function addNewPost(endPoint){
    fetch(baseURL + endPoint, {
        method: "POST",
        body: JSON.stringify({
            title: "New Post Title",
            body: "Long description!",
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
}
addNewPost("/posts/");


function updatePost(endPoint){
    fetch(baseURL + endPoint, {
        method: "PUT",
        body: JSON.stringify({
            id: 1,
            title: "Updated New Title",
            body: "Long updated description!",
            userId: 1
        }),
        header: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));
}
updatePost("/posts/1");


function deletePost(endPoint){
    fetch(baseURL + endPoint, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(data => console.log(data));
}
deletePost("/posts/1");