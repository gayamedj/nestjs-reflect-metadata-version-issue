import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, Index, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { passwordHash } from "@infrastructure/helpers/PasswordHash";

@Entity("admins")
export class AdminEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    firstname!: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    lastname!: string;

    @Index()
    @Column()
    @IsEmail()
    email!: string;

    @Column()
    @IsString()
    @IsNotEmpty()
    phone!: string;

    @Column({ select: false })
    @IsString()
    @IsNotEmpty()
    password!: string;

    @Column("simple-enum", { enum: ["ADMIN", "ADMIN_SUPER"] })
    @IsNotEmpty()
    role!: string[];

    @Column({ nullable: true })
    @IsString()
    picture!: string;

    @CreateDateColumn()
    created!: Date;

    @UpdateDateColumn()
    updated!: Date;

    @DeleteDateColumn()
    deletedAt?: Date;

    @BeforeInsert()
    async setPassword(): Promise<void> {
        this.password = await passwordHash(this.password);
    }
}