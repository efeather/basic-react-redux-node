import { ElementId, RoutePath } from '../../../common'
import { Switch, Route } from 'react-router'
import { About } from '../container/about'
import * as React from 'react'

interface Props {
    authorized: boolean
}

export const Main: React.FunctionComponent<Props> = ({ authorized }: Props) => {
    return (
        <div id={ElementId.Main}>
            <Switch>
                {authorized ? (
                    <Route path={RoutePath.about} component={About} />
                ) : (
                    renderUnauthorized()
                )}
                {renderHomeorUnauthorized(authorized)}
            </Switch>
        </div>
    )
}

const renderHomeorUnauthorized = (authorized: boolean) => {
    if (authorized) {
        return <div>replace this with a routed component</div>
    } else {
        {
            renderUnauthorized()
        }
    }
}

const renderUnauthorized = () => {
    return <div>Unauthorized</div>
}
