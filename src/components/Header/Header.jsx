'use client'
import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { navItems } from '../../data'
import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, SquareX } from 'lucide-react'
import logo from '../../default-monochrome-white.svg'
import logoBlack from '../../default-monochrome-black.svg'
const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [theme , setTheme] = useState(
        localStorage.getItem("theme") ?? "dark"
    );
    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            document.querySelector("header .logo img").src = logoBlack
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            document.querySelector("header .logo img").src = logo
        }
    }, [theme]);
    console.log(logo)
    return (
        <header className='container' data-aos="fade-up">
            
            <div className="logo">
                <Link to='/'>
                    <img src= {logo}
                        alt='Logo' 
                        width={150}
                        height={70}
                        />
                </Link>
                
            </div>
            <nav>
                <ul>
                    {
                        navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.link}>
                                    {item.icon}
                                    <span>
                                    {item.name}
                                    </span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div className='theme'>
            <button
                onClick={() => {
                    localStorage.setItem(
                        "theme",
                        theme === "dark" ? "light" : "dark"
                    );
                    setTheme(localStorage.getItem("theme"));
                }}
            >
                {theme === "dark" ? (
                    <Moon size={20} color="#374fff" strokeWidth={3} />
                ) : (
                    <Sun size={20} color="#FBD94F" strokeWidth={3} />
                )}
            </button>
            <button className="show" onClick={() => {
                setMobileMenu(true);
            }}>
                <Menu />
            </button>
            </div>
            {
                mobileMenu &&
                <div className="fixed">
                    <ul>
                    <div className="close" onClick={() => {
                            setMobileMenu(false)
                        }}>
                            <SquareX size={36} strokeWidth={2.25} />
                        </div>
                    {
                        navItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.link}>
                                    {item.icon}
                                    <span>
                                    {item.name}
                                    </span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
                </div>
            }
        </header>
    )
}

export default Header
