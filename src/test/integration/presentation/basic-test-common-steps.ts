import { Then } from 'cucumber'
import { expect } from 'chai'

Then(/^should pass also$/, () => expect(true).to.be.true)
