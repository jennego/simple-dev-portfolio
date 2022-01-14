import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const PortfolioItem = props => {
  return (
    <div class="photo-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-3">
      <a href="http://www.dillonmcintosh.tumblr.com/">
        <img
          src="https://24.media.tumblr.com/d6b9403c704c3e5aa1725c106e8a9430/tumblr_mvyxd9PUpZ1st5lhmo1_1280.jpg"
          alt="Beach"
        />
      </a>

      <div class="photo-box-caption">
        <span>
          by
          <a href="http://www.dillonmcintosh.tumblr.com/">Dillon McIntosh</a>
        </span>
      </div>
    </div>
  )
}

export default PortfolioItem
