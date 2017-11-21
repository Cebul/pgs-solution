import React, {Component} from 'react'
import axios from 'axios'

class API extends Component {

  state = {
    cams: ''
  }

  componentDidMount() {
    axios.get('https://makevoid-skicams.p.mashape.com/cams.json', {
        headers: { "X-Mashape-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw" }
      })
        .then((resp) => {
          this.setState({
            cams: resp
          })

        })
        .catch(err => {
          console.log(err)
        })
    }

  render() {
    return (
      <div>
        {console.log(this.state.cams)}
      </div>
    )
  }
}
export default API
