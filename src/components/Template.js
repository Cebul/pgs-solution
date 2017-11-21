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
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    ) //return
  } //render
} //Template

export default Template
