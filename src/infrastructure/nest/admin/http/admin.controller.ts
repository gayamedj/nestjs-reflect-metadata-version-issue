import { CreateAdminUseCase } from "@domain/admin/usecases/CreateAdminUseCase";
import { GetAdminByIdUseCase } from "@domain/admin/usecases/GetAdminByIdUseCase";
import { GetAdminsUseCase } from "@domain/admin/usecases/GetAdminsUseCase";
import { GetDeletedAdminsUseCase } from "@domain/admin/usecases/GetDeletedAdminsUseCase";
import { AdminRoleEnum } from "@domain/admin/valueobjects/AdminRole";
import { Controller, Get, Param, ParseIntPipe, NotFoundException, Post, Body, Patch, Delete } from "@nestjs/common";
import { CreateAdminDto } from "./dto/CreateAdminDto";
import { AdminLoginDto } from "./dto/AdminLoginDto";
import { AdminLoginUseCase } from "@domain/admin/usecases/AdminLoginUseCase";
import { RestoreAdminUseCase } from "@domain/admin/usecases/RestoreAdminUseCase";
import { UpdateAdminUseCase } from "@domain/admin/usecases/UpdateAdminUseCase";
import { UpdateAdminDto } from "./dto/UpdateAdminDto";
import { DeleteAdminUseCase } from "@domain/admin/usecases/DeleteAdminUseCase";

@Controller('admins')
export class AdminController {

    constructor(
        private readonly getAdminsUseCase: GetAdminsUseCase,
        private readonly getAdminByIdUseCase: GetAdminByIdUseCase,
        private readonly getDeletedAdminsUseCase: GetDeletedAdminsUseCase,
        private readonly createAdminUseCase: CreateAdminUseCase,
        private readonly adminLoginUseCase: AdminLoginUseCase,
        private readonly restoreAdminUseCase: RestoreAdminUseCase,
        private readonly updateAdminUseCase: UpdateAdminUseCase,
        private readonly deleteAdminUseCase: DeleteAdminUseCase
    ) { }

    @Get()
    // @isAdminProtected(AdminRoleEnum.SUPER_ADMIN)
    async findAll() {
        return await this.getAdminsUseCase.execute();
    }

    @Get('/deleted')
    async findAllDeleted() {
        return await this.getDeletedAdminsUseCase.execute();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const admin = await this.getAdminByIdUseCase.execute(id);
        if (!admin) throw new NotFoundException(`Admin with id #${id} does not exist`);
        return admin;
    }

    @Post()
    async create(@Body() payload: CreateAdminDto) {
        console.log(payload)
        return payload;
        // return await this.createAdminUseCase.execute(payload);
    }

    @Post('login')
    async login(@Body() adminLoginDto: AdminLoginDto) {
        return await this.adminLoginUseCase.execute(
            adminLoginDto.email,
            adminLoginDto.password
        );
    }

    @Post('deleted/:id/restore')
    async restore(@Param('id') id: number) {
        const restoredAdmin = await this.restoreAdminUseCase.execute(id);
        if(!restoredAdmin) throw new NotFoundException(`Admin #${id} does not exist or is not deleted`);
        return restoredAdmin;
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() editAdminDto: UpdateAdminDto) {
        const updatedADmin = await this.updateAdminUseCase.execute(id, editAdminDto);
        if (!updatedADmin) throw new NotFoundException(`Admin with id #${id} does not exist`);
        return updatedADmin;
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        const deletedAdmin = await this.deleteAdminUseCase.execute(id);
        if (!deletedAdmin) throw new NotFoundException(`Admin with id #${id} does not exist`);
        return deletedAdmin;
    }
}