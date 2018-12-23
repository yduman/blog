import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="https://mobile.twitter.com/proxyduman"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/yduman"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        &bull;{' '}
      </footer>
    )
  }
}

export default Footer
