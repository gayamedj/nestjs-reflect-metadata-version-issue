import { User, IUser } from "@domain/common/User";
import { AdminRole } from "@domain/admin/valueobjects/AdminRole";

export type IAdmin = IUser & {
    role: AdminRole;
    picture?: string;
};

export class Admin extends User {
    public role: AdminRole;
    public picture?: string;

    constructor(props: IAdmin) {
        super(props.id, props.firstname, props.lastname, props.email, props.phone, props.password);
        this.role = props.role;
        this.picture = props.picture;
    }
}