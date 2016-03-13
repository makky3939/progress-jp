import React from 'react'

import Navbar from '../../ui/Navbar/index.js'
import Footer from '../../ui/Footer/index.js'

class Basic extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}

export default Basic
