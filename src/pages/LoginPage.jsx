import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Buttons/Button";
import {login} from "../services/userService";
import ErrorMessage from "../components/ErrorMessage";
import FormContainer from "../components/FormContainer";

const LoginPage = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: '', password: ''});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true)
        setError("")
        try {
            await login(credentials)
            navigate("/files")
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false)
    };

    return (
        <FormContainer>
            <h2 className="uppercase">Log in to your account</h2>
            <hr className="w-3/4 border-0.5"/>
            <InputField
                id="email"
                type="email"
                placeholder="E-Mail"
                label="E-Mail Address"
                value={credentials.email}
                onChange={(e) => setCredentials({...credentials, email: e.target.value})}
            />
            <InputField
                id="password"
                type="password"
                placeholder="Password"
                label="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
            />
            <Button label="Login" onClick={handleLogin} isLoading={isLoading}/>
            <button className="underline"
                    onClick={() => navigate("/register")}>
                Don't have an account? Sign up
            </button>
            {error && <ErrorMessage message={error} />}
        </FormContainer>
    );
};

export default LoginPage;