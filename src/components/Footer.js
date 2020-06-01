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
          href="https://twitter.com/proxyduman"
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
        <a
          href="https://www.linkedin.com/in/yadullah-duman-601594137/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
      </footer>
    )
  }
}

export default Footer
