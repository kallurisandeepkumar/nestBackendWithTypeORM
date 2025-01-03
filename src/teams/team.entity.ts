import { Entity, ObjectIdColumn, ObjectId, Column } from 'typeorm';

@Entity()
export class Team {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  memberIds: string[];

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}