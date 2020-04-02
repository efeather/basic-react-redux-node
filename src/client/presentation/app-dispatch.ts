import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { AppState } from './app-state'

export type AppDispatch = ThunkDispatch<AppState, undefined, AnyAction>
