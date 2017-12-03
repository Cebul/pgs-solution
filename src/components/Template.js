import React, {Component} from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Header from './Header'
import Footer from './Footer'

injectTapEventPlugin()

class Template extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    ) //return
  } //render
} //Template

export default Template
