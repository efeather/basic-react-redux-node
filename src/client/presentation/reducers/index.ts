import { AppState } from '../app-state'
import { combineReducers, Reducer } from 'redux'
import { authorized } from './authorized-reducer'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

export const createReducer = (history: History): Reducer<AppState> =>
    combineReducers<AppState>({
        router: connectRouter(history),
        authorized,
    })
