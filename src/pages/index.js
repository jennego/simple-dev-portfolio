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
      start: ".frame",
      duration: 150,

      properties: [
        {
          startValue: 1,
          endValue: 1.2,
          property: "scale",
        },
      ],
    },
    // {
    //   start: 0,
    //   end: 500,
    //   properties: [
    //     {
    //       startValue: 0,
    //       endValue: -50,
    //       property: "translateY",
    //     },
    //   ],
    // },
  ]

  const parallaxDataHorse = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1.02,
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ]

  const parallaxFrame = [
    {
      start: "self",
      duration: 500,
      easing: [0.25, 0.1, 0.6, 1.5],
      properties: [
        {
          startValue: 1,
          endValue: 1,
          property: "scale",
        },
      ],
    },
  ]
  return (
    <div>
      <h1>Hello World</h1>
      <h2>
        {" "}
        Pick an aspect ratio!! Keep it at the same aspect ratio. Change px to
        something responsive?
      </h2>

      <Plx
        className="frame"
        parallaxData={parallaxFrame}
        style={{
          width: "90vw",
          height: "100vh",
          overflow: "hidden",
          border: "2px black solid",
        }}
      >
        <Plx
          className="MyAwesomeParallax"
          style={{ position: "absolute" }}
          parallaxData={parallaxData}
        >
          <img src={background} width="1500px" />
        </Plx>

        <Plx
          style={{ position: "absolute", left: "-30px" }}
          parallaxData={parallaxDataHorse}
        >
          <img src={ray} width="1000px" />
        </Plx>
      </Plx>

      <p>Blah blah</p>
      <p>Regular content here </p>
      <p>
        Cupcake ipsum dolor sit amet I love brownie halvah. Carrot cake bonbon
        cotton candy candy canes apple pie. Candy canes biscuit apple pie danish
        shortbread. Chupa chups tiramisu caramels wafer sugar plum. Shortbread
        chocolate cake marshmallow danish gummi bears gummi bears. Topping jelly
        I love gummies marshmallow sesame snaps wafer tootsie roll. Powder
        carrot cake candy lollipop caramels fruitcake chocolate cake. Caramels
        cotton candy tiramisu macaroon I love muffin cake sugar plum. Apple pie
        gingerbread soufflé topping apple pie danish cupcake carrot cake. Cotton
        candy chocolate bar cheesecake I love marshmallow topping. Dessert gummi
        bears toffee jelly cake I love candy canes apple pie. Soufflé cake donut
        icing jelly-o icing. Jujubes jelly beans ice cream chocolate cake
        marshmallow cheesecake I love dragée. Chocolate cake toffee lollipop
        powder sweet roll jelly topping pudding.
      </p>
    </div>
  )
}

export default IndexPage
