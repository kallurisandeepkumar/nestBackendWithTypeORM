import { TaskStatus } from '../task-status.enum';
export declare class CreateTaskDto {
    description: string;
    dueDate: Date;
    assigneeId: string;
    status: TaskStatus;
}
