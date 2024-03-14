export type IUser = {
    id?: number;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    password: string;
};

export abstract class User {
    constructor(
        public id: number,
        public firstname: string,
        public lastname: string,
        public email: string,
        public phone: string,
        public password: string
    ) { }
}