import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    
    const handleLogin = () => navigate('/login')
    const handleSignUp = () => navigate('/signup')

    return (
        <main className="landing-container">
            <h1>Landing Page</h1>
            <div className="action-group">
                <Button label="log-in" onClick={handleLogin} variant='primary'></Button>
                <Button label="sign-up" onClick={handleSignUp} variant='secondary'></Button>
            </div>
        </main>
    );
}