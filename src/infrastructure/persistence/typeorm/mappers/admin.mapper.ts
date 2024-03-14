import { Admin } from "../../../../domain/admin/Admin";
import { AdminRole, ADMIN_ROLES, AdminRoleEnum } from "@domain/admin/valueobjects/AdminRole";

import { AdminEntity } from "../entities/admin.entity";

export class AdminMapper {

    static toDomain(admin: AdminEntity): Admin {
        return new Admin({
            id: admin.id,
            firstname: admin.firstname,
            lastname: admin.lastname,
            email: admin.email,
            phone: admin.phone,
            password: admin.password,
            role: new AdminRole(AdminRoleEnum.ADMIN),
        }) as Admin;
    }

    static toPersistence(admin: Admin): AdminEntity {
        const entity = new AdminEntity();
        entity.id = admin.id;
        entity.firstname = admin.firstname;
        entity.lastname = admin.lastname;
        entity.email = admin.email;
        entity.phone = admin.phone;
        entity.password = admin.password;
        entity.role = [admin.role.value];
        return entity;
    }

}