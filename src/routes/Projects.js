import React from "react";

import "../assets/scss/Projects.scss";
import loggerBrowser from "../assets/imgs/logger_browser.webp";
import webosImage from "../assets/imgs/WebOS.webp";

export default function Projects() {
    return (
        <>
            <section className="projects_intro">
                <h1>What will one find here?</h1>
                <p>
                    A collection of my works and projects that I've been
                    affiliated with.
                </p>
                <h2>
                    <a
                        href="https://github.com/ChrisK-0"
                        target="_blank"
                        rel="noreferrer"
                    >
                        My Github
                    </a>
                </h2>
            </section>

            <section className="projects">
                <h1>Projects</h1>
                <ul>
                    <li>
                        <h3>Internal job viewing system</h3>
                        <p>
                            Internship at{" "}
                            <a
                                href="https://diarainfra.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Diara Infra OÜ.
                            </a>
                        </p>
                        <p>
                            No image or code will be public for this due to
                            security reasons. Together with my colleague we
                            created an app for employees of the organisation.
                            Employees can view their work details, change
                            specific account details and view work costs.
                            Website also includes an admin user for managing
                            other users.
                        </p>
                        <p>
                            For front-end we used SvelteKit Javascript framework
                            with Microsoft SQL Server for database management. I
                            set up the database connection to the front-end with
                            Prisma JS and uploaded the website to my mentor's
                            linux server and hosted it with PM2.
                        </p>
                    </li>
                </ul>

                <h1>Personal Projects</h1>
                <ul>
                    <li>
                        <h3>WebOS</h3>
                        <a
                            href="https://github.com/ChrisK-0/Web_OS"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://github.com/ChrisK-0/Web_OS
                        </a>

                        <p>
                            WIP - personal project for an app where the user can
                            view, edit and run files. I don't know what the end
                            goal will be, but it will be an experience.
                        </p>
                        <img
                            id="webosImage"
                            src={webosImage}
                            alt="WebOS project"
                            width={"50%"}
                            height={"auto"}
                        />
                    </li>
                </ul>

                <h1>Smaller works</h1>
                <ul>
                    <li>
                        <h3>Colored web development logger</h3>
                        <a
                            href="https://github.com/ChrisK-0/nlogger"
                            target="_blank"
                            rel="noreferrer"
                        >
                            https://github.com/ChrisK-0/nlogger
                        </a>

                        <p>
                            A small package for debatably better development
                            experience. It uses{" "}
                            <span style={{ fontWeight: "bold" }}>
                                "console log"
                            </span>{" "}
                            for Node terminal and browser console to log
                            visually better outputs.
                        </p>
                        <img
                            id="loggerBrowser"
                            src={loggerBrowser}
                            alt="Preview of logger"
                            width={"50%"}
                            height="auto"
                        />
                    </li>

                    <li>
                        And others in progress or not yet uploaded.
                    </li>
                </ul>
            </section>
        </>
    );
}
