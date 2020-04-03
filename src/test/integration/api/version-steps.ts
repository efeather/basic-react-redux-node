import { Given, Then } from 'cucumber'
import { authorizationTokenRepository } from '../business/repositories'
import { RoutePath } from '../../../common'
import { fetchVersion } from '../../../client/infrastructure'
import { expect } from 'chai'

Given('I have a (.+) token', (goodOrBad: string) => {
    if (goodOrBad === 'bad') {
        authorizationTokenRepository.setAuthorizationToken('BadAuthToken')
    } else {
        authorizationTokenRepository.setAuthorizationToken(
            'Basic DemoOnlyUseOAuth2'
        )
    }
})

Then('I should (.+) the version', (seeOrNotSee: string) => {
    const getVersion = async (): Promise<string> => {
        const headers = new Headers()
        headers.append(
            'Authorization',
            authorizationTokenRepository.getAuthorizationToken()
        )

        const request = new Request(RoutePath.webAPI, {
            method: 'GET',
            headers: headers,
        })

        return await fetch(request)
            .then(response => response.json())
            .then(data => data.version)
    }

    getVersion().then((actual: any) => {
        expect(true).to.equal(false);
    })
})
