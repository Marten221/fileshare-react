import React, {useState} from "react";
import {register} from "../services/userService";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");

    const handleRegister = async () => {
        try {
            if (password !== confirmPassword) {
                setError("Passwords don't match")
                return;
            }
            setError("");
            await register({firstName, lastName, email, password});
            navigate('/files');
        } catch (err) {
            setError(err.message);
        }
    };


    return (
        <div className="auth-container">
            <h2>Register</h2>
            <InputField
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <InputField
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <SubmitButton label="Login" onClick={handleRegister} />

            <ErrorMessage message={error}/>

        </div>
    )

};

export default RegisterPage