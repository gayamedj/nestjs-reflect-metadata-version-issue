import { IAdminRepository } from "@domain/admin/contracts/IAdminRepository";
import { Admin } from "@domain/admin/Admin";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GetAdminByIdUseCase {
    constructor(
        private readonly adminRepository: IAdminRepository
    ) { }

    async execute(adminId: number): Promise<Admin> {
        const admin = await this.adminRepository.findOne(adminId);
        return admin;
    }
}