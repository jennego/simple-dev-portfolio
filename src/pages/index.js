import * as React from "react"
import ReactFullpage from "@fullpage/react-fullpage"
import Portfolio from "../components/sections/portfolio"

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
        /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div
                className="section"
                style={{ background: "purple", textAlign: "center" }}
              >
                <h1>Jennifer Chow</h1>
                <p>Section 1 (welcome to fullpage.js) </p>
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>

              <Portfolio />
              <div
                className="section"
                style={{ background: "rebeccapurple", textAlign: "center" }}
              >
                Hi
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}

export default IndexPage
