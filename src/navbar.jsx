import React from 'react';
import './navbar.css';

function NavBar() { 
    return (
        <div>
            <nav id="mainNav" className="hidden-xs navbar-default navbar-fixed-top opacity-full escm-observing">
                <div className="site_container">
                    <div className="navbar-header">
                        <a href="#page-top" className="s123-site-logo navbar-brand s123-w-l-s page-scroll">
                            <span className="website-name website-name-preview-helper">סוויטת היהלום שבחושן</span>
                        </a>
                    </div>
                    <div id="top-menu">
                        <ul className="navPages nav navbar-nav">
                            <li className="moduleMenu" data-menu-module-id="65083ab45ac91">
                                <a className="page-scroll" href="#section-65083ab45ac91">
                                    <span className="txt-container"> מה בסביבה</span>
                                </a>
                            </li>
                            <li className="moduleMenu" data-menu-module-id="64f0607fe361d">
                                <a className="page-scroll" href="#section-64f0607fe361d">
                                    <span className="txt-container">גלריה</span>
                                </a>
                            </li>
                            <li id="centerLogo19">
                                <a href="javascript:void(0);" className="s123-site-logo navbar-brand s123-w-l-s page-scroll">
                                    צפון נעמי<span className="website-name website-name-preview-helper">ליצירת קשר</span>
                                </a>
                            </li>
                            <li className="moduleMenu extra-nav-more dropdown-submenu">
                                <ul className="site-dropdown-menu">
                                    <li className="moduleMenu" data-menu-module-id="6508471856e96">
                                        <a className="page-scroll" href="#section-6508471856e96">
                                            <span className="txt-container">גלריית תמונות</span>
                                        </a>
                                    </li>
                                    <li className="moduleMenu" data-menu-module-id="5b0a4ba521825">
                                        <a className="page-scroll" href="#section-5b0a4ba521825">
                                            <span className="txt-container">הזמינו עכשיו</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navActions nav navbar-nav">
                            <li className="website-languages-menu">
                                <a className="btn website-languages-menu-link"></a>
                            </li>
                            <li className="header-social-wrapper header-icon-wrapper">
                                <a data-close-location="right" className="actionButton" role="button" data-container="body" data-toggle="social_menuCallActionIcons">
                                    <i className="svg-m s123-icon-converter" alt="share-alt">&nbsp;</i>
                                </a>
                            </li>
                            <li className="header-cart-wrapper orderOpenCart" data-has-online-store="false">
                                <a className="actionButton btn-primary-action-button-4" role="button">
                                    <i className="svg-m s123-icon-converter" alt="shopping-cart">&nbsp;</i>
                                    <span className="count"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
