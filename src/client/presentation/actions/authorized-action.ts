import { Action } from 'redux'

export const enum AuthorizedAction {
    setAuthorized = 'SET_AUTHORIZED',
}

export interface SetAuthorized extends Action {
    type: AuthorizedAction.setAuthorized
    authorized: boolean
}

export const setAuthorized = (authorized: boolean): SetAuthorized => {
    return {
        type: AuthorizedAction.setAuthorized,
        authorized,
    }
}
