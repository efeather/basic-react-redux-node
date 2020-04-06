import { ConnectedRouter, routerMiddleware } from 'connected-react-router'
import { Main } from './gui/container/main'
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { createBrowserHistory, History } from 'history'
import { RoutePath } from '../common'
import { applyMiddleware, createStore, Store } from 'redux'
import { createReducer } from './presentation/reducers'
import { Provider } from 'react-redux'
import { AppState } from './presentation'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

declare global {
    interface Window {
        reduxStore: Store<Partial<AppState>>
    }
}
const history: History = createBrowserHistory({ basename: RoutePath.base })
const middleware = [thunk, routerMiddleware(history)]
const enhancers: any = []
const store = createStore(
    createReducer(history),
    { authorizationToken: 'Basic DemoOnlyUseOAuth2' },
    composeWithDevTools(applyMiddleware(...middleware), ...enhancers)
)

window.reduxStore = store //Used later to dump redux state in e2e tests

const mountDOM: HTMLElement | null = document.getElementById('mount')
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Main />
        </ConnectedRouter>
    </Provider>,
    mountDOM
)
