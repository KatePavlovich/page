import React, { Component } from "react"
import withLayout from "./Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

library.add(fab, fas)

class Contact extends Component {
  render() {
    return (
      <div>
        <section className="contact-style" id="contact">
          <h2 className="projects-section-title">Contact me</h2>
          <nav>
            <ul className="contact-list">
              <li className="contact-item">
                <a href="https://github.com/KatePavlovich" target="blank">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="fa-style-my"
                  />
                </a>
              </li>
              <li className="contact-item">
                <a
                  href="https://www.linkedin.com/in/ekaterinaPaulovich/"
                  target="blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className="fa-style-my"
                  />
                </a>
              </li>
              <li className="contact-item">
                <a
                  href="https://web.facebook.com/kate.pavlovich.1"
                  target="blank"
                >
                  <FontAwesomeIcon
                    icon={["fab", "facebook-f"]}
                    className="fa-style-my"
                  />
                </a>
              </li>
              <li className="contact-item">
                <a href="mailto:ekate.pavlovich@gmail.com">
                  <FontAwesomeIcon
                    icon={["fas", "envelope"]}
                    className="fa-style-my"
                  />
                </a>
              </li>
              <li className="contact-item">
                <a href="tel:+375293207933">
                  <FontAwesomeIcon
                    icon={["fas", "mobile"]}
                    className="fa-style-my"
                  />
                </a>
              </li>
            </ul>
          </nav>
          <h2>Let's work together!</h2>
        </section>
      </div>
    )
  }
}

export default withLayout(Contact)
