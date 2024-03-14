export class CreateAdminDto {
    constructor(
        public readonly firstname: string,
        public readonly lastname: string,
        public readonly email: string,
        public readonly phone: string,
        public readonly password: string,
        public readonly role: 'ADMIN' | 'SUPER_ADMIN'
    ) { }
}