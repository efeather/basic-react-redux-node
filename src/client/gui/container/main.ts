import { Main as MainComponent } from '../component/main'
import { connect } from 'react-redux'
import { AppState } from '../../presentation'
import { isValidAuthToken } from '../../../common'

const mapStateToProps = (state: AppState) => {
    return {
        authorized: isValidAuthToken(state.authorizationToken),
    }
}

export const Main = connect(mapStateToProps)(MainComponent)
