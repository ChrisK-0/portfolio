import {
    Routes,
    Route,
    // , Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Projects from "./routes/Projects";

import "./assets/scss/App.scss";

export default function App() {
    return (
        <>
            <Navbar />
            <div id="container">
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route
                        exact
                        path="/projects"
                        element={<Projects />}
                    ></Route>
                    {/* Disabled for Github pages */}
                    {/* <Route exact path="*" element={<Navigate replace to="/home" />} /> */}
                </Routes>
            </div>
        </>
    );
}
