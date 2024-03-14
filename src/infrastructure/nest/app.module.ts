import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from '@infrastructure/nest/admin/admin.module';

@Module({
    imports: [
        AdminModule,
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db/sql',
            synchronize: true,
            autoLoadEntities: true,
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }