import { web3 } from './connectors'

function VerifiesContractSetup () {
  let VerifiesABI = web3.eth.contract([{"constant":false,"inputs":[{"name":"verify","type":"uint256"}],"name":"getVerification","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getVerifies","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"}])
  let VerifiesContractObj = VerifiesABI.at('0x396dce422312421cfcb765e47cbb8b9ebadd8818')
  return VerifiesContractObj
}

const VerifiesContract = VerifiesContractSetup()

export default VerifiesContract
