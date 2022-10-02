import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Title from './Title';
import Expertise from './Expertise';
import Projects from './Projects';
import Footer from './Footer';

function HomePage() {
    return (
        <>
            <Title />
            <Expertise />
            <Projects isPreview />
            <Footer />
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Outlet />}>
                    <Route index element={<HomePage />} />
                    <Route path='projects' element={<Projects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;