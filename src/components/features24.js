import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className={`thq-section-padding ${props.rootClassName} `}>
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <a
              href="https://drive.google.com/file/d/1rpqSu2wpZOsLirz57jbO0axZZVKpGAeJ/view?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
              className="features24-link1"
            >
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features24-image1 thq-img-ratio-16-9"
              />
            </a>
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <a
                href="https://lostandfound-beta.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="features24-link2"
              >
                <h2 className="features24-feature1-title">
                  {props.feature1Title ?? (
                    <Fragment>
                      <h2 className="features24-text1 thq-heading-2">
                        Lost and Found
                      </h2>
                    </Fragment>
                  )}
                </h2>
              </a>
              <span>
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text4 thq-body-small">
                    lost something or found an item on campus? Update your lost or found items here, and let's help each other out!
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <a
                href="https://sellandsold.vercel.app"
                target="_blank"
                rel="noreferrer noopener"
                className="features24-link3"
              >
                <h2 className="features24-feature2-title">
                  {props.feature2Title ?? (
                    <Fragment>
                      <h2 className="features24-text6 thq-heading-2">
                        Sell and Sold
                      </h2>
                    </Fragment>
                  )}
                </h2>
              </a>
              <span>
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text3 thq-body-small">
                    why buy new when you can reuse? Sell what you don't need, find great deals on useful items, and let's save our money.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2>
                {props.feature3Title ?? (
                  <Fragment>
                    <h2 className="features24-text5 thq-heading-2">Others</h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text2 thq-body-small">
                    Discover surprising finds here..
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature3ImgSrc:
    'https://drive.google.com/file/d/1rpqSu2wpZOsLirz57jbO0axZZVKpGAeJ/view?usp=drive_link',
  feature1Title: undefined,
  feature3Description: undefined,
  feature2Description: undefined,
  feature1Description: undefined,
  feature2ImgSrc:
    'https://drive.google.com/file/d/1rpqSu2wpZOsLirz57jbO0axZZVKpGAeJ/view?usp=drive_link',
  feature3Title: undefined,
  rootClassName: '',
  feature1ImgAlt: 'Lost and Found',
  feature1ImgSrc:
    'https://drive.google.com/file/d/1rpqSu2wpZOsLirz57jbO0axZZVKpGAeJ/view?usp=drive_link',
  feature2Title: undefined,
}

Features24.propTypes = {
  feature3ImgSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature1Description: PropTypes.element,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  rootClassName: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.element,
}

export default Features24
