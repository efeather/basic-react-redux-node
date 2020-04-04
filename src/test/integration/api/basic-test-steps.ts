import { Then } from 'cucumber'
import { expect } from 'chai'

Then(/^should pass$/,()=>expect(true).to.be.true);
