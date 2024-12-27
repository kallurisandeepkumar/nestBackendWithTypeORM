"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const team_entity_1 = require("./team.entity");
const mongodb_utils_1 = require("../common/utils/mongodb.utils");
let TeamsService = class TeamsService {
    constructor(teamRepository) {
        this.teamRepository = teamRepository;
    }
    async createTeam(createTeamDto) {
        const team = this.teamRepository.create({
            ...createTeamDto,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        return this.teamRepository.save(team);
    }
    async getAllTeams() {
        return this.teamRepository.find();
    }
    async updateTeam(id, updateTeamDto) {
        const team = await (0, mongodb_utils_1.findOneById)(this.teamRepository, id, 'Team');
        Object.assign(team, {
            ...updateTeamDto,
            updatedAt: new Date(),
        });
        return this.teamRepository.save(team);
    }
    async addTeamMember(teamId, memberId) {
        const team = await (0, mongodb_utils_1.findOneById)(this.teamRepository, teamId, 'Team');
        if (!team.memberIds.includes(memberId)) {
            team.memberIds.push(memberId);
            team.updatedAt = new Date();
            return this.teamRepository.save(team);
        }
        return team;
    }
};
exports.TeamsService = TeamsService;
exports.TeamsService = TeamsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(team_entity_1.Team)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TeamsService);
//# sourceMappingURL=teams.service.js.map