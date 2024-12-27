import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
export declare class TeamsService {
    private teamRepository;
    constructor(teamRepository: Repository<Team>);
    createTeam(createTeamDto: CreateTeamDto): Promise<Team>;
    getAllTeams(): Promise<Team[]>;
    updateTeam(id: string, updateTeamDto: UpdateTeamDto): Promise<Team>;
    addTeamMember(teamId: string, memberId: string): Promise<Team>;
}
