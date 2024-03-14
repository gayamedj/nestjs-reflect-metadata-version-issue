/**
 * Repository class for managing Admin entities in the database.
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { Admin } from '@domain/admin/Admin';
import { IAdminRepository } from '@domain/admin/contracts/IAdminRepository';
import { AdminEntity } from '@infrastructure/persistence/typeorm/entities/admin.entity';
import { AdminMapper } from '@infrastructure/persistence/typeorm/mappers/admin.mapper';

const IS_NOT_NULL = Not(IsNull());

const IS_DELETED_ONLY = {
    withDeleted: true,
    where: { deletedAt: IS_NOT_NULL }
};

@Injectable()
export class AdminRepository implements IAdminRepository {
    constructor(
        @InjectRepository(AdminEntity)
        private readonly OrmAdminRepository: Repository<AdminEntity>
    ) { }

    async save(admin: Admin): Promise<Admin> {
        const adminEntity = AdminMapper.toPersistence(admin);
        const createdAdmin = await this.OrmAdminRepository.save(adminEntity);
        return AdminMapper.toDomain(createdAdmin);
    }

    async findAll(): Promise<Admin[]> {
        const adminEntities = await this.OrmAdminRepository.find();
        return adminEntities.map(AdminMapper.toDomain);
    }

    async findAllDeleted(): Promise<Admin[]> {
        const adminEntities = await this.OrmAdminRepository.find(IS_DELETED_ONLY);
        return adminEntities.map(AdminMapper.toDomain);
    }

    async findOne(id: number): Promise<Admin | undefined> {
        const adminEntity = await this.OrmAdminRepository.findOne({ where: { id } });
        if (!adminEntity) return undefined;
        return AdminMapper.toDomain(adminEntity);
    }

    async findOneDeleted(id: number): Promise<Admin | undefined> {
        const adminEntity = await this.OrmAdminRepository.findOne(IS_DELETED_ONLY);
        if (!adminEntity) return undefined;
        return AdminMapper.toDomain(adminEntity);
    }

    async findOneByEmail(email: string): Promise<Admin | undefined> {
        const adminEntity = await this.OrmAdminRepository.findOne({ where: { email } });
        if (!adminEntity) return undefined;
        return AdminMapper.toDomain(adminEntity);
    }

    async findOneByEmailWithPassword(email: string): Promise<Admin | undefined> {
        const adminEntity = await this.OrmAdminRepository
            .createQueryBuilder('admin')
            .addSelect('admin.password')
            .where('admin.email = :email', { email })
            .getOne();
        if (!adminEntity) return undefined;
        return AdminMapper.toDomain(adminEntity);
    }

    async delete(id: number): Promise<Admin | undefined> {
        const adminToDelete = await this.findOne(id);
        if (!adminToDelete) return undefined;
        await this.OrmAdminRepository.softDelete(id);
        return adminToDelete;
    }

    async hardDelete(id: number): Promise<Admin | undefined> {
        const adminToHardDelete = await this.findOneDeleted(id);
        if (!adminToHardDelete) return undefined;
        await this.OrmAdminRepository.delete(id);
        return adminToHardDelete;
    }

    async restore(id: number): Promise<Admin | undefined> {
        const adminToRestore = await this.findOneDeleted(id);
        if (!adminToRestore) return undefined;
        await this.OrmAdminRepository.restore(id);
        return adminToRestore;
    }

    async update(id: number, updates: any): Promise<Admin | undefined> {
        const updatedAdmin = await this.save({ id, ...updates });
        if (!updatedAdmin) return undefined;
        return updatedAdmin;
    }
}