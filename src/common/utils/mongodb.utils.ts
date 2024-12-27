import { ObjectId } from 'mongodb';
import { NotFoundException } from '@nestjs/common';
import { Repository, ObjectLiteral } from 'typeorm';

// Interface for MongoDB entities with ObjectId
interface MongoEntity extends ObjectLiteral {
  id: ObjectId;
}

export async function findOneById<T extends MongoEntity>(
  repository: Repository<T>,
  id: string,
  entityName: string
): Promise<T> {
  try {
    const entity = await repository.findOne({
      where: { _id: new ObjectId(id) } as any
    });

    if (!entity) {
      throw new NotFoundException(`${entityName} with ID "${id}" not found`);
    }

    return entity;
  } catch (error) {
    if (error instanceof NotFoundException) {
      throw error;
    }
    throw new NotFoundException(`Invalid ${entityName} ID format`);
  }
}