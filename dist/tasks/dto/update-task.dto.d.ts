import { TaskStatus } from '../task-status.enum';
export declare class UpdateTaskDto {
    description?: string;
    dueDate?: Date;
    assigneeId?: string;
    status?: TaskStatus;
}
