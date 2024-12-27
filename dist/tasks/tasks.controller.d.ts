import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getAllTasks(): Promise<Task[]>;
    getTasksByAssignee(assigneeId: string): Promise<Task[]>;
    updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
}
