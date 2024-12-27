import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './team.entity';
export declare class TeamsController {
    private teamsService;
    constructor(teamsService: TeamsService);
    createTeam(createTeamDto: CreateTeamDto): Promise<Team>;
    getAllTeams(): Promise<Team[]>;
    updateTeam(id: string, updateTeamDto: UpdateTeamDto): Promise<Team>;
    addTeamMember(teamId: string, memberId: string): Promise<Team>;
}
