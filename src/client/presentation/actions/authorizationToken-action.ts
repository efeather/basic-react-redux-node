import { Action } from 'redux'

export const enum AuthorizationTokenAction {
    setAuthorizationToken = 'SET_AUTHORIZATION_TOKEN',
}

export interface SetAuthorizationToken extends Action {
    type: AuthorizationTokenAction.setAuthorizationToken
    authorizationToken: string
}

export const setAuthorizationToken = (
    authorizationToken: string
): SetAuthorizationToken => {
    return {
        type: AuthorizationTokenAction.setAuthorizationToken,
        authorizationToken: authorizationToken,
    }
}
