import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import IndexPage from "./pages/Index";
import FilesPage from "./pages/FilesPage";
import UploadPage from "./pages/UploadPage";
import ViewFilePage from "./pages/ViewFilePage";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<IndexPage/>}></Route>
                    <Route path="/login" element={<LoginPage/>}></Route>
                    <Route path="/register" element={<RegisterPage/>}></Route>
                    <Route path="/files" element={<FilesPage/>}></Route>
                    {/*TODO: add protection to route */}
                    <Route path="/upload" element={<UploadPage/>}></Route>
                    <Route path="/file/:fileId" element={<ViewFilePage/>}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;