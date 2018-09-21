import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

const facebookURL = 'https://www.facebook.com/yadullah.duman'
const instagramURL = 'https://www.instagram.com/yd_76/'
const twitterURL = 'https://twitter.com/proxyduman'
const githubURL = 'https://github.com/yduman'

const Socials = () => (
  <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
    <div>
      <a href={facebookURL} target="_blank">
        <FontAwesomeIcon icon={faFacebookF} size="lg" /> Facebook
      </a>
    </div>
    <div>
      <a href={instagramURL} target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="lg" /> Instagram
      </a>
    </div>
    <div>
      <a href={twitterURL} target="_blank">
        <FontAwesomeIcon icon={faTwitter} size="lg" /> Twitter
      </a>
    </div>
    <div>
      <a href={githubURL} target="_blank">
        <FontAwesomeIcon icon={faGithub} size="lg" /> GitHub
      </a>
    </div>
  </div>
);

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
          Written by <strong>Yadullah Duman</strong>. JavaScript and clean code
          enthusiast.
          <Socials />
        </p>
      </div>
    )
  }
}

export default Bio
