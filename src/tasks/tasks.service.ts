import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { findOneById } from '../common/utils/mongodb.utils';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const task = this.taskRepository.create({
      ...createTaskDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.taskRepository.save(task);
  }

  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async getTasksByAssignee(assigneeId: string): Promise<Task[]> {
    return this.taskRepository.find({ where: { assigneeId } });
  }

  async updateTask(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await findOneById(this.taskRepository, id, 'Task');

    Object.assign(task, {
      ...updateTaskDto,
      updatedAt: new Date(),
    });

    return this.taskRepository.save(task);
  }
}