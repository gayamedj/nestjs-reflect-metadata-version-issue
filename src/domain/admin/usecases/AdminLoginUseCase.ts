import { IAdminRepository } from "@domain/admin/contracts/IAdminRepository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AdminLoginUseCase {
    constructor(
        private readonly adminRepository: IAdminRepository
    ) { }

    async execute(email: string, password: string): Promise<any> {
        const user = await this.adminRepository.findOneByEmailWithPassword(email);

        if (!user) throw new Error(`Email ${email} was not associated to any admin account`);
        if (user.password !== password) throw new Error('Invalid password');

        return {
            user,
            authToken: 'token',
            refreshToken: 'refresh-token'
        };
    }
}