import { ObjectId } from 'mongodb';
import { Repository, ObjectLiteral } from 'typeorm';
interface MongoEntity extends ObjectLiteral {
    id: ObjectId;
}
export declare function findOneById<T extends MongoEntity>(repository: Repository<T>, id: string, entityName: string): Promise<T>;
export {};
