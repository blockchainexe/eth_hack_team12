import { Connect, SimpleSigner } from 'uport-connect'

export let uport = new Connect('TEST', {
  clientId: '2orTEYdGJcwnuaPU1B6SekGwTdU97aoqoM3',
  network: 'rinkeby',
  signer: SimpleSigner('131c6f4aa076feda9f01c994210b4ba53401e55e3ecd93e5d91c817059fcf655')
})

export const web3 = uport.getWeb3()
