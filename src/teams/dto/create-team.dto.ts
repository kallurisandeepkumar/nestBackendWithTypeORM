import { IsNotEmpty, IsString, IsArray } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsArray()
  @IsString({ each: true })
  memberIds: string[];
}