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
exports.TeamsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const teams_service_1 = require("./teams.service");
const create_team_dto_1 = require("./dto/create-team.dto");
const update_team_dto_1 = require("./dto/update-team.dto");
let TeamsController = class TeamsController {
    constructor(teamsService) {
        this.teamsService = teamsService;
    }
    createTeam(createTeamDto) {
        return this.teamsService.createTeam(createTeamDto);
    }
    getAllTeams() {
        return this.teamsService.getAllTeams();
    }
    updateTeam(id, updateTeamDto) {
        return this.teamsService.updateTeam(id, updateTeamDto);
    }
    addTeamMember(teamId, memberId) {
        return this.teamsService.addTeamMember(teamId, memberId);
    }
};
exports.TeamsController = TeamsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "createTeam", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "getAllTeams", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_team_dto_1.UpdateTeamDto]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "updateTeam", null);
__decorate([
    (0, common_1.Post)(':id/members/:memberId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TeamsController.prototype, "addTeamMember", null);
exports.TeamsController = TeamsController = __decorate([
    (0, common_1.Controller)('teams'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [teams_service_1.TeamsService])
], TeamsController);
//# sourceMappingURL=teams.controller.js.map