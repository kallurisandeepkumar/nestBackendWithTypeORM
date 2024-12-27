import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { findOneById } from '../common/utils/mongodb.utils';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async createTeam(createTeamDto: CreateTeamDto): Promise<Team> {
    const team = this.teamRepository.create({
      ...createTeamDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.teamRepository.save(team);
  }

  async getAllTeams(): Promise<Team[]> {
    return this.teamRepository.find();
  }

  async updateTeam(id: string, updateTeamDto: UpdateTeamDto): Promise<Team> {
    const team = await findOneById(this.teamRepository, id, 'Team');

    Object.assign(team, {
      ...updateTeamDto,
      updatedAt: new Date(),
    });

    return this.teamRepository.save(team);
  }

  async addTeamMember(teamId: string, memberId: string): Promise<Team> {
    const team = await findOneById(this.teamRepository, teamId, 'Team');

    if (!team.memberIds.includes(memberId)) {
      team.memberIds.push(memberId);
      team.updatedAt = new Date();
      return this.teamRepository.save(team);
    }

    return team;
  }
}