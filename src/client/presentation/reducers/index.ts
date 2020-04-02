import { AppState } from '../app-state'
import { combineReducers, Reducer } from 'redux'
import { authorizationToken } from './authorizationToken-reducer'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

export const createReducer = (history: History): Reducer<Partial<AppState>> =>
    combineReducers<AppState>({
        router: connectRouter(history),
        authorizationToken,
    })
