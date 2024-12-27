"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneById = findOneById;
const mongodb_1 = require("mongodb");
const common_1 = require("@nestjs/common");
async function findOneById(repository, id, entityName) {
    try {
        const entity = await repository.findOne({
            where: { _id: new mongodb_1.ObjectId(id) }
        });
        if (!entity) {
            throw new common_1.NotFoundException(`${entityName} with ID "${id}" not found`);
        }
        return entity;
    }
    catch (error) {
        if (error instanceof common_1.NotFoundException) {
            throw error;
        }
        throw new common_1.NotFoundException(`Invalid ${entityName} ID format`);
    }
}
//# sourceMappingURL=mongodb.utils.js.map