import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PortfolioItem = () => {
  return (
    <div
      style={{
        background: "rebeccapurple",
        margin: 0,
        padding: 0,
        height: "100vh",
      }}
    >
      <div>
        <h1 style={{ margin: 0, color: "#fff" }}>Portfolio Item</h1>
        <div className="row">
          <div className="col-md-8">Hi</div>
          <div className="col-md-4">Details</div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
