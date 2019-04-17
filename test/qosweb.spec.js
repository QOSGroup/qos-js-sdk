import QWeb from '../src/qweb'
import testConfig from './config'

const expect = chai.expect

describe('[create the qosweb]',  ()=>{
	it('create with default config', ()=>{
		const qweb = new QWeb({ chainId: testConfig.chainId, baseUrl: testConfig.APINode })
		expect(qweb).not.null
		expect(qweb.chainId).to.equal(testConfig.chainId)
		expect(qweb.baseUrl).to.equal(testConfig.APINode)
	})
})

describe('[account]',  ()=>{
	it('create the new account', ()=>{
		const qweb = new QWeb({ chainId: testConfig.chainId, baseUrl: testConfig.APINode })
		const newAccount = qweb.newAccount()
		expect(newAccount).not.null
		expect(newAccount.address).not.null
		expect(newAccount.privateKey).not.null
		expect(newAccount.publicKey).not.null
		expect(newAccount.mnemonic).not.null
		console.log('----- New Account -----')
		console.log(`Account Address:\t${newAccount.address}`)
		console.log(`Private Key:\t${newAccount.privateKey}`)
		console.log(`Public Key:\t${newAccount.publicKey}`)
		console.log(`Mnemonic Words:\t${newAccount.mnemonic}`)
	})

	it('get the account by private key', ()=>{
		const qweb = new QWeb({ chainId: testConfig.chainId, baseUrl: testConfig.APINode })
		const newAccount = qweb.newAccount()
		
		const targetAccount = qweb.recoveryAccountByPrivateKey(newAccount.privateKey)
		expect(targetAccount.address).to.equal(newAccount.address)
		expect(targetAccount.privateKey).to.equal(newAccount.privateKey)
		expect(targetAccount.publicKey).to.equal(newAccount.publicKey)
		expect(targetAccount.mnemonic).to.equal(newAccount.mnemonic)
	})


})