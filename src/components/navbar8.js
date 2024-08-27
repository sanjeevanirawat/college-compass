import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import './navbar8.css';

const Navbar8 = (props) => {
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false);
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false);

  return (
    <header className="navbar8-container1">
      <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
        <img alt={props.logoAlt} src={props.logoSrc} className="navbar8-image1" />
        <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
          <nav className="navbar8-links1">
            <a href={props.link1Url}>
              {props.link1 ?? (
                <Fragment>
                  <span className="navbar8-text14 thq-link thq-body-small">#features</span>
                </Fragment>
              )}
            </a>
            <a href={props.link2Url}>
              {props.link2 ?? (
                <Fragment>
                  <span className="navbar8-text18 thq-link thq-body-small">#motive</span>
                </Fragment>
              )}
            </a>
            <a href={props.link3Url} target="_blank" rel="noreferrer noopener">
              {props.link3 ?? (
                <Fragment>
                  <span className="navbar8-text19 thq-link thq-body-small">#aboutus</span>
                </Fragment>
              )}
            </a>
            <div onClick={() => setLink5DropdownVisible(!link5DropdownVisible)} className="navbar8-link4-dropdown-trigger">
              <span>
                {props.link4 ?? (
                  <Fragment>
                    <span className="navbar8-text13 thq-link thq-body-small">#Help</span>
                  </Fragment>
                )}
              </span>
              <div className="navbar8-icon-container1">
                {link5DropdownVisible && (
                  <div className="navbar8-container2">
                    <svg viewBox="0 0 1024 1024" className="navbar8-icon10">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                )}
                {!link5DropdownVisible && (
                  <div className="navbar8-container3">
                    <svg viewBox="0 0 1024 1024" className="navbar8-icon12">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
        <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar8-icon14">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
          <div className="navbar8-nav">
            <div className="navbar8-top">
              <img alt={props.logoAlt} src={props.logoSrc} className="navbar8-logo" />
              <div data-thq="thq-close-menu" className="navbar8-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar8-icon16">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar8-links2">
              <a href={props.link1Url}>
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar8-text14 thq-link thq-body-small">#features</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url}>
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar8-text18 thq-link thq-body-small">#motive</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url}>
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar8-text19 thq-link thq-body-small">#aboutus</span>
                  </Fragment>
                )}
              </a>
              <div className="navbar8-link4-accordion">
                <div onClick={() => setLink5AccordionOpen(!link5AccordionOpen)} className="navbar8-trigger">
                  <span>
                    {props.link4 ?? (
                      <Fragment>
                        <span className="navbar8-text13 thq-link thq-body-small">#Help</span>
                      </Fragment>
                    )}
                  </span>
                  <div className="navbar8-icon-container2">
                    {link5AccordionOpen && (
                      <div className="navbar8-container4">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon18">
                          <path d="M298 426h428l-214 214z"></path>
                        </svg>
                      </div>
                    )}
                    {!link5AccordionOpen && (
                      <div className="navbar8-container5">
                        <svg viewBox="0 0 1024 1024" className="navbar8-icon20">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {link5AccordionOpen && (
                  <div className="navbar8-container6">
                    <a href={props.linkUrlPage1}>
                      <div className="navbar8-menu-item1">
                        <img
                          alt={props.page1ImageAlt}
                          src={props.page1ImageSrc}
                          className="navbar8-page1-image1"
                        />
                        <div className="navbar8-content1">
                          <span>
                            {props.page1 ?? (
                              <Fragment>
                                <span className="navbar8-text17 thq-body-large">Features</span>
                              </Fragment>
                            )}
                          </span>
                          <span>
                            {props.page1Description ?? (
                              <Fragment>
                                <span className="navbar8-text16 thq-body-small">Page One Description</span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage2}>
                      <div className="navbar8-menu-item2">
                        <img
                          alt={props.page2ImageAlt}
                          src={props.page2ImageSrc}
                          className="navbar8-page2-image1"
                        />
                        <div className="navbar8-content2">
                          <span>
                            {props.page2 ?? (
                              <Fragment>
                                <span className="navbar8-text15 thq-body-large">Motive</span>
                              </Fragment>
                            )}
                          </span>
                          <span>
                            {props.page2Description ?? (
                              <Fragment>
                                <span className="navbar8-text22 thq-body-small">Page Two Description</span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                    <a href={props.linkUrlPage3}>
                      <div className="navbar8-menu-item3">
                        <img
                          alt={props.page3ImageAlt}
                          src={props.page3ImageSrc}
                          className="navbar8-page3-image1"
                        />
                        <div className="navbar8-content3">
                          <span>
                            {props.page3 ?? (
                              <Fragment>
                                <span className="navbar8-text21 thq-body-large">About Us</span>
                              </Fragment>
                            )}
                          </span>
                          <span>
                            {props.page3Description ?? (
                              <Fragment>
                                <span className="navbar8-text22 thq-body-small">Page Three Description</span>
                              </Fragment>
                            )}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </header>
  );
};

Navbar8.propTypes = {
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link1Url: PropTypes.string,
  link2Url: PropTypes.string,
  link3Url: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  page1: PropTypes.string,
  page1Description: PropTypes.string,
  page1ImageAlt: PropTypes.string,
  page1ImageSrc: PropTypes.string,
  page2: PropTypes.string,
  page2Description: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  page2ImageSrc: PropTypes.string,
  page3: PropTypes.string,
  page3Description: PropTypes.string,
  page3ImageAlt: PropTypes.string,
  page3ImageSrc: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  linkUrlPage2: PropTypes.string,
  linkUrlPage3: PropTypes.string,
};

export default Navbar8;
