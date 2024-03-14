import { IAdminRepository } from "@domain/admin/contracts/IAdminRepository";
import { CreateAdminCommand } from "@domain/admin/commands/CreateAdminCommand";
import { AdminFactory } from "@domain/admin/AdminFactory";
import { Admin } from "@domain/admin/Admin";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateAdminUseCase {
    constructor(
        private readonly adminRepository: IAdminRepository
    ) { }

    async execute(payload: CreateAdminCommand): Promise<Admin> {
        const existingAdmin = await this.adminRepository.findOneByEmail(payload.email);
        if (existingAdmin) throw new Error('Admin with this email already exists');
        const admin = AdminFactory.create(payload);
        return await this.adminRepository.save(admin);
    }
}