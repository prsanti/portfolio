import { render } from 'react-dom'
import React, { useRef } from 'react'
import clamp from 'lodash-es/clamp'
import { useSprings, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import './Projects.scss'

import github from "../photos/github-brands.svg";

const pages = [
  {
    name: "Rebu",
    url: "https://i.imgur.com/rXVNLvr.png",
    description: "Designated Driving Service: Get others to drive your car after a night out drinking. Get comfortable and get home safe in your own car!",
    link: "https://github.com/jmgtheworld/Rebu",
    video: "https://www.youtube.com/watch?v=oiV-0-oXAhw&feature=youtu.be"
  },
  {
    name: "Jungle",
    url: "https://i.imgur.com/jOONus0.png",
    description: "A simple Amazon clone, made with Ruby on Rails.",
    link: "https://github.com/prsanti/jungle-rails"
  },
  {
    name: "Scheduler",
    url: "https://i.imgur.com/nVou2Hy.png",
    description: "React based project to create and organize interviews for students and interviewers.",
    link: "https://github.com/prsanti/scheduler"
  },
  {
    name: "uPick",
    url:'https://i.imgur.com/aBKTu7W.png',
    description: "A smart todo list that automatically categorizes and displays all information for activities you plan to do.",
    link: "https://github.com/prsanti/smart_TODO_list"
  },
  {
    name: "LightBnB",
    url: "https://i.imgur.com/fx0BZmt.png",
    description: "An AirBnB clone that lets you browse, search, and filter all listings your listings as well as others.",
    link: "https://github.com/prsanti/LightBnB/tree/master/LightBnB_WebApp-master"
  },
  {
    name: "Tweeter",
    url: 'https://i.imgur.com/dDqiJ6k.png',
    description: "A simple, single-page Twitter clone built with jQuery and Ajax.",
    link: "https://github.com/prsanti/tweeter"
  },
  {
    name: "TinyApp",
    url: "https://i.imgur.com/WDM6AZk.png",
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

      <a href={pages[i].link} target="_blank" rel="noopener noreferrer" className="hrefs">
        <img src={github} alt="github" className="nav--item"/>
      </a>
      <a href={pages[i].video} target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github" className="nav--item"/>
      </a>
    </animated.div>
  ))
}

render(<Projects />, document.getElementById('root'))
