import React from 'react';

function Title() {
    return (
        <section id="title">
            {/* Nav Bar  */}
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#title">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#expertise">Expertise</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="mailto:viralrupani12017@gmail.com">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Heading */}
            <div className="container">
                <div className="row heading">
                    <div className="col-12 col-md-6 center-image">
                        <img className="developer-image" src="https://media.giphy.com/media/zhYSVCirREeIZtONCI/giphy.gif" />
                    </div>
                    <div className="col-12 col-md-6 title-text">
                        <h1>Hello,</h1>
                            <h3>I am <span className="typed"> </span></h3>
                            {/* <h5>Pursuing B.tech 2nd Year from Gujarat, India.</h5> */}
                            <h5>Presently working on my DSA skills.</h5>
                            <div className="hire-resume-button">
                                <button className="btn btn-outline-dark" onclick="window.open('static/images/Viral_Rupani_Resume.pdf')">📄Resume</button>
                                <a href="mailto:viralrupani12017@gmail.com"><button className="btn btn-dark mx-2">🧑‍💻Hire me</button></a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Title;