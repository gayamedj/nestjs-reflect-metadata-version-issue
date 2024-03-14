import { Admin } from "@domain/admin/Admin";
import { AdminRole, AdminRoleEnum } from "@domain/admin/valueobjects/AdminRole"
import { CreateAdminCommand } from "@domain/admin/commands/CreateAdminCommand";

export class AdminFactory {

    public static create(createAdminDTO: CreateAdminCommand): Admin {
        // const id = randomUUID();
        const password = Math.random().toString(36).slice(-8);
        const role = new AdminRole(AdminRoleEnum.ADMIN);
        const admin = new Admin({ ...createAdminDTO, password, role});
        return admin;
    }

}