export const ADMIN_ROLES = {
    ADMIN: 'ADMIN',
    SUPER_ADMIN: 'SUPER_ADMIN'
} as const;

export enum AdminRoleEnum {
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN'
}

export class AdminRole {
    constructor(readonly value: AdminRoleEnum) {}
    
    equals(role: AdminRole): boolean {
        return this.value === role.value;
    }
}