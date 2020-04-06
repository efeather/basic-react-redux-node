import { Then } from 'cucumber'
import { expect } from 'chai'

//TODO: to test the log creation, set one of the "true" to "false"
Then(/^should pass$/, () => expect(true).to.be.true)
