import { Injectable, NotFoundException } from "@nestjs/common";
import { createTaskDto } from "./dto/create-task.dto";

export interface User {
    name: string;
    age: number;
}

@Injectable()
export class TasksService {

    private tasks = []

    /*  getTasks() {
         // return "Opteniendo tolas las tareas"
         return ["task 1", "task 2", "task 3"]
     } */

    /* getTasks(): User {
        return {
            name: "Sam",
            age: 50
        }
    } */

    getTasks(): any {
        return this.tasks
    }

    /*  getTask(id: number) {
         return this.tasks.find(task => task.id === id)
     } */

    getTask(id: number) {
       const taskEncontrada = this.tasks.find(task => task.id === id)

       if(!taskEncontrada) {
        //return "no se econtro nada"
        // throw new Error("no se econtro nada")
        throw new NotFoundException("no se econtro nada")
       }

       return taskEncontrada
    }

    /*  createTask(task: any) {
         console.log(task)
         this.tasks.push(task)
         return task
     } */

    createTask(task: createTaskDto) {
        console.log(task)
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1
        })
        return task
    }

}