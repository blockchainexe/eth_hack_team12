import React, { Component } from 'react'
import { uport } from './../../../util/connectors.js'

class Attestation extends Component {
    attest(){
      // Can verify the uport user is verified with the returned 'credentials' object.
      var d = new Date();
      var month = ['Jan', 'Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
      uport.attestCredentials({
        sub: credentials.address,
        claim: {
          "Event": "Verification is succeeded",
          "Date": month[d.getMonth()] + " " + d.getDate() + "," + d.getFullYear(),
          "MNID": "2oigGsfbhTCzTZQip3csfmPduJ94XqtaiPX",
          "test": "this is test"
        }
      })
    }
}
export default Attestation
