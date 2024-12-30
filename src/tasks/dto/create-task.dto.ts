import { IsNotEmpty, IsString, IsDate, IsEnum } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  dueDate: Date;

  @IsNotEmpty()
  @IsString()
  assigneeId: string;

  @IsNotEmpty()
  @IsEnum(TaskStatus)
  status: TaskStatus;
}