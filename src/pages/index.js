import React from "react"
import CloudSVG from "../images/cloud-hosting.svg"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Typography from "../components/typography";
import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Hosting101" />
    <Hero />
    <Typography />
  </Layout>
)

const Hero = () => (
  <div className="heroSection">
    <div className="layout">
      <div className="hero">
        <div className="hero__content">
          <h1 className="showcase">
            Move beyond localhost
          </h1>
          <p>Check out in-depth video guides on how to host your next application</p>
          <div className="hero__cta">
            <button>Explore Guides</button>
          </div>
        </div>
        <div className="hero__image">
          <img alt="Hosting101" src={CloudSVG}/>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
