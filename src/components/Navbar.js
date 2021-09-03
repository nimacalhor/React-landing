import React from 'react';
import st from './Navbar.module.css'
import Logo from '../assets/logo.jpg'

const Navbar = () => {
    return (
        <header className={st.header }>
            <div className={st.list_ontainer}>
                <ul className={st.link_lists}>
                    <li>Home page</li>
                    <li>products</li>
                    <li>about us </li>
                </ul>
            </div>

        {/*logo ===============================*/}
            <div className={st.logo}>
                <img src= { Logo } alt="logo" />
            </div>
        </header>
    );
};

export default Navbar;