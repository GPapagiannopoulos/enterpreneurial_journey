export interface newUserPayload {
    firstName: string;
    lastName: string;
    email : string;
    dob: string; //ISO format
}

export interface loginCredentials {
    email: string;
    password: string;
}