import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Yadullah Duman</strong>. I love coffee, code and
          games. Currently a computer science student at TU Darmstadt and
          modernizing legacy software at MaibornWolff.{' '}
          <a href="https://twitter.com/proxyduman">
            Follow me on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
