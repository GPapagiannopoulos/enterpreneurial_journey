export interface newUserPayload {
  firstName: string;
  lastName: string;
  email: string;
  dob: string; //ISO format
}

export interface loginCredentials {
  email: string;
  password: string;
}

export interface ProjectDetails {
  id: string;
  name: string;
  location: string;
  imageUrl: string;
  targetAmount: number;
  raisedAmount: number;
  expectedReturnPercentage: number;
}
