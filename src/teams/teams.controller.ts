import { Controller, Get, Post, Put, Body, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './team.entity';

@Controller('teams')
@UseGuards(AuthGuard('jwt'))
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Post()
  createTeam(@Body() createTeamDto: CreateTeamDto): Promise<Team> {
    return this.teamsService.createTeam(createTeamDto);
  }

  @Get()
  getAllTeams(): Promise<Team[]> {
    return this.teamsService.getAllTeams();
  }

  @Put(':id')
  updateTeam(
    @Param('id') id: string,
    @Body() updateTeamDto: UpdateTeamDto,
  ): Promise<Team> {
    return this.teamsService.updateTeam(id, updateTeamDto);
  }

  @Post(':id/members/:memberId')
  addTeamMember(
    @Param('id') teamId: string,
    @Param('memberId') memberId: string,
  ): Promise<Team> {
    return this.teamsService.addTeamMember(teamId, memberId);
  }
}