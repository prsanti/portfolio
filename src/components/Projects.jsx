import { render } from 'react-dom'
import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './Projects.scss'

import github from "../photos/github-brands.svg";

// const coolimages = [
//   'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
// ];

const pages = [
  {
    name: "Scheduler",
    url:'https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: "React based project to create and organize interviews for students and interviewers.",
    link: "https://github.com/prsanti/scheduler"
  },
  {
    name: "uPick",
    url:'https://images.pexels.com/photos/296878/pexels-photo-296878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: "A smart todo list that automatically categorizes and displays all information for activities you plan to do.",
    link: "https://github.com/prsanti/smart_TODO_list"
  },
  {
    name: "LightBnB",
    url:  'https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    description: "An AirBnB clone that lets you browse, search, and filter all listings your listings as well as others.",
    link: "https://github.com/prsanti/LightBnB"
  },
  {
    name: "Tweeter",
    url:'https://github.com/prsanti/scheduler/raw/master/docs/create-appointment.png',
    description: "A simple, single-page Twitter clone built with jQuery and Ajax.",
    link: "https://github.com/prsanti/tweeter"
  },
  {
    name: "TinyApp",
    url:'https://github.com/prsanti/tweeter/raw/master/docs/tweeter-mobile.png',
    description: "A full-stack web application built with Node.js and Express that allows users to shorten long URLs.",
    link: "https://github.com/prsanti/tinyapp"
  },
];

export default function Projects() {
  const index = useRef(0)
  const [props, set] = useSprings(pages.length, i => ({ x: i * window.innerWidth, sc: 1, display: 'block' }))
  const bind = useGesture(({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > window.innerWidth / 2)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, pages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / window.innerWidth / 2 : 1
      return { x, sc, display: 'block' }
    })
  })
  return props.map(({ x, display, sc }, i) => (
    <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
      <h1 className="project--name">{pages[i].name}</h1>
      <p className="project--description">{pages[i].description}</p>
      <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${pages[i].url})` }} />

      <a href={pages[i].link}>
          <img src={github} alt="github" className="nav--item"/>
        </a>
    </animated.div>
  ))
}

render(<Projects />, document.getElementById('root'))
