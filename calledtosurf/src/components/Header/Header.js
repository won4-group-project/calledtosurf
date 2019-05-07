import React, { Component } from "react";
import "../Global/Global.css";
import Twitter from "../../assets/Icons/twitter.png";
import Pinterest from "../../assets/Icons/pinterest.png";
import Instagram from "../../assets/Icons/instagram.png";
import Logo from "../../assets/Icons/CTS Logo.png";
import Search from "../../assets/Icons/search_glass.png";
import SignIn from "../../assets/Icons/avatar.png";
import Shopping from "../../assets/Icons/bag.png";
import Nav from "../Nav/Nav";
import "../Header/Header.css";
import Facebook from "../../assets/Icons/fb.png";
// import { fbind } from "q";
class Header extends Component {
  render() {
    return (
      <div>
        <div id="deal_var" className="flex-ctr-row black_b_white_txt">
          Free shipping for US orders over <span className="deal">$75</span>
        </div>
        <div className="toolbar">
          <div className="page-width">
            <div className="toolbar_content">
              <div id="social_nav" className="social_nav">
                <ul className="inline-list toolbar_social">
                  <li>
                    <a
                      href="https://www.facebook.com/calledtosurf"
                      title="Called to Surf on Facebook"
                    >
                      <img
                        alt="facebook"
                        src={Facebook}
                        className="social_icon"
                      />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://twitter.com/calledtosurf"
                      title="Called to Surf on Twitter"
                    >
                      <img src={Twitter} className="social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.pinterest.com/calledtosurf"
                      title="Called to Surf on Pinterest"
                    >
                      <img src={Pinterest} className="social_icon" />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/calledtosurf"
                      title="Called to Surf on Instagram"
                    >
                      <img src={Instagram} className="social_icon" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-sticky-wrapper">
          <div id="header-wrapper">
            <div className="site-header-sticky">
              <header className="site-header">
                <div className="page-width">
                  <div className="header-layout header-layout-center">
                    <div className="header-item header-item--left header-item-navigation">
                      <div className="site-nav small-hide">
                        <a
                          href=""
                          className="site-nav_link site-nav_link-icon js-search-header js-no-transition"
                        >
                          <img src={Search} className="icon-search icon" />
                        </a>
                      </div>
                    </div>

                    <div className="header-item header-item-logo">
                      <div className="h1 site-header_logo">
                        <a href="" className="site-header_logo-link">
                          <img src={Logo} />
                        </a>
                      </div>
                    </div>
                    <div className="header-item header-item-icons">
                      <div className="site-nav">
                        <div className="site-nav-icons">
                          <a
                            href="/login"
                            className="site-nav_link site-nav_link-icon"
                          >
                            <img src={SignIn} className="icon icon-user" />
                          </a>
                          <a
                            href=""
                            className="site-nav_link site-nav_link-icon "
                          >
                            <img src={Shopping} className="cart-link" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <ul className="site-nav site-navigation small--hide">
                      <li className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu">
                        <a
                          href="/clothing"
                          class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
                        >
                          Clothing
                        </a>
                      </li>
                      <li className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu">
                        <a
                          href="/shoes"
                          class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
                        >
                          Shoes
                        </a>
                      </li>
                      <li className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu">
                        <a
                          href="/accessories"
                          class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
                        >
                          Accessories
                        </a>
                      </li>
                      <li className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu">
                        <a
                          href=""
                          class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
                        >
                          Kids + Baby
                        </a>
                      </li>
                      <li className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu">
                        <a
                          href=""
                          class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
                        >
                          Wedding
                        </a>
                      </li>
                      <li className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu">
                        <a
                          href=""
                          class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
                        >
                          Home
                        </a>
                      </li>
                      <li className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu">
                        <a
                          href=""
                          class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
                        >
                          Beauty
                        </a>
                      </li>
                      <li className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu">
                        <a
                          href=""
                          class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
                        >
                          Sale
                        </a>
                      </li>
                      <li className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu">
                        <a
                          href=""
                          class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
                        >
                          Gifts
                        </a>
                      </li>
                      <li className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu">
                        <a
                          href=""
                          class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
                        >
                          Gifts Cards
                        </a>
                      </li>
                      <li className="site-nav__item site-nav__expanded-item site-nav--has-dropdown site-nav--is-megamenu">
                        <a
                          href=""
                          class="site-nav__link site-nav__link--underline site-nav__link--has-dropdown"
                        >
                          Bucket List
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
