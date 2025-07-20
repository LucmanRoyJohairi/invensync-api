export interface User {
    id: string;
    store_id: string;
    email: string;
    name: string;
    password_hash: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateUserDTO {
    store_id: string;
    email: string;
    name: string;
    password_hash: string;
    role?: string;
}