import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import {login} from "../services/userService";
import ErrorMessage from "../components/ErrorMessage";

const LoginPage = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: '', password: ''});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true)
        try {
            await login(credentials)
            navigate("/files")
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false)
    };

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="min-h-[50%] max-h-[75%] h-auto w-11/12 sm:w-3/4 md:w-2/3
                            lg:w-1/2 py-5 bg-secondary flex flex-col gap-3 items-center
                            justify-center border-solid border-accent rounded">
                <h2 className="uppercase">Log in to your account</h2>
                <hr className="border-0.5 w-3/4"/>
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
                <SubmitButton label="Login" onClick={handleLogin} isLoading={isLoading}/>
                <a href="/register">Don't have an account? Sign up</a>
                {error && <ErrorMessage message={error}></ErrorMessage>}
            </div>
        </div>
    );
};

export default LoginPage;