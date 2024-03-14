import { PartialType } from "@nestjs/mapped-types";
import { CreateAdminDto } from "@infrastructure/nest/admin/http/dto/CreateAdminDto";

export class UpdateAdminDto extends PartialType(CreateAdminDto) { }