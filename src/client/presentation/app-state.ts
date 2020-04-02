import { RouterState } from 'connected-react-router'
export interface AppState {
    router: RouterState
    authorizationToken: string | null //Should be a token instead and resolved to true or false in the component
}
