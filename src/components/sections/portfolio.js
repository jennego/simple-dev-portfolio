import React from "react"

import Ray from "../../images/ray.png"
import PortfolioItem from "../portfolio-item"
import "purecss/build/grids-responsive-min.css"

const Portfolio = props => {
  return (
    <div className="section fp-auto-height" style={{ background: "skyblue" }}>
      <h1 className="section-heading">Portfolio</h1>
      <div className="container">
        <div className="portfolio-container">
          <div className="pure-g">
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
