import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import CTA26 from '../components/cta26'
import Features24 from '../components/features24'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>CollegeCompass</title>
        <meta property="og:title" content="Healthy Mild Boar" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10 thq-link thq-body-small">
              #features
            </span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11 thq-link thq-body-small">#motive</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12 thq-link thq-body-small">
              #aboutus
            </span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13 thq-link thq-body-small">#login</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14 thq-body-large">Features</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15 thq-body-large">Motive</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16 thq-body-large">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17 thq-body-large">Help</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Secondary Action</span>
          </Fragment>
        }
        logoSrc="/logo21-1400w.jpg"
        page1Description={
          <Fragment>
            <span className="home-text20 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        content1={
          <Fragment>
            <span className="home-text24 thq-body-large">
              Find your way through college with ease using our platform.
              Discover lost items, sell your belongings, and explore other
              features designed to make your college experience smoother.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text25 thq-heading-1">
              Welcome to College Compass
            </span>
          </Fragment>
        }
        image1Src="/banasthalividyapithppt-221222051000-418170c0-thumbnail-1500w.jpg"
        image2Src="/1649159503271538307_4487593738013474_4708037320397846524_n-1500w.webp"
        image3Src="/1531983089phpj1seji-1500w.jpeg"
        image7Src="/_dsc0349%20(1)-1500w.jpg"
        image8Src="/unnamed-1500w.jpg"
        image9Src="/images-1500w.jpg"
        rootClassName="hero17root-class-name"
      ></Hero17>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text26">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text27 thq-body-large">
              <br></br>
              <span>Hey, I&apos;m your Campus Buddy!</span>
              <br></br>
              <br></br>
              <span>
                Lost something? Need to buy or sell? Or just looking for a
                campus map? You&apos;re in the right place! We&apos;ve got
                everything you need to make college life easier.
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text33 thq-heading-2">
              Find Your Way with College Compass
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text34 thq-heading-2">Lost and Found</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text35 thq-heading-2">Sell and Sold</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text36 thq-heading-2">Others</span>
          </Fragment>
        }
        rootClassName="features24root-class-name"
        feature1ImgSrc="/logo21-1400w.jpg"
        feature1Description={
          <Fragment>
            <span className="home-text37 thq-body-small">
              lost something or found an item on campus? Update your lost or
              found items here, and let&apos;s help each other out!
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text38 thq-body-small">
              why buy new when you can reuse? Sell what you don&apos;t need,
              find great deals on useful items, and let&apos;s save our money.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text39 thq-body-small">
              Discover surprising finds here..
            </span>
          </Fragment>
        }
      ></Features24>
      <Contact10
        heading1={
          <Fragment>
            <span className="home-text40 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text41 thq-heading-3">SANJEEVANI RAWAT</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text42 thq-heading-3">AKANKSHA GAUR</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text43 thq-body-large">
              sanjeevanirawat200421@gmail.com
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text44 thq-body-large">
              akankshagaur1407@gmail.com
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text45 thq-body-small">Features</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text46 thq-body-small">Motive</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text47 thq-body-small">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text48 thq-body-small">Help</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text49 thq-body-small">Contact Us</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text50 thq-body-small">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text51 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text52 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
