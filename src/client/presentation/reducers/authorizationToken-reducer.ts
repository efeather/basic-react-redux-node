import { AuthorizationTokenAction, SetAuthorizationToken } from '../actions'

type Action = SetAuthorizationToken

export const authorizationToken = (
    state: string | null = null,
    action: Action
): string | null => {
    switch (action.type) {
        case AuthorizationTokenAction.setAuthorizationToken: {
            return action.authorizationToken
        }
    }
    return state
}
