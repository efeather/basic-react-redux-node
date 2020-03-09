import { Main as MainComponent } from '../component/main'
import { connect } from 'react-redux'
import { AppState } from '../../presentation'

const mapStateToProps = (state: AppState) => {
    return {
        authorized: state.authorized, //get from state
    }
}

export const Main = connect(mapStateToProps)(MainComponent)
