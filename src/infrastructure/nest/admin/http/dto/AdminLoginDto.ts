export class AdminLoginDto {
    constructor(
        public readonly email: string,
        public readonly password: string
    ) { }
}