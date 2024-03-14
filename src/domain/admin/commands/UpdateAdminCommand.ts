import { PartialType } from "@nestjs/mapped-types";
import { CreateAdminCommand } from "@domain/admin/commands/CreateAdminCommand";

export class UpdateAdminCommand extends PartialType(CreateAdminCommand) {}