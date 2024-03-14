import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminEntity } from "./entities/admin.entity";
import { IAdminRepository } from "@domain/admin/contracts/IAdminRepository";
import { AdminRepository } from "@infrastructure/persistence/typeorm/repositories/admin.repository";

const providers = [{
    provide: IAdminRepository,
    useClass: AdminRepository
}];

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity])],
    providers: providers,
    exports: providers
})
export class OrmPersistenceModule { }