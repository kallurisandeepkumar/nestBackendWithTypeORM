import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    getAllTasks(): Promise<Task[]>;
    getTasksByAssignee(assigneeId: string): Promise<Task[]>;
    updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task>;
}
