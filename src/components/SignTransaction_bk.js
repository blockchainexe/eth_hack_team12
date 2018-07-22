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
          sub: "2oyun9RGarCjbMeaiVspaGeLFBWsKd8S4aR",
          claim: {
            "Event": "Verification is succeeded",
            "Date": month[d.getMonth()] + " " + d.getDate() + "," + d.getFullYear(),
            "MNID": "2oigGsfbhTCzTZQip3csfmPduJ94XqtaiPX",
            "test": this.props.authData.address
          }
        })
      }
    })
  }

  render () {
    return (
      <section>
        <h4>Sign a transaction</h4>
        <p>Verify Test</p>
        <div>
          {
              <form>
                <div>
                  <button
                    onClick={this.verification}>
                    Verif Test
                  </button>
                </div>
              </form>
          }
        </div>
      </section>
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
