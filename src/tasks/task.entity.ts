import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  description: string;

  @Column()
  dueDate: Date;

  @Column()
  assigneeId: string;

  @Column()
  status: TaskStatus;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}