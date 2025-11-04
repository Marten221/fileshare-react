import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './index.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import IndexPage from "./pages/Index";
import FilesPage from "./pages/FilesPage";
import UploadPage from "./pages/UploadPage";
import ViewFilePage from "./pages/ViewFilePage";
import DemoWrapper from "./pages/DemoWrapper";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<IndexPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/login/demo" element={<DemoWrapper/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/files" element={<FilesPage/>}/>
                <Route path="/upload" element={<UploadPage/>}/>
                <Route path="/file/:fileId" element={<ViewFilePage/>}/>
            </Routes>
        </Router>
    );
}

export default App;