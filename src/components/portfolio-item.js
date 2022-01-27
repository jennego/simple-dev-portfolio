import React from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"

const PortfolioItem = props => {
  return (
    <div class="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
      <a href="http://www.dillonmcintosh.tumblr.com/">
        <StaticImage
          src="https://24.media.tumblr.com/d6b9403c704c3e5aa1725c106e8a9430/tumblr_mvyxd9PUpZ1st5lhmo1_1280.jpg"
          alt="Beach"
          style={{ margin: "5px" }}
        />
      </a>

      <div className="photo-box-caption">
        <span>
          by
          <a href="http://www.dillonmcintosh.tumblr.com/">Dillon McIntosh</a>
        </span>
      </div>

      <div className="photo-box-overlay">
        <div className="photo-box-overlay-text">
          <h2 className="photo-box-project-name">Project name</h2>
          <p className="photo-box-project-detail">Project Detail</p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
