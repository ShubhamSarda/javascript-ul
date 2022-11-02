export default class Kanban{

    static getTasks(columnId){

    }

    static insertTask(columnId, content){

    }

    static updateTask(taskId, updatedInformation){

    }

    static deleteTask(taskId){

    }

    static getAllTasks(){
        const data = read();
        return [data[0].tasks, data[1].tasks, data[2].tasks];
    }
}

function read(){
    const data = localStorage.getItem("data");

    if(!data){
        return [
            {columnId: 0, tasks: []}, 
            {columnId: 1, tasks: []}, 
            {columnId: 2, tasks: []}
        ];
    }

    return JSON.parse(data);
}

function save(){
    
}