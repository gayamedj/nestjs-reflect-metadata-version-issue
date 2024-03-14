import { IAdminRepository } from "@domain/admin/contracts/IAdminRepository";
import { UpdateAdminCommand } from "../commands/UpdateAdminCommand";
import { Admin } from "@domain/admin/Admin";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UpdateAdminUseCase {
    constructor(
        private readonly adminRepository: IAdminRepository
    ) { }

    async execute(id: number, updateAdminCommand: UpdateAdminCommand): Promise<Admin> {
        const adminToUpdate = await this.adminRepository.findOne(id);
        if (!adminToUpdate) throw new Error(`Admin #${id} does not exists`);
        return await this.adminRepository.update(id, updateAdminCommand);
    }
}