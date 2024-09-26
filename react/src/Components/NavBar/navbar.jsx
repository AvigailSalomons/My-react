import React from 'react';
import './navbar.css';
import persons from './../../images/persons.png';
import gallry from './../../images/interface_13492152.png';
import location from './../../images/location_535239.png';
import contact from './../../images/contact-mail_3095583.png';
import calendar from './../../images/calendar_2693507.png';




function NavBar() { 
    return (
        <div>
            <nav id="mainNav" className="hidden-xs navbar-default navbar-fixed-top opacity-full escm-observing">
                <div className="site_container">
                  
                    <div id="top-menu">
                        <ul className="navPages nav navbar-nav">
                            <li className="moduleMenu" data-menu-module-id="65083ab45ac91">
                                <a className="page-scroll" href="#section-65083ab45ac91">
                                    <span className="txt-container"> מה בסביבה</span>
                                    <img src={persons}   className="image-icone" />
                                </a>
                            </li>
                             
                            <li id="centerLogo19">
                                <a href="javascript:void(0);" className="s123-site-logo navbar-brand s123-w-l-s page-scroll">
                                    <span className="txt-container">מיקום</span>
                                    <img src={location}   className="image-icone" />
                                </a>
                            </li>
                            <li className="moduleMenu" data-menu-module-id="65083ab45ac91">
                                <a className="page-scroll" href="#section-65083ab45ac91">
                                    <span className="txt-container"> לבדיקת זמינות</span>
                                    <img src={calendar}   className="image-icone" />
                                </a>
                            </li>
                            <li className="moduleMenu" data-menu-module-id="64f0607fe361d">
                                <a className="page-scroll" href="#section-64f0607fe361d">
                                    <span className="txt-container">גלריה</span>
                                 <img src={gallry}   className="image-icone" />
                                </a>
                            </li>
                            <li id="centerLogo19">
                                <a href="javascript:void(0);" className="s123-site-logo navbar-brand s123-w-l-s page-scroll">
                                    <span className="txt-container">להזמנה ויצירת קשר</span>
                                    <img src={contact}   className="image-icone" />
                                </a>
                            </li>
                          
                        </ul>
                        <ul className="navActions nav navbar-nav">
                        </ul>
                    </div>
                    <div className="navbar-header">
                            <span className="website-name">אחוזת היהלום שבחושן</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
