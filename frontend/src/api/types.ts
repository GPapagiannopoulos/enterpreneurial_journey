export interface newUserPayload {
    firstName: string;
    lastName: string;
    email : string;
    dateOfBirth: string; //ISO format
}

export interface loginCredentials {
    email: string;
    password: string;
}