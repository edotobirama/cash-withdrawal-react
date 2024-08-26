// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  withdraw = x => {
    this.setState(prevState => {
      return {balance: prevState.balance - x}
    })
  }
  render() {
    return (
      <div className="bg-container">
        <div className="grey-container">
          <div className="user-container">
            <p className="user-dp">s</p>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-specify">Your Balance</p>
            <div className="balance-box">
              <p className="balance-value">{this.state.balance}</p>
              <p className="balance-currency">In Rupees</p>
            </div>
          </div>
          <p className="action">Withdraw</p>
          <p className="balance-specify">CHOOSE SUM (IN RUPEES)</p>
          <ul className="button-list">
            {this.props.denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                value={eachItem.value}
                withdraw={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
