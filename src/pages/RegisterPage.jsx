import React, {useState} from "react";
import {register} from "../services/userService";
import InputField from "../components/InputField";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";
import {useNavigate} from "react-router-dom";
import FormContainer from "../components/FormContainer";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [registrationCode, setRegistrationCode] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("");

    const handleRegister = async () => {
        setError("");
        try {
            if (password !== confirmPassword) {
                setError("Passwords don't match")
                return;
            }
            setError("");
            await register(registrationCode, {firstName, lastName, email, password});
            navigate('/files');
        } catch (err) {
            setError(err.message);
        }
    };

//TODO: Input validation.
    return (
        <FormContainer>
            <h2 className="uppercase">Register</h2>
            <hr className="border-0.5 w-3/4"/>
            <InputField
                id="registrationcode"
                type="text"
                placeholder="Registration code"
                label="Registration code"
                value={registrationCode}
                onChange={(e) => setRegistrationCode(e.target.value)}
            />
            <InputField
                id="firstname"
                type="text"
                placeholder="First name"
                label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
                id="lastname"
                type="text"
                placeholder="Last name"
                label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <InputField
                id="email"
                type="email"
                placeholder="Email"
                label="E-Mail Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                id="password"
                type="password"
                placeholder="Password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
                id="confirmpassword"
                type="password"
                placeholder="Confirm password"
                label="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <SubmitButton label="Register" onClick={handleRegister}/>

            <button className="underline"
                    onClick={() => navigate("/login")}>
                Have an account? Log in
            </button>

            <ErrorMessage message={error}/>

        </FormContainer>
    );

};

export default RegisterPage