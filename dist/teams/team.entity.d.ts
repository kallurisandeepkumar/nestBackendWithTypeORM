import { ObjectId } from 'typeorm';
export declare class Team {
    id: ObjectId;
    name: string;
    memberIds: string[];
    createdAt: Date;
    updatedAt: Date;
}
