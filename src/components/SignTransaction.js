import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppActions from '../actions/AppActions'
import { uport } from './../util/connectors.js'

import VerifiesContract from '../util/VerifiesContract'
import checkAddressMNID from '../util/checkAddressMNID'
// import waitForMined from '../utilities/waitForMined'
// import getShares from '../utilities/getShares'
// import Attestation from './../user/ui/attestbutton/Attestation'

class SignTransaction extends Component {

  constructor (props) {
    super(props)
    this.verification = this.verification.bind(this)
  }

  verification (e) {
    e.preventDefault()
    console.log('verification')
    // const addr = "2orTEYdGJcwnuaPU1B6SekGwTdU97aoqoM3"
    // const addr = "2oigGsfbhTCzTZQip3csfmPduJ94XqtaiPX"
    // const addr = '2oyun9RGarCjbMeaiVspaGeLFBWsKd8S4aR'
    // const addr = checkAddressMNID("2oyun9RGarCjbMeaiVspaGeLFBWsKd8S4aR")
    const addr = checkAddressMNID(this.props.authData.address)
    const actions = this.props.actions
    console.log({addr, actions})

    VerifiesContract.getVerification(addr, (error, txHash) => {
      console.log('getVerification')
      console.log('txHash: ' + txHash)
      if (error) {
        console.log(error)
      } else {
        // Can verify the uport user is verified with the returned 'credentials' object.
        var d = new Date();
        var month = ['Jan', 'Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
        uport.attestCredentials({
          sub: this.props.authData.address,
          claim: {
            "Event": {
                "Date": month[d.getMonth()] + " " + d.getDate() + "," + d.getFullYear() + " / " + d.getHours() + ":" + d.getMinutes(),
                "MNID": this.props.authData.address,
                "txHash":"https://rinkeby.etherscan.io/tx/" + txHash 
            }
          },
          exp: d.getTime() + 30 * 24 * 60 * 60 * 1000,  // 30 days from now
        })
      }
    })
  }

  render () {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Reservation</h1>
            <strong>Name: </strong>
            {this.props.authData.name}<br />
            <strong>E-mail: </strong>
            {this.props.authData.email}<br />
            <strong>Evaluation: </strong>
            {this.props.authData.Reputation.Acceptable}/{this.props.authData.Reputation.Reviewer}<br />
            <br />
        <div>
          {
              <form>
                <div>
                  <button
                    onClick={this.verification}>
                    confirm
                  </button>
                </div>
              </form>
          }
        </div>
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    uport: state.App.uport,
    tx: state.App.tx,
    error: state.App.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(AppActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignTransaction)
