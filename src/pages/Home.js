import React from 'react';
import '../styles/home-styles.css';
import Logo from '../images/p-design-whitecircle-background.jpg';
import Art from '../images/abstract-paint.jpg';


const Home = () => (
    <body>
        <main>
            {/* <!--Introduction about the project--> */}
                <div class="container_home">
                    <div id="p-logo-id">
                        <img src={Logo} alt="Polygnosis logo"/>
                        <h1>olygnosis</h1>
                    </div>
                    <h2>Modern medical diagnostics.</h2>
                </div>
                <div class="introductory-statement">
                    {/* public\images\p-design-whitecircle-background.jpg */}
                    <img src={Art} alt="Group of Coders"/>
                    <p>We are a small team of developers looking to advance and decentralize medical diagnosis <i>accurately</i>, <i>effectively</i>, and <i>safely</i> to the people without access to doctors.</p>
                </div>
        </main>

        <section class="container_home">

            {/* <!-- in the sources container show three cards, side by side, or one atop the other on smaller viewports --> */}
            <div class="container__sources">

                <div class="sources--cms">
                <h3>Security</h3>
                <p>IPFS, Smart Contracts, and Cryptocurrency</p>
                </div>

                <div class="sources--markdown">
                <h3>Artificial Intelligence</h3>
                <p>Competitions and Developer Incentives</p>
                </div>

                <div class="sources--data">
                <h3>Data</h3>
                <p>IPFS, Databases, Kaggle, etc.</p>
                </div>
            </div>

            {/* <!-- include a simple line to divide the container, and animate it to show a connection between the different containers  --> */}
            <svg viewbox="0 0 10 100">
                <line x1="5" x2="5" y1="0" y2="100"/>
            </svg>


            {/* <!-- in the build container show two cards, atop of one another and the first of one showing an SVG icon --> */}
            <div class="container__build">

                <div class="build--powered">
                <svg viewbox="0 0 100 100">
                    <circle cx="40" cy="40" r="40"/>
                </svg>
                <p>powered by</p>
                <h3>Polygnosis</h3>
                </div>

                <div class="build--stack">
                    HTML · CSS · React
                </div>
            </div>

            {/* <!-- repeat the svg line to connect the second and third containers as well --> */}
            <svg viewbox="0 0 10 100">
                <line x1="5" x2="5" y1="0" y2="100"/>
            </svg>

            {/* <!-- in the deploy container show simply text, without a wrapping card --> */}
            <div class="container__deploy">
                <h3>Interactive pages</h3>
                <p>Deployed Components: IPFS, Algorand, Github, Firebase</p>
            </div>

        </section>

    </body>

);

export default Home;