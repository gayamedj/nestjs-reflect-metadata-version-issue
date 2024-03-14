import { IAdminRepository } from "@domain/admin/contracts/IAdminRepository";
import { Admin } from "@domain/admin/Admin";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteAdminUseCase {
    constructor(
        private readonly adminRepository: IAdminRepository
    ) { }

    async execute(adminId: number): Promise<Admin> {
        return await this.adminRepository.delete(adminId);
    }
}