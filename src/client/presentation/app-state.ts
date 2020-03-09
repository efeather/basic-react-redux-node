import { RouterState } from 'connected-react-router'
export interface AppState {
    router: RouterState
    authorized: boolean | null //Should be a token instead and resolved to true or false in the component
}
