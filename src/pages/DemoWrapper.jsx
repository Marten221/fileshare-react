import React, {useState} from "react";
import LoginPage from "./LoginPage";
import CloseButton from "../components/Buttons/CloseButton";

const DemoWrapper = () => {
    const [showBanner, setShowBanner] = useState(true);


    return (
        <div className="relative">
            {showBanner && (
                <div className="fixed top-0 w-full bg-yellow-200 text-yellow-900 px-6 py-4 flex justify-between items-center">
                    <div className="text-center w-full font-semibold">
                        Demo Mode — Use these credentials to explore:
                        <div className="mt-1 text-sm font-normal">
                            Email: <span className="font-mono">test@test.com</span>
                            <br/>
                            Password: <span className="font-mono">Test</span>
                        </div>
                    </div>
                    <CloseButton onClick={() => setShowBanner(false)} />
                </div>
            )}

            <LoginPage />
        </div>
    );
};

export default DemoWrapper;
