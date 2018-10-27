import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section className="contact-style" id="contact">
            <h2>Contact me</h2>
            <nav>
              <ul className="contact-list">
                <li className="contact-item">
                  <a href="https://github.com/KatePavlovich" target="blank">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li className="contact-item">
                  <a href="https://www.linkedin.com/in/ekaterinaPaulovich/" target="blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="contact-item">
                  <a href="https://web.facebook.com/kate.pavlovich.1" target="blank">
                    <i className="fa fa-facebook-f"></i>
                  </a>
                </li>
                <li className="contact-item">
                  <a href="mailto:ekate.pavlovich@gmail.com">
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
                <li className="contact-item">
                  <a href="tel:+375293207933">
                    <i className="fa fa-mobile"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <h2>Let's work together!</h2>
          </section>
        )
    }
}

export default Contact;