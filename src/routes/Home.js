import React from "react";

import "../assets/scss/Home.scss";

export default function Home() {
    return (
        <>
            <section className="about_me">
                <h1>Chris' Considerable Center</h1>

                <p>
                    I'm Chris, a junior front-end web developer and Javascript
                    enthusiast.
                </p>

                <ul>
                    <h2>Strenghts:</h2>

                    <li>Front-end</li>
                    <li>High interest and motivation for coding</li>
                    <li>Teamwork</li>
                    <li>Strong English</li>
                    <li>Caffeine</li>
                </ul>

                <ul>
                    <h2>Weaknesses:</h2>

                    <li>Low back-end experience</li>
                    <li>PHP</li>
                    <li>Lack of caffeine</li>
                </ul>
            </section>

            <section className="experiences">
                <h1>Experiences</h1>

                <ul>
                    <h2>Frameworks I have used and am comfortable with:</h2>

                    <li>React</li>
                    <li>SvelteKit</li>
                </ul>

                <ul>
                    <h2>Other experiences:</h2>

                    <li>HTML</li>
                    <li>
                        CSS and:
                        <ul>
                            <li>SASS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </li>
                    <li>
                        Javascript and:
                        <ul>
                            <li>Node.js</li>
                            <li>Prisma</li>
                            <li>PM2</li>
                        </ul>
                    </li>

                    <li>
                        Databases:
                        <ul>
                            <li>MongoDB</li>
                            <li>Microsoft SQL Server</li>
                        </ul>
                    </li>

                    <li>Python</li>
                    <li>PHP</li>
                    <li>Wordpress</li>
                    <li>Git ( basic experience: commit, push, pull )</li>
                    <li>NGINX</li>
                    <li>Apache</li>
                    <li>Linux</li>
                </ul>
            </section>

            <section className="life_plans">
                <h1>Future plans</h1>

                <ul>
                    <li>
                        Continue to improve Javascript knowledge daily until
                        something else catches my eye.
                    </li>
                    <li>Improve back-end knowledge.</li>
                    <li>Finish all web app ideas that I've come up with.</li>
                    <li>Look into C++ ( or Carbon )</li>
                    <li>Potentially transition into game development.</li>
                </ul>
            </section>

            <section className="life_adventure">
                <h1>Life adventures</h1>

                <ul>
                    <h2>2022</h2>

                    <li>
                        Spent my summer working on side projects and smaller
                        ideas for Javascript knowledge improvement.
                    </li>
                    <li>Graduated from Voco.</li>
                    <li>
                        Internship at{" "}
                        <a
                            href="https://diarainfra.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Diara Infra OÜ
                        </a>
                        . Re-made an old internal job viewing system from PHP to
                        Javascript (SvelteKit) for an organisation. Experienced
                        SQL, SvelteKit, NPM, Linux and Git.
                    </li>
                </ul>

                <ul>
                    <h2>2021</h2>

                    <li>
                        Was in a non-client working practice for{" "}
                        <a
                            href="https://www.adm.ee/"
                            target="_blank"
                            without
                            rel="noreferrer"
                        >
                            ADM Interactive
                        </a>
                        . Objective was to re-create a page from a Photoshop
                        sample. Following tools were used: Webpack, SASS, NPM,
                        Javascript and Wordpress. I learned about Wordpress
                        using Wordpress themes to make a customized page and
                        gained plenty of knowledge about Webpack and Javascript.
                    </li>
                    <li>
                        Studied new things in school: React, APIs, CMS,
                        Wordpress, NPM usage.
                    </li>
                </ul>

                <ul>
                    <h2>2020</h2>

                    <li>
                        Estonian Hackathon "9h enterprise" second place.
                        Mission: Come up with a organisation from 2 random
                        words.
                    </li>
                    <li>
                        Learning the basics of HTML, CSS and Javascript.
                        Enrollment in Voco, formerly Tartu Kutsehariduskeskus.
                        Studied the following: MySQL, Javascript, HTML, CSS,
                        PHP, Python.
                    </li>
                </ul>

                <ul>
                    <h2>2012</h2>

                    <li>
                        Tinkering with LUA scripting, tested and implemented a
                        couple of add-on mods for a server in the game Garry's
                        mod.
                    </li>
                </ul>
            </section>
        </>
    );
}
