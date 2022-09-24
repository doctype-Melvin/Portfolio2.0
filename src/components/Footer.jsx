import React from 'react';

function Footer() {
    return (
        <section id="footer" className="text-center">
            <a className="url-text mx-1" href="https://www.instagram.com/viral_n_rupani/" target="_blank"><i className="fa fa-instagram"
                aria-hidden="true"></i></a>
            <a className="url-text mx-1" href="https://www.facebook.com/viral.rupani.161" target="_blank"><i
                className="fa fa-facebook-square" aria-hidden="true"></i></a>
            <a className="url-text mx-1" href="https://github.com/viralRupani" target="_blank"><i
                className="fa-brands fa-github"></i></a>
            <a className="url-text mx-1" href="https://discord.gg/fuEgkt93" target="_blank"><i className="fa-brands fa-discord"></i></a>
            <p>Made by <a>Viral Rupani</a> ©️ 2022</p>
        </section>
    );
}

export default Footer;