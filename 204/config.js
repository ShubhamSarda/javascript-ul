const username = "shubham";
const age = 26;

export default function connect(){
    return `${username} is connected!`;
}

function disconnect(){
    return `${username} is disconnected!`;
}

export {username, age, disconnect};
// export {username, age, connect as default, disconnect};