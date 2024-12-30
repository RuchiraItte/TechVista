import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export const Navbar = ({ navOpen }) => {

    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    useEffect(initActiveBox, []);
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;

        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    // Default Navigation from Devs
    // {id:1, name: "Home", href: "/" },
    // {id:2, name: "About", href: "#about" },
    // {id:3, name: "Events", href: "#events" },
    // {id:4, name: "Sponsors", href: "#sponsors" },
    // {id:5, name: "FAQ", href: "#faq" },
    // {id:6, name: "Gallery", href: "#gallery" },
    const navItems = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Event',
            link: '#events',
            className: 'nav-link'
        },
        {
            label: 'Gallery',
            link: '#gallery',
            className: 'nav-link '
        },
        {
            label: 'Sponsors',
            link: '#sponsors',
            className: 'nav-link'
        },
        {
            label: 'FAQ',
            link: '#faq',
            className: 'nav-link '
        },
        
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {
                navItems.map(({ label, link, className, ref }, key) => (
                    <a href={link}
                        key={key}
                        ref={ref}
                        className={className}
                        onClick={activeCurrentLink}
                    >
                        {label}
                    </a>
                ))
            }
            <div
                className="active-box"
                ref={activeBox}
            ></div>
        </nav>
    )
};


Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
}