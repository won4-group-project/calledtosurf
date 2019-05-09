import React, { Component } from "react";
import "../Footer/footer.css";
import email from "../../assets/Icons/email.png";
import Twitter from "../../assets/Icons/twitter.png";
import Pinterest from "../../assets/Icons/pinterest.png";
import Instagram from "../../assets/Icons/instagram.png";
import Facebook from "../../assets/Icons/fb.png";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footer-section">
        <footer className="site-footer">
          <div className="page-width">
            <div className="grid">
              <div className="grid__item footer__item--1494301487049">
                <div>
                  <div className="collapsible-content__inner">
                    <div className="footer__collapsible footer_collapsible--disabled">
                      <ul className="no-bullets site-footer__linklist">
                        <li>
                          <a href="">Customer Service</a>
                        </li>
                        <li>
                          <a href=""> Returns</a>
                        </li>
                        <li>
                          <a href="">Contact Us</a>
                        </li>
                        <li>
                          <a href="">Shipping Information</a>
                        </li>
                        <li>
                          <a href="">Track Your Order</a>
                        </li>
                        <li>
                          <a href="">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="">Terms of Service</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid__item footer__item--1494292487693">
                <div className="footer__item-padding">
                  <p className="h4 footer__title small--hide">
                    Sign up and save
                  </p>
                  <div className="collapsible-content collapsible-content--small">
                    <div className="collapsible-content__inner">
                      <div className="footer__collapsible">
                        <p>
                          Subscribe to get special offers, free giveaways, and
                          once-in-a-lifetime deals.
                        </p>
                        <form
                          method="post"
                          action=""
                          acceptCharset="UTF-8"
                          className="contact-form"
                        >
                          <div className="footer__newsletter">
                            {/* <label for="Email" className="hidden-label">
                              {" "}
                              // Enter your email
                            </label> */}
                            <input
                              type="email"
                              // value
                              placeholder="Enter your email"
                              name="contact[email]"
                              id="Email"
                              className="footer__newsletter-input"
                              autoCorrect="off"
                              autoCapitalize="off"
                            />
                            <button
                              type="submit"
                              className="footer__newsletter-btn"
                              name="commit"
                            >
                              <i class="far fa-envelope" />
                            </button>
                          </div>
                        </form>
                        <ul className="no-bullets footer__social">
                          <li>
                            <a href="" title="Called to surf on Facebook">
                              <img alt="faceboob" src={Facebook} />
                            </a>
                          </li>

                          <li>
                            <a href="" title="Called to surf on Twitter">
                              <img alt="twitter" src={Twitter} />
                            </a>
                          </li>
                          <li>
                            <a href="" title="Called to surf on Pinterest">
                              <img alt="pinterest" src={Pinterest} />
                            </a>
                          </li>

                          <li>
                            <a href="" title="Called to surf on Instagram">
                              <img alt="instagram" src={Instagram} />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer__clear small--hide" />
              </div>
              <div className="grid__item footer__item--1494301487048" />
            </div>
            <p className="footer_powered_by">
              <a href="">Powered by Shopify</a>
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
