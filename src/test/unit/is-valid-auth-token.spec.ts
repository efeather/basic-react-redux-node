import { expect } from 'chai'
import 'mocha'
import { isValidAuthToken } from '../../common/is-valid-auth-token'

describe('Autothorization Tests', () => {
    describe('Null token', () => {
        it('should return false', () => {
            const result = isValidAuthToken(null)
            expect(result).to.equal(false)
        })
    })
    describe('Bad token', () => {
        it('should return false', () => {
            const result = isValidAuthToken('bad')
            expect(result).to.equal(false)
        })
    })

    describe('Good token', () => {
        it('should return true', () => {
            const result = isValidAuthToken('Basic DemoOnlyUseOAuth2')
            expect(result).to.equal(true)
        })
    })
})
