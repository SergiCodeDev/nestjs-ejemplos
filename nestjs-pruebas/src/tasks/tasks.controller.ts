import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { createTaskDto } from "./dto/create-task.dto";
import { updateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller({})
@ApiTags("tasks")
export class TasksController {
    // añadido después de crear services
    tasksService: TasksService
    constructor(tasksService: TasksService) {
        this.tasksService = tasksService
    }

    /*     @Get("/tasks")
        getAllTasks() {
            // buscar db
            // peticion a otro backend
            // return "Opteniendo tolas las tareas"
            return this.tasksService.getTasks()
        } */

    @Get("/tasks")
    @ApiOperation({summary: "Obtener todas las tasks"})
    @ApiResponse({status: 200, description: "retornar todas las tasks"})
    @ApiResponse({status: 403, description: "Forbidden"})
    getAllTasks(@Query() query: any) {
        console.log(query)
        return this.tasksService.getTasks()
    }

    @Get(":id")
    getTask(@Param("id") id : string) {
        return this.tasksService.getTask(parseInt(id))
    }


    @Post("/tasks")
    @UsePipes(new ValidationPipe()) // validacion mensajes de error
    createTasks(@Body() task: createTaskDto) {
        return this.tasksService.createTask(task)
    }

    @Put("/tasks")
    updateTasks(@Body() task: updateTaskDto) {
        return "actualizando"
    }

    @Delete("/tasks")
    deleteTasks() {
        return "eliminando"
    }

    @Patch("/tasks")
    patchTasks() {
        return "editando parciamente"
    }
}
