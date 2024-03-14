import { IAdminRepository } from "@domain/admin/contracts/IAdminRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GetAdminsUseCase {
    constructor(
        private readonly adminRepository: IAdminRepository
    ) { }

    async execute(params?: {page?: number}): Promise<any> {
        const admins = await this.adminRepository.findAll();
        return {
            data: admins,
            page: 0,
            total: 0,
            totalPages: 0,
        };
    }
}