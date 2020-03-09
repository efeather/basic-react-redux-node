import { ConnectedRouter } from 'connected-react-router'
import { Main } from './gui/container/main'
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { createBrowserHistory, History } from 'history'
import { RoutePath } from '../common'
import { createStore, Store } from 'redux'
import { createReducer } from './presentation/reducers'
import { Provider } from 'react-redux'
import { AppState } from './presentation'

declare global {
    interface Window {
        reduxStore: Store<AppState>
    }
}
const history: History = createBrowserHistory({ basename: RoutePath.base })

const store = createStore(createReducer(history))

window.reduxStore = store

const mountDOM: HTMLElement | null = document.getElementById('mount')
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Main />
        </ConnectedRouter>
    </Provider>,
    mountDOM
)
