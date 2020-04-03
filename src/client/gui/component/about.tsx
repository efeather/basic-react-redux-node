import { ElementId } from '../../../common'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { fetchVersion } from '../../infrastructure'

interface Props {
    authorizationToken: string | null
}

export const About: React.FunctionComponent<Props> = ({
    authorizationToken,
}: Props) => {
    const [version, setVersion] = useState('0.0.0')

    useEffect(() => {
        const getVersion = () => {
            fetchVersion(authorizationToken).then((version: string) =>
                setVersion(version)
            )
        }
        getVersion()
    }, [])

    return <div id={ElementId.About}>The Version is: {version}</div>
}
