import { ObjectId } from 'typeorm';
import { TaskStatus } from './task-status.enum';
export declare class Task {
    id: ObjectId;
    description: string;
    dueDate: Date;
    assigneeId: string;
    status: TaskStatus;
    createdAt: Date;
    updatedAt: Date;
}
