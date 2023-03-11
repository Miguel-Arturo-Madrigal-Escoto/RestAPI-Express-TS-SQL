
export interface UpdateUserBody {
    nombre?: string;
    email?:  string;
    password?: string;
    role?: string;
    img?: string;
    google?: boolean;
    estado?: boolean;
}

export interface UpdateUserParams {
    id: string;
}