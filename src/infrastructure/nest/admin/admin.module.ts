import { Module } from '@nestjs/common';
import { AdminController } from '@infrastructure/nest/admin/http/admin.controller';
import { GetAdminsUseCase } from '@domain/admin/usecases/GetAdminsUseCase';
import { GetAdminByIdUseCase } from '@domain/admin/usecases/GetAdminByIdUseCase';
import { GetDeletedAdminsUseCase } from '@domain/admin/usecases/GetDeletedAdminsUseCase';
import { CreateAdminUseCase } from '@domain/admin/usecases/CreateAdminUseCase';
import { AdminLoginUseCase } from '@domain/admin/usecases/AdminLoginUseCase';
import { DeleteAdminUseCase } from '@domain/admin/usecases/DeleteAdminUseCase';
import { RestoreAdminUseCase } from '@domain/admin/usecases/RestoreAdminUseCase';
import { UpdateAdminUseCase } from '@domain/admin/usecases/UpdateAdminUseCase';
import { OrmPersistenceModule } from '@infrastructure/persistence/typeorm/typeorm.module';


const providers = [
  {
    provide: GetAdminsUseCase,
    useClass: GetAdminsUseCase
  },
  {
    provide: GetAdminByIdUseCase,
    useClass: GetAdminByIdUseCase
  },
  {
    provide: GetDeletedAdminsUseCase,
    useClass: GetDeletedAdminsUseCase
  },
  {
    provide: CreateAdminUseCase,
    useClass: CreateAdminUseCase
  },
  {
    provide: AdminLoginUseCase,
    useClass: AdminLoginUseCase
  },
  {
    provide: DeleteAdminUseCase,
    useClass: DeleteAdminUseCase
  },
  {
    provide: RestoreAdminUseCase,
    useClass: RestoreAdminUseCase
  },
  {
    provide: UpdateAdminUseCase,
    useClass: UpdateAdminUseCase
  },
];

@Module({
  imports: [OrmPersistenceModule],
  controllers: [AdminController],
  providers: providers,
  exports: providers
})
export class AdminModule { }