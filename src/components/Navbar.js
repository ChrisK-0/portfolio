import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

import brandLogo from "../assets/imgs/ccc_logo.webp";
import "../assets/scss/Navbar.scss";

export default function Navbar() {
    const [navOpen, setNavOpen] = React.useState(false);
    const spanNotifier = useRef();

    const navToggle = () => {
        setNavOpen((prevState) => !prevState);
        spanNotifier.current.style.display = "none";
    };

    return (
        <>
            <span id="span_notifier" ref={spanNotifier}>
                Click the logo!
            </span>
            <nav className={navOpen ? "nav-open" : null}>
                <div className="nav_brand" to="/home">
                    <img
                        id="brand"
                        src={brandLogo}
                        alt="CCC Logo"
                        width="90"
                        height="90"
                        onClick={navToggle}
                        style={
                            navOpen
                                ? { transform: "rotate(180deg)" }
                                : { transform: "rotate(0deg)" }
                        }
                    />
                </div>

                <div
                    className={
                        navOpen ? "nav_links nav_links-active" : "nav_links"
                    }
                >
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                style={{
                                    pointerEvents: navOpen ? "" : "none",
                                }}
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : undefined
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                style={{
                                    pointerEvents: navOpen ? "" : "none",
                                }}
                                className={({ isActive }) =>
                                    isActive ? "nav-active" : undefined
                                }
                            >
                                Projects/Works
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}
