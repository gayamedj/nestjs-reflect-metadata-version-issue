import { Admin } from "@domain/admin/Admin";

export abstract class IAdminRepository {
    abstract findAll(): Promise<Admin[]>;

    abstract findAllDeleted(): Promise<Admin[]>;

    abstract findOne(id: number): Promise<Admin | undefined>;

    abstract findOneByEmail(email: string): Promise<Admin | undefined>;

    abstract findOneByEmailWithPassword(email: string): Promise<Admin | undefined>;

    abstract save(admin: Admin): Promise<Admin>;

    abstract update(id: number, updates: any): Promise<Admin | undefined>;

    abstract delete(id: number): Promise<Admin | undefined>;

    abstract restore(id: number): Promise<Admin | undefined>;
}