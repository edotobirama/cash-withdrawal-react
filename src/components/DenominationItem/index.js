// Write your code here
import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  render() {
    let x = this.props.value
    let {withdraw} = this.props
    return (
      <li className="button">
        <button onClick={()=>withdraw(x)}>{x}</button>
      </li>
    )
  }
}

export default DenominationItem
