import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Plx from "react-plx"
import background from "../images/background.jpg"
import ray from "../images/ray.png"
import grass from "../images/grass.png"

const IndexPage = () => {
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 1.2,
          property: "scale",
        },
      ],
    },
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 0,
          endValue: -50,
          property: "translateY",
        },
      ],
    },
  ]

  const parallaxDataHorse = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1.06,
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ]

  const parallaxDataGrass = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 1.5,
          property: "scale",
        },
      ],
    },
  ]
  return (
    <Layout>
      <h1>Hello World</h1>
      <div
        style={{
          width: "1000px",
          height: "500px",
          overflow: "hidden",
          border: "2px black solid",
        }}
      >
        <Plx
          className="MyAwesomeParallax"
          style={{ position: "absolute" }}
          parallaxData={parallaxData}
        >
          <img src={background} width="1000px" />
        </Plx>

        <Plx style={{ position: "absolute" }} parallaxData={parallaxDataHorse}>
          <img src={ray} width="1000px" />
        </Plx>

        <Plx style={{ position: "absolute" }} parallaxData={parallaxDataGrass}>
          <img src={grass} width="1000px" />
        </Plx>
      </div>
    </Layout>
  )
}

export default IndexPage
