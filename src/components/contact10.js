import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text18 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text16 thq-heading-3">
                    SANJEEVANI RAWAT
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text17 thq-body-large">
                    sanjeevanirawat200421@gmail.com
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://www.linkedin.com/in/sanjeevani-rawat-4a0034264/"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                linkedin
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text19 thq-heading-3">
                    AKANKSHA GAUR
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text15 thq-body-large">
                    akankshagaur1407@gmail.com
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://www.linkedin.com/in/akankshagaur14/"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location2Description: undefined,
  location1: undefined,
  location1Description: undefined,
  heading1: undefined,
  location2: undefined,
}

Contact10.propTypes = {
  location2Description: PropTypes.element,
  location1: PropTypes.element,
  location1Description: PropTypes.element,
  heading1: PropTypes.element,
  location2: PropTypes.element,
}

export default Contact10
