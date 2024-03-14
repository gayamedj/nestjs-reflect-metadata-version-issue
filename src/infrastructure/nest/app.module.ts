import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminModule } from '@infrastructure/nest/admin/admin.module';
import EnvValidationSchema from '@infrastructure/nest/config/env-schema';

@Module({
    imports: [
        AdminModule,
        ConfigModule.forRoot({ validationSchema: EnvValidationSchema }),
        TypeOrmModule.forRoot({
            type: "mysql",
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            database: process.env.DATABASE_NAME,
            password: process.env.DATABASE_PASSWORD,
            autoLoadEntities: true,
            synchronize: process.env.NODE_ENV === 'development',
        }),
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }