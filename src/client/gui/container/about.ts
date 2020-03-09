import { About as AboutComponent } from '../component/about'
import { connect } from 'react-redux'
import { AppState } from '../../presentation'

const mapStateToProps = (state: AppState) => {
    return {}
}

export const About = connect(mapStateToProps)(AboutComponent)
