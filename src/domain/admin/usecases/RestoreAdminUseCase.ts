import { IAdminRepository } from "@domain/admin/contracts/IAdminRepository";
import { Admin } from "@domain/admin/Admin";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RestoreAdminUseCase {
    constructor(
        private readonly adminRepository: IAdminRepository
    ) { }

    async execute(id: number): Promise<Admin> {
        return await this.adminRepository.restore(id);
    }
    
}