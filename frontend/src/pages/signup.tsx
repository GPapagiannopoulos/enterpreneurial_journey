import { registerNewUser } from "../api/auth";
import type { newUserPayload } from "../api/types";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [dob, setDOB] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [conf_password, setConfPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const RegisterUser = async (e: React.SubmitEvent) => {
        e.preventDefault();
        setError(null);
        
        if (password.length <= 8 ) {
            setError('Password must be at least 8 characters long!')
            return;
        }
        if (password !== conf_password) {
            setError('Passwords do not match!')
            return;
        }
        
        const newUserData : newUserPayload = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            dob: dob
        }

        try {
            await registerNewUser(newUserData); 
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        }
    };

    return (
        <main className="registration-container">
            <h2>Account Registration</h2>
            <form onSubmit={RegisterUser}>
            <InputField
            label="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required={true}
            />
            <InputField
            label="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required={true}
            />
            <InputField
            label="Date of Birth"
            type="date"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            required={true}
            />
            <InputField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            />
            <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            />
            <InputField
            label="Confirm Password"
            type="password"
            value={conf_password}
            onChange={(e) => setConfPassword(e.target.value)}
            required={true}
            />
            {error && <div className='error-name'>{error}</div>}
            <Button label="Sign-Up" onClick = { () => {}} variant='primary' />
            <Button label="Log In" onClick = { () => navigate('/login')} variant='primary'/>
            </form>
        </main>
    );
}