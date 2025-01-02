import React, {useState} from "react";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import {login} from "../services/userService";

const LoginPage = () => {
    const [credentials, setCredentials] = useState({email: '', password: ''});
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            await login(credentials)
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <InputField
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
            <InputField
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
            <SubmitButton label="Login" onClick={handleLogin} />
            {error && <p>{error}</p>}
        </div>
    );
};

export default LoginPage;