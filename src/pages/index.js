import * as React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import Portfolio from "../components/sections/portfolio"
import About from "../components/sections/about"
import Contact from "../components/sections/contact"

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
      <ReactFullpage
        //fullpage options
        menu={"#menu"}
        scrollingSpeed={1000}
        navigation={true}
        verticalCentered={false}
        /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section centered-section">
                <h1 className="title animated-header">Jennifer Chow</h1>
                <h2 className="subtitle">Web Developer</h2>
              </div>

              <Portfolio />
              <About />
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export default IndexPage
