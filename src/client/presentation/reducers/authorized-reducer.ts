import { AuthorizedAction, SetAuthorized } from '../actions'

type Action = SetAuthorized

export const authorized = (
    state: boolean | null = null,
    action: Action
): boolean | null => {
    switch (action.type) {
        case AuthorizedAction.setAuthorized: {
            return action.authorized
        }
    }
    return state
}
