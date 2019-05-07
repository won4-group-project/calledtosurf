import React, { Component } from "react";
import "../Footer/footer.css";
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
                      <ul className=" site-footer_link">
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
            </div>
            <div className="footer_powered_by" />
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
